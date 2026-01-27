"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { MapPin, Send, Instagram, Clock, Mail } from "lucide-react";
import { SiInstagram, SiWhatsapp } from "@icons-pack/react-simple-icons";
import Link from "next/link";

export default function ContactsPage() {
  const addressEncoded = encodeURIComponent(
    "Rua Dois, 417, Parque das Acácias, Betim - MG",
  );

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

      {/* --- CANAIS RÁPIDOS (Fundo Cinza Suave no Claro) --- */}
      <section className="py-24 bg-zinc-200 dark:bg-zinc-900/30 border-y border-zinc-100 dark:border-zinc-800">
        <div className="px-6 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 tracking-tight">
            Canais Diretos
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card WhatsApp (Destaque Verde) */}
            <Link
              href="https://www.whatsapp.com/channel/0029VaabZQW6buMF8knzA02K"
              target="_blank"
              className="group">
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
                <Button className="mt-auto rounded-full px-8 h-12 bg-green-500 hover:bg-green-500 text-white font-bold w-full md:w-auto">
                  <Link
                    href={
                      "https://www.whatsapp.com/channel/0029VaabZQW6buMF8knzA02K"
                    }
                    target="_blank">
                    Ir para nosso WhatsApp
                  </Link>
                </Button>
              </div>
            </Link>

            {/* Card Instagram (Destaque Gradiente) */}
            <Link
              href="https://instagram.com/seu-perfil"
              target="_blank"
              className="group">
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
                <Link
                  href={"https://www.instagram.com/ibrd_oficial"}
                  target="_blank">
                  <Button
                    variant="outline"
                    className="mt-auto rounded-full px-8 h-12 border-zinc-300 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800 font-bold w-full md:w-auto">
                    Seguir Perfil
                  </Button>
                </Link>
              </div>
            </Link>
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
                Venha tomar um café conosco
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

          {/* Mapa (Placeholder ou Google Maps Embed) */}

          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-zinc-900 dark:text-white">
              Localização
            </h4>
            <div className="rounded-2xl overflow-hidden border border-zinc-300 dark:border-zinc-800 h-80 w-full relative group shadow-md">
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
        </div>
      </section>

      {/* --- FORMULÁRIO SIMPLIFICADO (Fundo Cinza Suave) --- */}
      <section className="py-24 bg-gray-200 dark:bg-zinc-900/30 border-t border-zinc-300 dark:border-zinc-800">
        <div className="px-6 max-w-3xl mx-auto text-center">
          <Mail className="mx-auto text-zinc-400 mb-4" size={32} />
          <h2 className="text-3xl font-bold mb-8 text-zinc-900 dark:text-white">
            Prefere enviar um e-mail?
          </h2>

          <div className="bg-white dark:bg-zinc-900 p-8 md:p-12 rounded-[2.5rem] border border-zinc-200 dark:border-zinc-800 shadow-xl shadow-zinc-200/50 dark:shadow-none text-left">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-zinc-700 dark:text-zinc-300 ml-1">
                    Nome
                  </label>
                  <Input
                    placeholder="Seu nome"
                    className="h-12 rounded-xl bg-zinc-50 dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-zinc-700 dark:text-zinc-300 ml-1">
                    WhatsApp
                  </label>
                  <Input
                    placeholder="(31) 99999-9999"
                    className="h-12 rounded-xl bg-zinc-50 dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-zinc-700 dark:text-zinc-300 ml-1">
                  Mensagem
                </label>
                <Textarea
                  placeholder="Escreva sua mensagem aqui..."
                  className="min-h-[120px] rounded-xl bg-zinc-50 dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800 resize-none p-4"
                />
              </div>
              <Button className="w-full h-14 rounded-xl text-lg font-bold bg-zinc-900 text-white hover:bg-black dark:bg-white dark:text-black hover:shadow-lg transition-all">
                Enviar <Send className="ml-2 w-5 h-5" />
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
