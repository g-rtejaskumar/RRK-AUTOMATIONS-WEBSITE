// import { Toaster } from "./components/ui/toaster";
// import { Toaster as Sonner } from "./components/ui/sonner";
// import { TooltipProvider } from "./components/ui/tooltip";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { AuthProvider } from "./hooks/useAuth";

// import Index from "./pages/index";
// import Auth from "./pages/Auth";
// import Admin from "./pages/Admin";
// import NotFound from "./pages/NotFound";

// const queryClient = new QueryClient();

// const App = () => {
//   return (
//     <QueryClientProvider client={queryClient}>
//       <TooltipProvider>
//         <AuthProvider>
//           <Toaster />
//           <Sonner />

//           <BrowserRouter>
//             <Routes>
//               <Route path="/" element={<Index />} />
//               <Route path="/auth" element={<Auth />} />
//               <Route path="/admin" element={<Admin />} />
//               <Route path="*" element={<NotFound />} />
//             </Routes>
//           </BrowserRouter>
//         </AuthProvider>
//       </TooltipProvider>
//     </QueryClientProvider>
//   );
// };

// export default App;


// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { AuthProvider } from "./hooks/useAuth";
// import { Toaster } from "./components/ui/toaster";

// import Index from "./pages/index";
// import Auth from "./pages/Auth";
// import Admin from "./pages/Admin";
// import NotFound from "./pages/NotFound";

// const App = () => {
//   return (
//     <AuthProvider>
//       <Toaster />

//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Index />} />
//           <Route path="/auth" element={<Auth />} />
//           <Route path="/admin" element={<Admin />} />
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </BrowserRouter>
//     </AuthProvider>
//   );
// };

// export default App;


import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./hooks/AuthContext";
import { Toaster } from "./components/ui/toaster";

import Index from "./pages/index";
import Auth from "./pages/Auth";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";
import "./index.css";

const App = () => {
  return (
    <AuthProvider>
      <Toaster />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;