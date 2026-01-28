import { SiWhatsapp } from "@icons-pack/react-simple-icons";

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://www.whatsapp.com/channel/0029VaabZQW6buMF8knzA02K"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 p-4 bg-[#25D366] rounded-full text-white shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:bg-[#20bd5a] transition-all hover:-translate-y-1 hover:scale-105 flex items-center justify-center group">
      <SiWhatsapp size={26} className="fill-white" />
      <span className="absolute -top-1 -right-1 flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500 border-2 border-[#25D366]"></span>
      </span>
    </a>
  );
}
