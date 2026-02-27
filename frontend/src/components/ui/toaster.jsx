import { useToast } from "../../hooks/use-toast";

export function Toaster() {
  const { toasts } = useToast();

  return (
    <div className="fixed top-4 right-4 z-50 space-y-2">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`rounded-lg px-4 py-3 shadow-md border ${
            toast.variant === "destructive"
              ? "bg-destructive text-white"
              : "bg-card text-foreground"
          }`}
        >
          {toast.title && <p className="font-semibold">{toast.title}</p>}
          {toast.description && (
            <p className="text-sm opacity-80">{toast.description}</p>
          )}
        </div>
      ))}
    </div>
  );
}