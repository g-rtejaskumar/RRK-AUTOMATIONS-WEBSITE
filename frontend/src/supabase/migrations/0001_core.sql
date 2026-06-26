-- ============================================================
-- 0001_core.sql
-- Core auth/identity + leads. Source of truth: verified production schema.
-- profiles, user_roles, leads + enum, functions, triggers, RLS.
-- ============================================================

-- Extensions
create extension if not exists "uuid-ossp";   -- uuid_generate_v4() for content tables (0002/0003)
-- gen_random_uuid() is built into PostgreSQL 13+ (used by core tables below)

-- ---- Enums ----
create type public.app_role as enum ('admin', 'user');

-- ---- Tables ----
create table public.profiles (
  id          uuid not null primary key references auth.users(id) on delete cascade,
  email       text,
  full_name   text,
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now()
);

create table public.user_roles (
  id          uuid primary key default gen_random_uuid(),
  user_id     uuid not null references auth.users(id) on delete cascade,
  role        public.app_role not null default 'user',
  created_at  timestamptz not null default now(),
  unique (user_id, role)
);

create table public.leads (
  id            uuid primary key default gen_random_uuid(),
  name          text not null,
  email         text not null,
  phone         text,
  business_name text,
  message       text not null,
  status        text not null default 'new',
  created_at    timestamptz not null default now(),
  updated_at    timestamptz not null default now()
);

-- ---- Row Level Security ----
alter table public.profiles   enable row level security;
alter table public.user_roles enable row level security;
alter table public.leads      enable row level security;

-- ---- Functions ----
-- Role check used by every admin policy. SECURITY DEFINER so it can read
-- user_roles regardless of the caller's own RLS.
create or replace function public.has_role(_user_id uuid, _role public.app_role)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.user_roles
    where user_id = _user_id and role = _role
  )
$$;

-- Auto-provision profile + default 'user' role on signup.
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, email, full_name)
  values (new.id, new.email, new.raw_user_meta_data ->> 'full_name');

  insert into public.user_roles (user_id, role)
  values (new.id, 'user');

  return new;
end;
$$;

-- updated_at maintenance.
create or replace function public.update_updated_at_column()
returns trigger
language plpgsql
set search_path = public
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

-- ---- Triggers ----
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

create trigger update_profiles_updated_at
  before update on public.profiles
  for each row execute function public.update_updated_at_column();

create trigger update_leads_updated_at
  before update on public.leads
  for each row execute function public.update_updated_at_column();

-- ---- RLS Policies: profiles ----
create policy "Users can view their own profile"
  on public.profiles for select
  using (auth.uid() = id);

create policy "Users can update their own profile"
  on public.profiles for update
  using (auth.uid() = id);

create policy "Admins can view all profiles"
  on public.profiles for select
  using (public.has_role(auth.uid(), 'admin'));

-- ---- RLS Policies: user_roles ----
create policy "Users can view their own roles"
  on public.user_roles for select
  using (auth.uid() = user_id);

create policy "Admins can view all roles"
  on public.user_roles for select
  using (public.has_role(auth.uid(), 'admin'));

create policy "Admins can manage roles"
  on public.user_roles for all
  using (public.has_role(auth.uid(), 'admin'));

-- ---- RLS Policies: leads ----
create policy "Anyone can submit leads"
  on public.leads for insert
  with check (true);

create policy "Admins can view all leads"
  on public.leads for select
  using (public.has_role(auth.uid(), 'admin'));

create policy "Admins can update leads"
  on public.leads for update
  using (public.has_role(auth.uid(), 'admin'));

create policy "Admins can delete leads"
  on public.leads for delete
  using (public.has_role(auth.uid(), 'admin'));
