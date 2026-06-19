import { supabase } from "../../lib/supabase";

export const fetchPricingPlans = async () => {
  // pricing_plans has no is_active column (verified schema) — do not filter on it.
  const { data, error } = await supabase
    .from("pricing_plans")
    .select("*")
    .order("order_index", { ascending: true });

  if (error) throw error;

  return data;
};