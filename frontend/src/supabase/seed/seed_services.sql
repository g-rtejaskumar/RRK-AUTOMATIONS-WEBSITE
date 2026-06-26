-- ============================================================
-- seed_services.sql
-- Reseed public.services from the production export.
-- features is text[]  -> use ARRAY['a','b'] (or '{a,b}')
-- price_inr / price_usd are integer (no currency symbols/commas)
-- Run AFTER 0002_services.sql.
--
-- Replace the example row(s) below with your exported data.
-- ids are omitted so the new project generates fresh uuids
-- (services has no inbound foreign keys — no UUID remapping needed).
-- ============================================================

insert into public.services
  (name, description, category, price_inr, price_usd, features, cta, popular, order_index, is_active)
values
  -- ('Example Service',
  --  'Short description / problem statement',
  --  'automation',
  --  25000, 299,
  --  ARRAY['Outcome or feature 1', 'Outcome or feature 2'],
  --  'Book Free Audit', false, 0, true),
  ;
