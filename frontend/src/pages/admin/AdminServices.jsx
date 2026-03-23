// const fetchServices = async () => {
//   const { data } = await supabase
//     .from("services")
//     .select("*")
//     .order("created_at", { ascending: false });

//   setServices(data);
// };

// const addService = async () => {
//   await supabase.from("services").insert({
//     title,
//     description,
//     icon
//   });

//   fetchServices();
// };

// const deleteService = async (id) => {
//   await supabase
//     .from("services")
//     .delete()
//     .eq("id", id);

//   fetchServices();
// };


// import { useEffect, useState } from "react";
// import { supabase } from "../../lib/supabase";
// import { Button } from "../../components/ui/button";

// const AdminServices = () => {

//   const [services, setServices] = useState([]);
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");

//   useEffect(() => {
//     fetchServices();
//   }, []);

//   const fetchServices = async () => {
//     const { data } = await supabase
//       .from("services")
//       .select("*")
//       .order("created_at", { ascending: false });

//     setServices(data || []);
//   };

//   const addService = async () => {
//     await supabase.from("services").insert({
//       title,
//       description
//     });

//     setTitle("");
//     setDescription("");

//     fetchServices();
//   };

//   const deleteService = async (id) => {
//     await supabase
//       .from("services")
//       .delete()
//       .eq("id", id);

//     fetchServices();
//   };

//   return (
//     <div className="p-8 max-w-4xl mx-auto">

//       <h1 className="text-2xl font-bold mb-6">Manage Services</h1>

//       {/* Add Service */}

//       <div className="mb-6 space-y-3">

//         <input
//           placeholder="Service Title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           className="border p-2 w-full rounded"
//         />

//         <textarea
//           placeholder="Service Description"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//           className="border p-2 w-full rounded"
//         />

//         <Button onClick={addService}>Add Service</Button>

//       </div>

//       {/* List Services */}

//       <div className="space-y-4">

//         {services.map((service) => (
//           <div
//             key={service.id}
//             className="border p-4 rounded flex justify-between"
//           >
//             <div>
//               <h3 className="font-semibold">{service.title}</h3>
//               <p className="text-sm text-muted-foreground">
//                 {service.description}
//               </p>
//             </div>

//             <Button
//               variant="destructive"
//               onClick={() => deleteService(service.id)}
//             >
//               Delete
//             </Button>

//           </div>
//         ))}

//       </div>

//     </div>
//   );
// };

// export default AdminServices;


// import { useEffect, useState } from "react";
// import { supabase } from "../../lib/supabase";
// import { Button } from "../../components/ui/button";

// const AdminServices = () => {

//   const [services, setServices] = useState([]);

//   const [form, setForm] = useState({
//     name: "",
//     problem: "",
//     outcome: "",
//     category: "automation",
//     cta: "Get Started"
//   });

//   useEffect(() => {
//     fetchServices();
//   }, []);

//   const fetchServices = async () => {
//     const { data } = await supabase
//       .from("services")
//       .select("*")
//       .order("order_index", { ascending: true });

//     setServices(data || []);
//   };

//   const addService = async () => {

//     await supabase.from("services").insert({
//       name: form.name,
//       problem: form.problem,
//       outcome: form.outcome,
//       category: form.category,
//       cta: form.cta
//     });

//     setForm({
//       name: "",
//       problem: "",
//       outcome: "",
//       category: "automation",
//       cta: "Get Started"
//     });

//     fetchServices();
//   };

//   const deleteService = async (id) => {

//     await supabase
//       .from("services")
//       .delete()
//       .eq("id", id);

//     fetchServices();
//   };

//   const toggleActive = async (service) => {

//     await supabase
//       .from("services")
//       .update({ is_active: !service.is_active })
//       .eq("id", service.id);

//     fetchServices();
//   };

//   return (
//     <div className="p-8 max-w-5xl mx-auto">

//       <h1 className="text-2xl font-bold mb-6">Manage Services</h1>

//       {/* Add Service */}

//       <div className="space-y-3 mb-10">

//         <input
//           placeholder="Service Name"
//           value={form.name}
//           onChange={(e)=>setForm({...form,name:e.target.value})}
//           className="border p-2 w-full rounded"
//         />

//         <textarea
//           placeholder="Problem"
//           value={form.problem}
//           onChange={(e)=>setForm({...form,problem:e.target.value})}
//           className="border p-2 w-full rounded"
//         />

//         <textarea
//           placeholder="Outcome"
//           value={form.outcome}
//           onChange={(e)=>setForm({...form,outcome:e.target.value})}
//           className="border p-2 w-full rounded"
//         />

//         <select
//           value={form.category}
//           onChange={(e)=>setForm({...form,category:e.target.value})}
//           className="border p-2 w-full rounded"
//         >
//           <option value="automation">Automation</option>
//           <option value="web">Web</option>
//           <option value="agents">AI Agents</option>
//         </select>

//         <input
//           placeholder="CTA text"
//           value={form.cta}
//           onChange={(e)=>setForm({...form,cta:e.target.value})}
//           className="border p-2 w-full rounded"
//         />

//         <Button onClick={addService}>
//           Add Service
//         </Button>

//       </div>

//       {/* Service List */}

//       <div className="space-y-4">

//         {services.map((service)=>(
//           <div
//             key={service.id}
//             className="border p-4 rounded flex justify-between items-center"
//           >

//             <div>
//               <h3 className="font-semibold">{service.name}</h3>
//               <p className="text-sm text-muted-foreground">
//                 {service.problem}
//               </p>
//               <p className="text-xs text-accent">
//                 {service.category}
//               </p>
//             </div>

//             <div className="flex gap-2">

//               <Button
//                 variant="outline"
//                 onClick={()=>toggleActive(service)}
//               >
//                 {service.is_active ? "Disable" : "Enable"}
//               </Button>

//               <Button
//                 variant="destructive"
//                 onClick={()=>deleteService(service.id)}
//               >
//                 Delete
//               </Button>

//             </div>

//           </div>
//         ))}

//       </div>

//     </div>
//   );
// };

// export default AdminServices;




import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
import { Button } from "../../components/ui/button";
import AdminLayout from "../../components/AdminLayout";

const AdminServices = () => {

  const [services, setServices] = useState([]);

  const [form, setForm] = useState({
    name: "",
    problem: "",
    outcome: "",
    category: "automation",
    cta: "Get Started"
  });

  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    const { data } = await supabase
      .from("services")
      .select("*")
      .order("order_index", { ascending: true });

    setServices(data || []);
  };

  const addService = async () => {

    await supabase.from("services").insert({
      name: form.name,
      problem: form.problem,
      outcome: form.outcome,
      category: form.category,
      cta: form.cta,
      is_active: true // Ensure new services are active by default
    });

    resetForm();
    fetchServices();
  };

  const updateService = async () => {

    await supabase
      .from("services")
      .update({
        name: form.name,
        problem: form.problem,
        outcome: form.outcome,
        category: form.category,
        cta: form.cta
      })
      .eq("id", editId);

    resetForm();
    fetchServices();
  };

  const deleteService = async (id) => {

    await supabase
      .from("services")
      .delete()
      .eq("id", id);

    fetchServices();
  };

  const toggleActive = async (service) => {

    await supabase
      .from("services")
      .update({ is_active: !service.is_active })
      .eq("id", service.id);

    fetchServices();
  };

  const startEdit = (service) => {

    setEditId(service.id);

    setForm({
      name: service.name || "",
      problem: service.problem || "",
      outcome: service.outcome || "",
      category: service.category || "automation",
      cta: service.cta || "Get Started"
    });
  };

  const resetForm = () => {
    setForm({
      name: "",
      problem: "",
      outcome: "",
      category: "automation",
      cta: "Get Started"
    });

    setEditId(null);
  };

  return (
    <AdminLayout title="Manage Services">

      {/* Add / Edit Form */}

      <div className="bg-card p-6 rounded-xl border border-border shadow-sm mb-10 space-y-4">
        <h2 className="text-lg font-semibold mb-4">{editId ? "Edit Service" : "Add New Service"}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-medium text-muted-foreground mb-1 block">Service Name</label>
            <input
              placeholder="e.g. AI Customer Support"
              value={form.name}
              onChange={(e)=>setForm({...form,name:e.target.value})}
              className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-shadow"
            />
          </div>

          <div>
            <label className="text-xs font-medium text-muted-foreground mb-1 block">Category</label>
            <select
              value={form.category}
              onChange={(e)=>setForm({...form,category:e.target.value})}
              className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-shadow appearance-none"
            >
              <option value="automation">Automation</option>
              <option value="web">Web</option>
              <option value="agents">AI Agents</option>
            </select>
          </div>
        </div>

        <div>
          <label className="text-xs font-medium text-muted-foreground mb-1 block">Problem (What does the client face?)</label>
          <textarea
            placeholder="Describe the problem..."
            value={form.problem}
            onChange={(e)=>setForm({...form,problem:e.target.value})}
            className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-shadow h-24 resize-y"
          />
        </div>

        <div>
          <label className="text-xs font-medium text-muted-foreground mb-1 block">Outcome (What is the solution/result?)</label>
          <textarea
            placeholder="Describe the outcome..."
            value={form.outcome}
            onChange={(e)=>setForm({...form,outcome:e.target.value})}
            className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-shadow h-24 resize-y"
          />
        </div>

        <div>
          <label className="text-xs font-medium text-muted-foreground mb-1 block">CTA Text</label>
          <input
            placeholder="e.g. Get Started"
            value={form.cta}
            onChange={(e)=>setForm({...form,cta:e.target.value})}
            className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-shadow md:w-1/2"
          />
        </div>

        <div className="flex gap-3 pt-4 border-t border-border mt-6">
          <Button onClick={editId ? updateService : addService}>
            {editId ? "Update Service" : "Create Service"}
          </Button>

          {editId && (
            <Button variant="outline" onClick={resetForm}>
              Cancel
            </Button>
          )}
        </div>
      </div>

      {/* Service List */}

      <div className="space-y-4">

        {services.map((service)=>(
          <div
            key={service.id}
            className="border border-border bg-card p-5 rounded-xl flex justify-between items-start"
          >

            <div className="max-w-xl">
              <div className="flex items-center gap-3 mb-1">
                <h3 className="font-bold text-lg">
                  {service.name}
                </h3>
                {service.is_active !== false ? (
                  <span className="bg-green-500/10 text-green-500 text-[10px] uppercase font-bold px-2 py-0.5 rounded-full">
                    Active
                  </span>
                ) : (
                  <span className="bg-destructive/10 text-destructive text-[10px] uppercase font-bold px-2 py-0.5 rounded-full">
                    Hidden
                  </span>
                )}
              </div>

              <p className="text-sm text-muted-foreground mb-2">
                <span className="font-medium text-foreground">Problem:</span> {service.problem}
              </p>

              <p className="text-sm text-accent mb-2">
                <span className="font-medium text-foreground">Outcome:</span> {service.outcome}
              </p>

              <div className="inline-block bg-muted text-muted-foreground text-xs px-2 py-1 rounded-md mb-2">
                Category: <span className="font-semibold">{service.category}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2">

              <Button
                variant="outline"
                size="sm"
                onClick={()=>startEdit(service)}
              >
                Edit
              </Button>

              <Button
                variant={service.is_active !== false ? "outline" : "default"}
                size="sm"
                onClick={()=>toggleActive(service)}
              >
                {service.is_active !== false ? "Hide on Site" : "Show on Site"}
              </Button>

              <Button
                variant="destructive"
                size="sm"
                onClick={()=>deleteService(service.id)}
              >
                Delete
              </Button>

            </div>

          </div>
        ))}

      </div>

    </AdminLayout>
  );
};

export default AdminServices;