import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  const whatsappMessage = encodeURIComponent(
    "Hola, quiero cotizar un proyecto de remodelación."
  );

  const whatsappLink = `https://wa.me/56967261907?text=${whatsappMessage}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      title="Escríbenos por WhatsApp"
      className="
        fixed
        bottom-6
        right-6
        z-[9999]
        flex
        h-14
        w-14
        items-center
        justify-center
        rounded-full
        bg-green-500
        text-white
        shadow-lg
        transition-all
        duration-300
        hover:scale-110
        hover:bg-green-600
      "
    >
      <MessageCircle size={30} />
    </a>
  );
}