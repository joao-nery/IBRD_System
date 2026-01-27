import { MapPin, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { SiInstagram, SiWhatsapp } from "@icons-pack/react-simple-icons";
import Image from "next/image";

export default function Footer() {
  // Endereço codificado para URL (seguro para links)
  const addressEncoded = encodeURIComponent(
    "Rua Dois, 417, Parque das Acácias, Betim - MG",
  );

  return (
    <footer
      id="contato"
      className="bg-zinc-100 dark:bg-zinc-900 border-t border-zinc-400 dark:border-zinc-700 pt-20 pb-10 transition-colors">
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
                ),
              )}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-semibold text-zinc-900 dark:text-white mb-6">
              Contato
            </h4>
            <ul className="space-y-4 text-sm text-zinc-500 dark:text-zinc-400 ">
              <li className="flex items-start gap-3 flex-col">
                <div className="flex gap-3">
                  <MapPin size={18} className="mt-0.5 shrink-0 text-zinc-400" />
                  <span>
                    Rua Dois, 417
                    <br />
                    Parque das Acácias
                    <br />
                    Betim - MG
                  </span>
                </div>

                <div className="flex gap-3 mt-5">
                  <Link
                    href={"https://www.instagram.com/ibrd_oficial"}
                    target="_blank">
                    <Button
                      size="icon"
                      variant="outline"
                      className="rounded-full border-zinc-300 dark:border-zinc-800 hover:bg-white dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-400 bg-white dark:bg-transparent cursor-pointer">
                      <SiInstagram size={18} />
                    </Button>
                  </Link>

                  <Link
                    href={
                      "https://www.whatsapp.com/channel/0029VaabZQW6buMF8knzA02K"
                    }
                    target="_blank">
                    <Button
                      size="icon"
                      variant="outline"
                      className="rounded-full border-zinc-300 dark:border-zinc-800 hover:bg-white dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-400 bg-white dark:bg-transparent cursor-pointer">
                      <SiWhatsapp size={18} />
                    </Button>
                  </Link>
                </div>
              </li>
            </ul>
          </div>

          {/* Mapa */}

          <div className="rounded-2xl overflow-hidden border border-zinc-300 dark:border-zinc-800 h-40 w-full relative group shadow-md">
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              src={`https://maps.google.com/maps?q=${addressEncoded}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
              className="transition-all duration-500 "></iframe>
            <Link
              className="absolute bottom-3 right-3 bg-zinc-900 dark:bg-white text-white dark:text-black text-[10px] font-bold px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg transform translate-y-2 group-hover:translate-y-0"
              href={`https://www.google.com/maps/search/?api=1&query=${addressEncoded}`}
              rel="noopener noreferrer"
              target="_blank">
              ABRIR GPS
            </Link>
          </div>
        </div>

        <div className="border-t border-zinc-300 dark:border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
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
