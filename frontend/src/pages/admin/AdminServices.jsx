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
      cta: form.cta
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
    <div className="p-8 max-w-5xl mx-auto">

      <h1 className="text-2xl font-bold mb-6">
        Manage Services
      </h1>

      {/* Add / Edit Form */}

      <div className="space-y-3 mb-10">

        <input
          placeholder="Service Name"
          value={form.name}
          onChange={(e)=>setForm({...form,name:e.target.value})}
          className="border p-2 w-full rounded"
        />

        <textarea
          placeholder="Problem"
          value={form.problem}
          onChange={(e)=>setForm({...form,problem:e.target.value})}
          className="border p-2 w-full rounded"
        />

        <textarea
          placeholder="Outcome"
          value={form.outcome}
          onChange={(e)=>setForm({...form,outcome:e.target.value})}
          className="border p-2 w-full rounded"
        />

        <select
          value={form.category}
          onChange={(e)=>setForm({...form,category:e.target.value})}
          className="border p-2 w-full rounded"
        >
          <option value="automation">Automation</option>
          <option value="web">Web</option>
          <option value="agents">AI Agents</option>
        </select>

        <input
          placeholder="CTA text"
          value={form.cta}
          onChange={(e)=>setForm({...form,cta:e.target.value})}
          className="border p-2 w-full rounded"
        />

        <div className="flex gap-3">

          {editId ? (
            <>
              <Button onClick={updateService}>
                Update Service
              </Button>

              <Button variant="outline" onClick={resetForm}>
                Cancel
              </Button>
            </>
          ) : (
            <Button onClick={addService}>
              Add Service
            </Button>
          )}

        </div>

      </div>

      {/* Service List */}

      <div className="space-y-4">

        {services.map((service)=>(
          <div
            key={service.id}
            className="border p-4 rounded flex justify-between items-center"
          >

            <div>
              <h3 className="font-semibold">
                {service.name}
              </h3>

              <p className="text-sm text-muted-foreground">
                {service.problem}
              </p>

              <p className="text-xs text-accent">
                {service.category}
              </p>
            </div>

            <div className="flex gap-2">

              <Button
                variant="outline"
                onClick={()=>startEdit(service)}
              >
                Edit
              </Button>

              <Button
                variant="outline"
                onClick={()=>toggleActive(service)}
              >
                {service.is_active ? "Disable" : "Enable"}
              </Button>

              <Button
                variant="destructive"
                onClick={()=>deleteService(service.id)}
              >
                Delete
              </Button>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
};

export default AdminServices;