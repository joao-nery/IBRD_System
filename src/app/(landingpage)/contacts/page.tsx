"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { MapPin, Send, Clock, Mail, Heart, Copy, Check } from "lucide-react";
import { SiInstagram, SiWhatsapp } from "@icons-pack/react-simple-icons";
import Link from "next/link";
import Image from "next/image";
import { toast } from "sonner"; // Importação do Sonner
import { Toaster } from "@/components/ui/sonner"; // Componente Toaster

export default function ContactsPage() {
  const addressEncoded = encodeURIComponent(
    "Rua Dois, 417, Parque das Acácias, Betim - MG",
  );

  const pixKey = "16.443.519/0001-84";

  // Função Robusta de Copiar (Funciona em Mobile e Desktop)
  const handleCopyPix = () => {
    const showSuccess = () => {
      toast.success("Chave Pix copiada!", {
        description: "CNPJ copiado para a área de transferência.",
        icon: <Check className="text-green-500" size={16} />,
        duration: 3000,
      });
    };

    const showError = () => {
      toast.error("Erro ao copiar", {
        description: "Por favor, copie a chave manualmente.",
      });
    };

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard
        .writeText(pixKey)
        .then(showSuccess)
        .catch(fallbackCopy);
    } else {
      fallbackCopy();
    }

    function fallbackCopy() {
      try {
        const textArea = document.createElement("textarea");
        textArea.value = pixKey;
        textArea.style.position = "fixed";
        textArea.style.left = "-9999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        const successful = document.execCommand("copy");
        document.body.removeChild(textArea);
        if (successful) showSuccess();
        else showError();
      } catch (err) {
        showError();
      }
    }
  };

  return (
    <div className="min-h-screen pt-24 bg-white dark:bg-black text-zinc-900 dark:text-zinc-100">
      {/* --- HERO SECTION (Fundo Branco) --- */}
      <section className="px-6 max-w-4xl mx-auto text-center mb-20 pt-10 animate-fade-in-up">
        <Badge
          variant="secondary"
          className="mb-8 px-6 py-2 bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 border border-zinc-200 dark:border-zinc-700 text-sm font-medium">
          Fale Conosco
        </Badge>
        <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-8 text-zinc-900 dark:text-white">
          Vamos conversar?
        </h1>
        <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto font-medium leading-relaxed">
          Seja para um pedido de oração, uma dúvida ou apenas para dizer olá.
          Nossa equipe está pronta para te ouvir.
        </p>
      </section>

      {/* --- CANAIS RÁPIDOS (Fundo Cinza Suave) --- */}
      <section className="py-24 bg-zinc-50 dark:bg-zinc-900/30 border-y border-zinc-100 dark:border-zinc-800">
        <div className="px-6 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 tracking-tight">
            Canais Diretos
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card WhatsApp */}
            <div className="group h-full">
              <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-[2.5rem] p-10 hover:shadow-2xl hover:border-green-500/30 transition-all duration-300 h-full flex flex-col items-center text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-green-500/20 transition-colors" />

                <div className="w-20 h-20 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center text-green-600 dark:text-green-500 mb-6 group-hover:scale-110 transition-transform">
                  <SiWhatsapp size={40} />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-zinc-900 dark:text-white">
                  WhatsApp
                </h3>
                <p className="text-zinc-500 dark:text-zinc-400 mb-8">
                  O jeito mais rápido de falar com a gente. Respondemos em
                  instantes.
                </p>
                <Button
                  className="mt-auto rounded-full px-8 h-12 bg-green-500 hover:bg-green-600 text-white font-bold w-full md:w-auto"
                  asChild>
                  <Link
                    href="https://www.whatsapp.com/channel/0029VaabZQW6buMF8knzA02K"
                    target="_blank">
                    Ir para nosso WhatsApp
                  </Link>
                </Button>
              </div>
            </div>

            {/* Card Instagram */}
            <div className="group h-full">
              <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-[2.5rem] p-10 hover:shadow-2xl hover:border-pink-500/30 transition-all duration-300 h-full flex flex-col items-center text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-pink-500/20 transition-colors" />

                <div className="w-20 h-20 bg-pink-100 dark:bg-pink-900/20 rounded-full flex items-center justify-center text-pink-600 dark:text-pink-500 mb-6 group-hover:scale-110 transition-transform">
                  <SiInstagram size={40} />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-zinc-900 dark:text-white">
                  Instagram
                </h3>
                <p className="text-zinc-500 dark:text-zinc-400 mb-8">
                  Acompanhe nosso dia a dia, stories e novidades em tempo real.
                </p>
                <Button
                  variant="outline"
                  className="mt-auto rounded-full px-8 h-12 border-zinc-300 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800 font-bold w-full md:w-auto"
                  asChild>
                  <Link
                    href="https://www.instagram.com/ibrd_oficial"
                    target="_blank">
                    Seguir Perfil
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- LOCALIZAÇÃO (Fundo Branco) --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Infos de Endereço */}
          <div className="space-y-8 order-2 lg:order-1">
            <div>
              <Badge
                variant="outline"
                className="mb-4 border-zinc-300 text-zinc-600 dark:border-zinc-700 dark:text-zinc-400">
                Onde estamos
              </Badge>
              <h2 className="text-4xl font-bold text-zinc-900 dark:text-white mb-6">
                Venha nos visitar
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="mt-1 p-2 bg-zinc-100 dark:bg-zinc-800 rounded-lg h-fit text-zinc-900 dark:text-white">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-zinc-900 dark:text-white">
                      Endereço
                    </h4>
                    <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      Rua Dois, 417
                      <br />
                      Parque das Acácias, Betim - MG
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="mt-1 p-2 bg-zinc-100 dark:bg-zinc-800 rounded-lg h-fit text-zinc-900 dark:text-white">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-zinc-900 dark:text-white">
                      Horários Principais
                    </h4>
                    <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      Domingo: 09h e 19h
                      <br />
                      Quinta-feira: 20h
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mapa */}
          <div className="flex flex-col gap-4 order-1 lg:order-2">
            <h4 className="font-semibold text-zinc-900 dark:text-white hidden lg:block">
              Localização
            </h4>
            <div className="rounded-[2.5rem] overflow-hidden border border-zinc-200 dark:border-zinc-800 h-80 w-full relative group shadow-lg">
              <iframe
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                src={`https://maps.google.com/maps?q=${addressEncoded}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                className="transition-all duration-500 opacity-90 hover:opacity-100 grayscale hover:grayscale-0"></iframe>
              <Link
                className="absolute bottom-4 right-4 bg-zinc-900 dark:bg-white text-white dark:text-black text-xs font-bold px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-all shadow-lg transform translate-y-2 group-hover:translate-y-0"
                href={`https://www.google.com/maps/search/?api=1&query=${addressEncoded}`}
                rel="noopener noreferrer"
                target="_blank">
                ABRIR NO GPS
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- SEÇÃO DE CONTRIBUIÇÃO (NOVA) --- */}
      <section className="py-24 px-6 bg-zinc-50 dark:bg-zinc-900/50 border-y border-zinc-200 dark:border-zinc-800">
        <div className="max-w-3xl mx-auto">
          <div className="bg-zinc-900 dark:bg-zinc-800 rounded-[2.5rem] p-8 text-white flex flex-col md:flex-row items-center gap-8 shadow-xl relative overflow-hidden border border-zinc-800 dark:border-zinc-700">
            {/* Background Texture */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none" />

            {/* QR Code Otimizado */}
            <div className="relative z-10 w-32 h-32 bg-white rounded-3xl flex-shrink-0 flex items-center justify-center p-2 shadow-lg shadow-black/30">
              <div className="relative w-full h-full">
                <Image
                  src="/qrcode.png" // Certifique-se que o arquivo existe em public
                  alt="QR Code Pix"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Texto e Ação */}
            <div className="relative z-10 flex flex-col justify-center items-center md:items-start text-center md:text-left min-w-0 flex-grow">
              <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
                Contribua{" "}
                <Heart
                  size={20}
                  className="text-red-500 fill-red-500 animate-pulse"
                />
              </h3>
              <p className="text-zinc-400 text-sm mb-6 leading-relaxed max-w-sm">
                Seu dízimo e oferta nos ajudam a continuar levando a mensagem do
                Evangelho. Escaneie ou copie a chave.
              </p>

              {/* Botão de Copiar */}
              <Badge
                onClick={handleCopyPix}
                className="bg-zinc-700/80 hover:bg-zinc-600 text-zinc-100 px-4 py-3 rounded-xl cursor-pointer transition-all active:scale-95 group w-fit flex items-center gap-3 select-none border border-zinc-600/50 shadow-md">
                {/* Ícone Santander */}
                <div className="">
                  <Image
                    src="/santanderbank-icon 1.svg"
                    alt="Santander"
                    width={16}
                    height={16}
                    className="object-contain"
                  />
                </div>

                <span className="truncate text-sm sm:text-base font-mono tracking-wide">
                  {pixKey}
                </span>
                <Copy
                  size={16}
                  className="text-zinc-400 group-hover:text-white transition-colors"
                />
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* --- FORMULÁRIO DE E-MAIL (Fundo Branco para contraste final) --- */}
      <section className="py-24 bg-white dark:bg-zinc-950">
        <div className="px-6 max-w-3xl mx-auto text-center">
          <Mail className="mx-auto text-zinc-400 mb-4" size={32} />
          <h2 className="text-3xl font-bold mb-8 text-zinc-900 dark:text-white">
            Prefere enviar um e-mail?
          </h2>

          <div className="bg-zinc-50 dark:bg-zinc-900 p-8 md:p-12 rounded-[2.5rem] border border-zinc-200 dark:border-zinc-800 shadow-lg text-left">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-zinc-700 dark:text-zinc-300 ml-1">
                    Nome
                  </label>
                  <Input
                    placeholder="Seu nome"
                    className="h-12 rounded-xl bg-white dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800 focus-visible:ring-zinc-900"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-zinc-700 dark:text-zinc-300 ml-1">
                    WhatsApp
                  </label>
                  <Input
                    placeholder="(31) 99999-9999"
                    className="h-12 rounded-xl bg-white dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800 focus-visible:ring-zinc-900"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-zinc-700 dark:text-zinc-300 ml-1">
                  Mensagem
                </label>
                <Textarea
                  placeholder="Escreva sua mensagem aqui..."
                  className="min-h-[120px] rounded-xl bg-white dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800 resize-none p-4 focus-visible:ring-zinc-900"
                />
              </div>
              <Button className="w-full h-14 rounded-xl text-lg font-bold bg-zinc-900 text-white hover:bg-black dark:bg-white dark:text-black hover:shadow-lg transition-all transform hover:-translate-y-1">
                Enviar Mensagem <Send className="ml-2 w-5 h-5" />
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Componente de Notificações */}
      <Toaster />
    </div>
  );
}
