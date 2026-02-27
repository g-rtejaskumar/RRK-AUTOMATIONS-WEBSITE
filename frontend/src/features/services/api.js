import { supabase } from "../../lib/supabase";

export const fetchServices = async () => {
  const { data, error } = await supabase
    .from("services")
    .select("*")
    .eq("is_active", true)
    .order("order_index", { ascending: true });

  if (error) throw error;

  return data;
};