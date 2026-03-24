// import { useToast } from "../../hooks/use-toast";

// export function Toaster() {
//   const { toasts } = useToast();

//   return (
//     <div className="fixed top-4 right-4 z-50 space-y-2">
//       {toasts.map((toast) => (
//         <div
//           key={toast.id}
//           className={`rounded-lg px-4 py-3 shadow-md border ${
//             toast.variant === "destructive"
//               ? "bg-destructive text-white"
//               : "bg-card text-foreground"
//           }`}
//         >
//           {toast.title && <p className="font-semibold">{toast.title}</p>}
//           {toast.description && (
//             <p className="text-sm opacity-80">{toast.description}</p>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// }

import { useToast } from "../../hooks/use-toast";
import { motion, AnimatePresence } from "framer-motion";

export function Toaster() {
  const { toasts } = useToast();

  return (
    <div className="fixed top-6 right-6 z-50 space-y-4 w-[320px]">
      <AnimatePresence>
        {toasts.map((toast) => toast.open && (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className={`rounded-xl px-5 py-4 border backdrop-blur-xl shadow-elevated ${
              toast.variant === "destructive"
                ? "bg-red-500/10 border-red-500/40 text-red-400"
                : "bg-card/80 border-border text-foreground"
            }`}
          >
            {toast.title && (
              <p className="font-semibold mb-1">
                {toast.title}
              </p>
            )}
            {toast.description && (
              <p className="text-sm opacity-80">
                {toast.description}
              </p>
            )}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}