import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./hooks/AuthContext";
import { Toaster } from "./components/ui/toaster";
import { lazy, Suspense } from "react";
import "./index.css";

// Pages
import Index from "./pages/index";
import ScrollToTop from "./components/ScrollToTop";
const Services = lazy(() => import("./pages/Services"));
const Pricing = lazy(() => import("./pages/Pricing"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const CaseStudies = lazy(() => import("./pages/CaseStudies"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const Blog = lazy(() => import("./pages/Blog"));
const ABCB = lazy(() => import("./pages/ABCB"));
const Auth = lazy(() => import("./pages/Auth"));
const Admin = lazy(() => import("./pages/admin/Admin"));
const AdminServices = lazy(() => import("./pages/admin/AdminServices"));
const AdminPricing = lazy(() => import("./pages/admin/AdminPricing"));
const NotFound = lazy(() => import("./pages/NotFound"));

const Loading = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="w-8 h-8 border-2 border-secondary border-t-transparent rounded-full animate-spin" />
  </div>
);

const App = () => {
  return (
    <AuthProvider>
      <Toaster />
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<Services />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/abcb" element={<ABCB />} />
            
            {/* Auth & Admin */}
            <Route path="/auth" element={<Auth />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/admin/services" element={<AdminServices />} />
            <Route path="/admin/pricing" element={<AdminPricing />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;