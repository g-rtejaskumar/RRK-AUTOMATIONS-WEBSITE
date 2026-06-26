-- ============================================================
-- seed_pricing_plans.sql
-- Reseed public.pricing_plans from the production export.
-- features is jsonb -> use '["a","b"]'::jsonb
-- price_inr / price_usd are integer (no currency symbols/commas)
-- Run AFTER 0003_pricing.sql.
--
-- Replace the example row(s) below with your exported data.
-- ids omitted so the new project generates fresh uuids
-- (pricing_plans has no inbound foreign keys — no UUID remapping needed).
-- ============================================================

insert into public.pricing_plans
  (name, description, price_inr, price_usd, features, cta, popular, order_index)
values
  -- ('Starter',
  --  'Short plan description',
  --  25000, 299,
  --  '["Feature 1","Feature 2","Feature 3"]'::jsonb,
  --  'Get Started', false, 0),
  ;
