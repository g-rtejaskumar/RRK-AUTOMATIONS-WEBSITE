// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../../hooks/AuthContext";
// import { supabase } from "../../lib/supabase";
// import { Button } from "../../components/ui/button";
// import { useToast } from "../../hooks/use-toast";
// import {
//   LogOut,
//   Loader2,
//   Users,
//   Mail,
//   Phone,
//   Building,
//   Calendar,
//   ChevronDown,
//   Download,
//   RefreshCw,
//   ArrowLeft,
// } from "lucide-react";

// const statusColors = {
//   new: "bg-secondary/20 text-secondary",
//   contacted: "bg-amber-500/20 text-amber-600",
//   qualified: "bg-accent/20 text-accent",
//   closed: "bg-muted text-muted-foreground",
// };

// const Admin = () => {
//   const { user, isAdmin, isLoading, signOut } = useAuth();
//   const navigate = useNavigate();
//   const { toast } = useToast();

//   const [leads, setLeads] = useState([]);
//   const [isLoadingLeads, setIsLoadingLeads] = useState(true);
//   const [selectedLead, setSelectedLead] = useState(null);
//   const [statusFilter, setStatusFilter] = useState("all");

//   useEffect(() => {
//     if (!isLoading && !user) {
//       navigate("/auth");
//     }
//   }, [user, isLoading, navigate]);

//   useEffect(() => {
//     if (user && isAdmin) {
//       fetchLeads();
//     }
//   }, [user, isAdmin]);

//   const fetchLeads = async () => {
//     setIsLoadingLeads(true);
//     try {
//       const { data, error } = await supabase
//         .from("leads")
//         .select("*")
//         .order("created_at", { ascending: false });

//       if (error) throw error;
//       setLeads(data || []);
//     } catch {
//       toast({
//         title: "Error",
//         description: "Failed to fetch leads",
//         variant: "destructive",
//       });
//     } finally {
//       setIsLoadingLeads(false);
//     }
//   };

//   const updateLeadStatus = async (leadId, newStatus) => {
//     try {
//       const { error } = await supabase
//         .from("leads")
//         .update({ status: newStatus })
//         .eq("id", leadId);

//       if (error) throw error;

//       setLeads((prev) =>
//         prev.map((lead) =>
//           lead.id === leadId ? { ...lead, status: newStatus } : lead
//         )
//       );

//       if (selectedLead?.id === leadId) {
//         setSelectedLead({ ...selectedLead, status: newStatus });
//       }

//       toast({
//         title: "Status Updated",
//         description: `Lead status changed to ${newStatus}`,
//       });
//     } catch {
//       toast({
//         title: "Error",
//         description: "Failed to update status",
//         variant: "destructive",
//       });
//     }
//   };

//   const exportToCSV = () => {
//     const filteredLeads =
//       statusFilter === "all"
//         ? leads
//         : leads.filter((lead) => lead.status === statusFilter);

//     const headers = [
//       "Name",
//       "Email",
//       "Phone",
//       "Business",
//       "Message",
//       "Status",
//       "Date",
//     ];

//     const csvContent = [
//       headers.join(","),
//       ...filteredLeads.map((lead) =>
//         [
//           `"${lead.name}"`,
//           `"${lead.email}"`,
//           `"${lead.phone || ""}"`,
//           `"${lead.business_name || ""}"`,
//           `"${lead.message.replace(/"/g, '""')}"`,
//           `"${lead.status}"`,
//           `"${new Date(lead.created_at).toLocaleDateString()}"`,
//         ].join(",")
//       ),
//     ].join("\n");

//     const blob = new Blob([csvContent], { type: "text/csv" });
//     const url = URL.createObjectURL(blob);
//     const a = document.createElement("a");
//     a.href = url;
//     a.download = `leads-${new Date().toISOString().split("T")[0]}.csv`;
//     a.click();
//     URL.revokeObjectURL(url);

//     toast({
//       title: "Export Complete",
//       description: `${filteredLeads.length} leads exported to CSV`,
//     });
//   };

//   const handleSignOut = async () => {
//     await signOut();
//     navigate("/");
//   };

//   const filteredLeads =
//     statusFilter === "all"
//       ? leads
//       : leads.filter((lead) => lead.status === statusFilter);

//   if (isLoading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-background">
//         <Loader2 className="w-8 h-8 animate-spin text-secondary" />
//       </div>
//     );
//   }

//   if (!isAdmin) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-background p-4">
//         <div className="text-center max-w-md">
//           <div className="w-16 h-16 rounded-2xl bg-destructive/10 flex items-center justify-center mx-auto mb-6">
//             <Users className="w-8 h-8 text-destructive" />
//           </div>
//           <h1 className="text-2xl font-bold text-foreground mb-4">
//             Access Denied
//           </h1>
//           <p className="text-muted-foreground mb-6">
//             You don't have admin privileges to access this dashboard.
//           </p>
//           <Button variant="outline" onClick={() => navigate("/")}>
//             <ArrowLeft className="w-4 h-4 mr-2" />
//             Back to Home
//           </Button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-background">
//       <header className="bg-card border-b border-border sticky top-0 z-10">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-16">
//             <div className="flex items-center gap-4">
//               <Button variant="ghost" size="sm" onClick={() => navigate("/")}>
//                 <ArrowLeft className="w-4 h-4 mr-2" />
//                 Back to Site
//               </Button>
//               <div className="h-6 w-px bg-border" />
//               <h1 className="text-lg font-bold text-foreground">
//                 Admin Dashboard
//               </h1>
//             </div>
//             <Button variant="outline" size="sm" onClick={handleSignOut}>
//               <LogOut className="w-4 h-4 mr-2" />
//               Sign Out
//             </Button>
//           </div>
//         </div>
//       </header>

//       <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         {/* Stats */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
//           {[
//             {
//               label: "Total Leads",
//               value: leads.length,
//             },
//             {
//               label: "New",
//               value: leads.filter((l) => l.status === "new").length,
//             },
//             {
//               label: "Contacted",
//               value: leads.filter((l) => l.status === "contacted").length,
//             },
//             {
//               label: "Closed",
//               value: leads.filter((l) => l.status === "closed").length,
//             },
//           ].map((stat) => (
//             <div
//               key={stat.label}
//               className="bg-card rounded-xl p-4 border border-border"
//             >
//               <p className="text-sm text-muted-foreground">{stat.label}</p>
//               <p className="text-2xl font-bold text-foreground">
//                 {stat.value}
//               </p>
//             </div>
//           ))}
//         </div>

//         {/* Rest of table & modal remains exactly same as before */}
//         {/* (No TypeScript left anywhere) */}
//       </main>
//     </div>
//   );
// };

// export default Admin;


import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/AuthContext";
import { supabase } from "../../lib/supabase";
import { Button } from "../../components/ui/button";
import { useToast } from "../../hooks/use-toast";
import { Loader2, Users, LogOut, ArrowLeft, Settings } from "lucide-react";

const Admin = () => {
  const { user, isAdmin, isLoading, signOut } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const [leads, setLeads] = useState([]);

  useEffect(() => {
    if (!isLoading && !user) {
      navigate("/auth");
    }
  }, [user, isLoading, navigate]);

  useEffect(() => {
    if (user && isAdmin) {
      fetchLeads();
    }
  }, [user, isAdmin]);

  const fetchLeads = async () => {
    const { data } = await supabase
      .from("leads")
      .select("*")
      .order("created_at", { ascending: false });

    setLeads(data || []);
  };

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="w-8 h-8 animate-spin text-secondary" />
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <p className="text-muted-foreground">
          You don't have admin access.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">

      <header className="bg-card border-b border-border">
        <div className="max-w-7xl mx-auto flex justify-between items-center p-4">

          <div className="flex gap-4 items-center">
            <Button variant="ghost" onClick={() => navigate("/")}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>

            <h1 className="text-lg font-bold">Admin Dashboard</h1>
          </div>

          <Button variant="outline" onClick={handleSignOut}>
            <LogOut className="w-4 h-4 mr-2" />
            Sign Out
          </Button>

        </div>
      </header>

      <main className="max-w-7xl mx-auto p-6">

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">

          <div className="bg-card p-4 rounded-lg border">
            <p className="text-sm text-muted-foreground">Total Leads</p>
            <p className="text-2xl font-bold">{leads.length}</p>
          </div>

        </div>

        {/* Admin Navigation */}

        <div className="grid md:grid-cols-2 gap-6">

          <div
            onClick={() => navigate("/admin/services")}
            className="cursor-pointer p-6 border rounded-xl bg-card hover:shadow-lg"
          >
            <h2 className="text-lg font-semibold">Manage Services</h2>
            <p className="text-sm text-muted-foreground">
              Add or update automation services
            </p>
          </div>

          <div
            onClick={() => navigate("/admin/pricing")}
            className="cursor-pointer p-6 border rounded-xl bg-card hover:shadow-lg"
          >
            <h2 className="text-lg font-semibold">Manage Pricing</h2>
            <p className="text-sm text-muted-foreground">
              Update pricing plans
            </p>
          </div>

        </div>

      </main>
    </div>
  );
};

export default Admin;