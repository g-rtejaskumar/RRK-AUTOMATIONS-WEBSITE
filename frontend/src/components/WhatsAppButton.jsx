import { MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

const WhatsAppButton = () => {
  const [whatsappNumber, setWhatsappNumber] = useState(null);

  useEffect(() => {
    const fetchNumber = async () => {
      const { data } = await supabase
        .from("site_settings")
        .select("value")
        .eq("key", "whatsapp_number")
        .single();

      if (data) {
        setWhatsappNumber(data.value);
      }
    };

    fetchNumber();
  }, []);

  if (!whatsappNumber) return null;

  return (
    <a
      href={`https://wa.me/${whatsappNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[hsl(142_70%_49%)] text-white rounded-full flex items-center justify-center shadow-glow hover:scale-110 transition-transform duration-200"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
};

export default WhatsAppButton;