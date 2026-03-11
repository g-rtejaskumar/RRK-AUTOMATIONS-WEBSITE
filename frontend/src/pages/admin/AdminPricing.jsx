import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
import { Button } from "../../components/ui/button";

const AdminPricing = () => {

  const [plans, setPlans] = useState([]);

  useEffect(() => {
    fetchPlans();
  }, []);

  const fetchPlans = async () => {
    const { data } = await supabase
      .from("pricing_plans")
      .select("*");

    setPlans(data || []);
  };

  const updatePrice = async (id, field, value) => {
    await supabase
      .from("pricing_plans")
      .update({ [field]: value })
      .eq("id", id);

    fetchPlans();
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">

      <h1 className="text-2xl font-bold mb-6">Manage Pricing</h1>

      <div className="space-y-4">

        {plans.map((plan) => (

          <div key={plan.id} className="border p-4 rounded space-y-2">

            <h2 className="font-semibold">{plan.name}</h2>

            <input
              value={plan.price_inr}
              onChange={(e) =>
                updatePrice(plan.id, "price_inr", e.target.value)
              }
              className="border p-2 rounded w-full"
            />

            <input
              value={plan.price_usd}
              onChange={(e) =>
                updatePrice(plan.id, "price_usd", e.target.value)
              }
              className="border p-2 rounded w-full"
            />

          </div>

        ))}

      </div>

    </div>
  );
};

export default AdminPricing;