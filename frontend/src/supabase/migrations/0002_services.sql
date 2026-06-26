-- ============================================================
-- 0002_services.sql
-- services table — ACTUAL production schema (types as verified).
-- Depends on 0001_core.sql (has_role, uuid-ossp).
-- ============================================================

create table public.services (
  id          uuid primary key default uuid_generate_v4(),
  name        text not null,
  description text,
  category    text not null,
  price_inr   integer,
  price_usd   integer,
  features    text[],
  cta         text default 'Get Started',
  popular     boolean default false,
  order_index integer default 0,
  is_active   boolean default true,
  created_at  timestamptz default now()
);

-- Index the access pattern: active rows ordered by order_index, grouped by category.
create index idx_services_active_order on public.services (is_active, order_index);
create index idx_services_category     on public.services (category);

alter table public.services enable row level security;

-- Public read (homepage / services page render active services).
create policy "Public can read services"
  on public.services for select
  using (true);

-- Admin full CRUD.
create policy "Admins can insert services"
  on public.services for insert
  with check (public.has_role(auth.uid(), 'admin'));

create policy "Admins can update services"
  on public.services for update
  using (public.has_role(auth.uid(), 'admin'))
  with check (public.has_role(auth.uid(), 'admin'));

create policy "Admins can delete services"
  on public.services for delete
  using (public.has_role(auth.uid(), 'admin'));
