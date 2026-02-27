import { supabase } from "../../lib/supabase";

export const fetchPricingPlans = async () => {
  const { data, error } = await supabase
    .from("pricing_plans")
    .select("*")
    .eq("is_active", true)
    .order("order_index", { ascending: true });

  if (error) throw error;

  return data;
};