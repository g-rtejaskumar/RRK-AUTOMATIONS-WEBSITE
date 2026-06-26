-- ============================================================
-- 0003_pricing.sql
-- pricing_plans table — ACTUAL production schema (types as verified).
-- Depends on 0001_core.sql (has_role, uuid-ossp).
-- ============================================================

create table public.pricing_plans (
  id          uuid primary key default uuid_generate_v4(),
  name        text not null,
  description text,
  price_inr   integer,
  price_usd   integer,
  features    jsonb,
  cta         text default 'Get Started',
  popular     boolean default false,
  order_index integer default 0,
  created_at  timestamptz default now()
);

-- Index the access pattern: ordered by order_index.
create index idx_pricing_order on public.pricing_plans (order_index);

alter table public.pricing_plans enable row level security;

-- Public read (pricing page / PricingSection render plans).
create policy "Public can read pricing_plans"
  on public.pricing_plans for select
  using (true);

-- Admin full CRUD.
create policy "Admins can insert pricing_plans"
  on public.pricing_plans for insert
  with check (public.has_role(auth.uid(), 'admin'));

create policy "Admins can update pricing_plans"
  on public.pricing_plans for update
  using (public.has_role(auth.uid(), 'admin'))
  with check (public.has_role(auth.uid(), 'admin'));

create policy "Admins can delete pricing_plans"
  on public.pricing_plans for delete
  using (public.has_role(auth.uid(), 'admin'));
