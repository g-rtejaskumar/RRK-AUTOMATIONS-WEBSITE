import { getSupabase } from "../../lib/supabase";

export const fetchServices = async () => {
  const sb = await getSupabase();
  const { data, error } = await sb
    .from("services")
    .select("*")
    .eq("is_active", true)
    .order("order_index", { ascending: true });

  if (error) throw error;

  return data;
};