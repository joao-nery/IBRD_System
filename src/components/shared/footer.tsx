import { MapPin, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { SiInstagram } from "@icons-pack/react-simple-icons";
import Image from "next/image";

export default function Footer() {
  // Endereço codificado para URL (seguro para links)
  const addressEncoded = encodeURIComponent(
    "Rua Dois, 417, Parque das Acácias, Betim - MG"
  );

  return (
    <footer
      id="contato"
      className="bg-zinc-50 dark:bg-black border-t border-zinc-200 dark:border-zinc-800 pt-20 pb-10 transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Marca */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="relative w-8 h-8 rounded-full overflow-hidden border border-zinc-200 dark:border-zinc-800">
                <Image
                  src="/logo.jpg"
                  alt="Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="font-bold text-lg text-zinc-900 dark:text-white">
                IBRD
              </span>
            </div>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed max-w-xs">
              Levando a palavra de Deus e transformando vidas no Parque das
              Acácias desde 2020.
            </p>

            <div className="flex gap-3">
              <Button
                size="icon"
                variant="outline"
                className="rounded-full border-zinc-300 dark:border-zinc-800 hover:bg-white dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-400 bg-white dark:bg-transparent">
                <SiInstagram size={18} />
              </Button>
              <Button
                size="icon"
                variant="outline"
                className="rounded-full border-zinc-300 dark:border-zinc-800 hover:bg-white dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-400 bg-white dark:bg-transparent">
                <MessageCircle size={18} />
              </Button>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-zinc-900 dark:text-white mb-6">
              Navegação
            </h4>
            <ul className="space-y-3 text-sm text-zinc-500 dark:text-zinc-400">
              {["Início", "Quem Somos", "Ministérios", "Dízimos e Ofertas"].map(
                (link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="hover:text-black dark:hover:text-white transition-colors">
                      {link}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-semibold text-zinc-900 dark:text-white mb-6">
              Contato
            </h4>
            <ul className="space-y-4 text-sm text-zinc-500 dark:text-zinc-400">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-zinc-400" />
                <span>
                  Rua Dois, 417
                  <br />
                  Parque das Acácias
                  <br />
                  Betim - MG
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-zinc-400" />
                <span>(31) 99999-9999</span>
              </li>
            </ul>
          </div>

          {/* Mapa */}
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-zinc-900 dark:text-white">
              Localização
            </h4>
            <div className="rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 h-40 w-full relative group shadow-sm">
              <iframe
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                src={`https://maps.google.com/maps?q=${addressEncoded}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                className="grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 dark:invert-[.85] dark:group-hover:invert-0"></iframe>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${addressEncoded}`}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-3 right-3 bg-zinc-900 dark:bg-white text-white dark:text-black text-[10px] font-bold px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg transform translate-y-2 group-hover:translate-y-0">
                ABRIR GPS
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-200 dark:border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p className="text-zinc-500 dark:text-zinc-500">
            © 2026 IBRD. Todos os direitos reservados.
          </p>
          <p className="text-zinc-500 dark:text-zinc-500 flex items-center gap-1">
            Desenvolvido por Nery_Systems
          </p>
        </div>
      </div>
    </footer>
  );
}
