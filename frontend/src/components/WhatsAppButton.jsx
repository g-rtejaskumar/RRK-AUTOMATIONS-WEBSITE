// import { MessageCircle } from "lucide-react";
// import { useEffect, useState } from "react";
// import { supabase } from "../lib/supabase";

// const WhatsAppButton = () => {
//   const [whatsappNumber, setWhatsappNumber] = useState(null);

//   useEffect(() => {
//     const fetchNumber = async () => {
//       const { data } = await supabase
//         .from("site_settings")
//         .select("value")
//         .eq("key", "whatsapp_number")
//         .single();

//       if (data) {
//         setWhatsappNumber(data.value);
//       }
//     };

//     fetchNumber();
//   }, []);

//   if (!whatsappNumber) return null;

//   return (
//     <a
//       href={`https://wa.me/${whatsappNumber}`}
//       target="_blank"
//       rel="noopener noreferrer"
//       className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[hsl(142_70%_49%)] text-white rounded-full flex items-center justify-center shadow-glow hover:scale-110 transition-transform duration-200"
//       aria-label="Chat on WhatsApp"
//     >
//       <MessageCircle className="w-6 h-6" />
//     </a>
//   );
// };

// export default WhatsAppButton;

import { MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { motion } from "framer-motion";

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
    <motion.a
      href={`https://wa.me/${whatsappNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.4 }}
      whileHover={{ scale: 1.12 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-green-600 text-white flex items-center justify-center shadow-lg hover:shadow-green-500/40 transition-all duration-300"
    >
      {/* Glow Ring */}
      <span className="absolute inset-0 rounded-full bg-green-500/30 blur-xl animate-pulse pointer-events-none" />

      {/* Icon */}
      <MessageCircle className="w-7 h-7 relative z-10" />
    </motion.a>
  );
};

export default WhatsAppButton;