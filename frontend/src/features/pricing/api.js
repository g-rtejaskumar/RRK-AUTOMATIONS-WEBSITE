import { getSupabase } from "../../lib/supabase";

export const fetchPricingPlans = async () => {
  const sb = await getSupabase();
  const { data, error } = await sb
    .from("pricing_plans")
    .select("*")
    .order("order_index", { ascending: true });

  if (error) throw error;

  return data;
};