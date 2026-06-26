import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  useRef,
} from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  X,
  User,
  Mail,
  Phone,
  Building2,
  Calendar,
  ArrowRight,
  Loader2,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { getSupabase } from "../lib/supabase";
import { buildCalendlyUrl } from "../lib/calendly";

const GateContext = createContext(null);

/**
 * useCalendlyGate() → { openGate, closeGate }
 * Call openGate() from any "Book Free Audit" CTA.
 */
export function useCalendlyGate() {
  const ctx = useContext(GateContext);
  if (!ctx) {
    throw new Error("useCalendlyGate must be used within <CalendlyGateProvider>");
  }
  return ctx;
}

const EMPTY = { name: "", email: "", phone: "", business: "", company_website: "" };

import { lazy, Suspense } from "react";

const LeadGateModal = lazy(() => import("./LeadGateModalContent"));

export function CalendlyGateProvider({ children }) {
  const [isOpen, setOpen] = useState(false);
  const [source, setSource] = useState(null);

  const openGate = useCallback((opts = {}) => {
    setSource(opts.source ?? null);
    setOpen(true);
  }, []);
  const closeGate = useCallback(() => setOpen(false), []);

  return (
    <GateContext.Provider value={{ openGate, closeGate }}>
      {children}
      {isOpen && (
        <Suspense fallback={null}>
          <LeadGateModal isOpen={isOpen} onClose={closeGate} source={source} />
        </Suspense>
      )}
    </GateContext.Provider>
  );
}


