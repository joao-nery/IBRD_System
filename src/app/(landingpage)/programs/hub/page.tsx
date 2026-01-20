"use client";

import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  CalendarDays,
  Users,
  ArrowRight,
  Home,
  MessageCircle,
  Info,
  Sparkles,
  ChevronRight,
  Music,
} from "lucide-react";
import { SiWhatsapp } from "@icons-pack/react-simple-icons";

export default function HubPage() {
  const googleMapsLink =
    "https://www.google.com/maps/search/?api=1&query=Rua+Dois,+417,+Parque+das+Acacias,+Betim,+MG";

  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-black text-zinc-900 dark:text-zinc-100 p-6 pt-30 lg:mt-15 md:p-12 lg:py-20">
      {/* Container Principal */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-24">
        {/* --- COLUNA DA ESQUERDA (Identidade & Ações) --- 
            FIX MOBILE: Adicionado 'max-w-md mx-auto' para travar a largura no celular (visual de app)
            DESKTOP: 'lg:max-w-none lg:mx-0' libera a largura para o layout split
        */}
        <div className="w-full max-w-md mx-auto lg:max-w-none lg:mx-0 lg:col-span-5 flex flex-col justify-center lg:justify-start lg:sticky lg:top-24 lg:h-fit space-y-6 lg:space-y-8">
          {/* Identidade */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-full bg-zinc-200 dark:bg-zinc-800 overflow-hidden relative border-4 border-white dark:border-zinc-800 shadow-2xl">
              <Image
                src="/logo.jpg"
                alt="Logo IBRD"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-2">
              <Badge variant="secondary" className="mb-5 lg:mb-4">
                Hub Central
              </Badge>
              <h1 className="text-3xl lg:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white">
                Bem-vindo à IBRD
              </h1>
              <p className="text-zinc-500 dark:text-zinc-400 text-base lg:text-lg max-w-xs mx-auto lg:mx-0">
                O seu ponto de conexão com tudo o que acontece em nossa igreja.
              </p>
            </div>
          </div>

          {/* Botões de Ação */}
          <div className="grid grid-cols-2 gap-3 w-full">
            <Button
              className="h-14 lg:h-16 rounded-2xl bg-green-600 hover:bg-green-700 text-white border-none shadow-lg shadow-green-900/10 gap-2 lg:gap-3 text-sm lg:text-base font-semibold"
              asChild>
              <Link
                href="https://whatsapp.com/channel/0029VaabZQW6buMF8knzA02K"
                target="_blank">
                <SiWhatsapp size={20} className="lg:w-6 lg:h-8 lg:size-1" />
                WhatsApp
              </Link>
            </Button>
            <Button
              variant="outline"
              className="h-14 lg:h-16 rounded-2xl border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 gap-2 lg:gap-3 hover:bg-zinc-50 dark:hover:bg-zinc-800 text-sm lg:text-base font-semibold shadow-sm"
              asChild>
              <Link href={googleMapsLink} target="_blank">
                <MapPin
                  size={20}
                  className="text-red-500 lg:w-6 lg:h-8 lg:size-1"
                />
                Localização
              </Link>
            </Button>
          </div>

          {/* Footer Desktop (Fica aqui na esquerda) */}
          <div className="hidden lg:block pt-12">
            <p className="text-xs text-zinc-400">
              © 2026 Igreja Batista Renovo de Davi.
              <br />
              Feito para servir com excelência.
            </p>
          </div>
        </div>

        {/* --- COLUNA DA DIREITA (Cards de Conteúdo) --- 
            FIX MOBILE: Mesma trava 'max-w-md mx-auto' para manter os cards com tamanho de app
        */}
        <div className="w-full max-w-md mx-auto lg:max-w-none lg:mx-0 lg:col-span-7 space-y-4 lg:space-y-6">
          {/* 1. CULTOS (Card Principal) */}
          <Link
            href="/programs/services"
            className="group block relative w-full h-40 lg:h-64 rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-blue-900/20 transition-all duration-500">
            <Image
              src="https://images.unsplash.com/photo-1478147427282-58a87a120781?auto=format&fit=crop&w=1200&q=80"
              alt="Cultos"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 lg:p-8">
              <Badge className="bg-blue-600 text-white border-none mb-2 lg:mb-3 px-2 lg:px-3 py-0.5 lg:py-1 text-[10px] lg:text-xs">
                Principal
              </Badge>
              <h3 className="text-xl lg:text-3xl font-bold text-white flex items-center gap-2 lg:gap-3 mb-1 lg:mb-2">
                Nossos Cultos{" "}
                <ArrowRight className="w-4 h-4 lg:w-6 lg:h-6 opacity-70 group-hover:translate-x-1 transition-transform" />
              </h3>
              <p className="text-zinc-300 text-xs lg:text-base font-medium">
                Domingo 09h - 19h & Quinta 20h
              </p>
            </div>
          </Link>

          {/* 2. GRID DUPLO (Redes & Células) */}
          <div className="grid grid-cols-2 gap-4 lg:gap-6">
            {/* Redes */}
            <Link
              href="/programs/specificServices"
              className="group relative flex flex-col justify-between p-4 lg:p-6 h-36 lg:h-48 rounded-[1.5rem] lg:rounded-[2rem] bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-purple-500/50 hover:bg-purple-50/50 dark:hover:bg-purple-900/10 transition-all overflow-hidden">
              <div className="absolute -top-12 -right-12 w-24 lg:w-32 h-24 lg:h-32 bg-purple-500/20 blur-3xl rounded-full group-hover:bg-purple-500/30 transition-colors" />

              <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl lg:rounded-2xl bg-white dark:bg-zinc-800 flex items-center justify-center shadow-sm text-purple-600">
                <Sparkles size={20} className="lg:w-6 lg:h-6" />
              </div>
              <div>
                <h3 className="font-bold text-sm lg:text-xl leading-tight mb-1">
                  Redes
                </h3>
                <p className="text-[10px] lg:text-sm text-zinc-500 leading-tight">
                  Jovens, Casais, Homens & Mulheres
                </p>
              </div>
            </Link>

            {/* Células */}
            <Link
              href="/programs/cells"
              className="group relative flex flex-col justify-between p-4 lg:p-6 h-36 lg:h-48 rounded-[1.5rem] lg:rounded-[2rem] bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-green-500/50 hover:bg-green-50/50 dark:hover:bg-green-900/10 transition-all overflow-hidden">
              <div className="absolute -top-12 -right-12 w-24 lg:w-32 h-24 lg:h-32 bg-green-500/20 blur-3xl rounded-full group-hover:bg-green-500/30 transition-colors" />

              <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl lg:rounded-2xl bg-white dark:bg-zinc-800 flex items-center justify-center shadow-sm text-green-600">
                <Home size={20} className="lg:w-6 lg:h-6" />
              </div>
              <div>
                <h3 className="font-bold text-sm lg:text-xl leading-tight mb-1">
                  Células
                </h3>
                <p className="text-[10px] lg:text-sm text-zinc-500 leading-tight">
                  Pequenos grupos perto de você
                </p>
              </div>
            </Link>
          </div>

          {/* 3. AGENDA & EVENTOS (Lista Expansiva) */}
          <div className="rounded-[1.5rem] lg:rounded-[2rem] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-1 lg:p-2 shadow-sm">
            <div className="px-4 lg:px-6 pt-4 lg:pt-6 pb-2 lg:pb-4 flex justify-between items-center">
              <div className="flex items-center gap-2 lg:gap-3">
                <div className="p-1.5 lg:p-2 bg-orange-100 dark:bg-orange-900/20 rounded-lg text-orange-600">
                  <CalendarDays size={18} className="lg:w-5 lg:h-5" />
                </div>
                <span className="font-bold text-sm lg:text-lg">
                  Agenda & Eventos
                </span>
              </div>
              <Link
                href="/schedule"
                className="text-xs lg:text-sm font-semibold text-blue-600 hover:underline">
                Ver completa
              </Link>
            </div>

            <div className="space-y-1">
              <Link
                href="/schedule"
                className="flex items-center justify-between p-3 lg:p-5 hover:bg-zinc-50 dark:hover:bg-zinc-800 rounded-xl lg:rounded-2xl transition-colors group">
                <div className="flex items-center gap-3 lg:gap-5">
                  <div className="flex flex-col items-center justify-center w-10 h-10 lg:w-12 lg:h-12 bg-zinc-100 dark:bg-zinc-800 rounded-lg lg:rounded-xl text-[10px] lg:text-xs font-bold text-zinc-600 dark:text-zinc-400 group-hover:bg-orange-100 group-hover:text-orange-700 transition-colors">
                    <span className="uppercase">Fev</span>
                    <span className="text-xs lg:text-sm">14</span>
                  </div>
                  <div>
                    <p className="font-bold text-sm lg:text-base">
                      Calendário Mensal
                    </p>
                    <p className="text-xs lg:text-sm text-zinc-500">
                      Confira a rotina
                    </p>
                  </div>
                </div>
                <ChevronRight
                  size={18}
                  className="text-zinc-300 group-hover:text-zinc-500 lg:w-5 lg:h-5"
                />
              </Link>

              <Link
                href="/events"
                className="flex items-center justify-between p-3 lg:p-5 hover:bg-zinc-50 dark:hover:bg-zinc-800 rounded-xl lg:rounded-2xl transition-colors group">
                <div className="flex items-center gap-3 lg:gap-5">
                  <div className="flex flex-col items-center justify-center w-10 h-10 lg:w-12 lg:h-12 bg-zinc-100 dark:bg-zinc-800 rounded-lg lg:rounded-xl text-zinc-600 dark:text-zinc-400 group-hover:bg-blue-100 group-hover:text-blue-700 transition-colors">
                    <Music size={18} className="lg:w-5 lg:h-5" />
                  </div>
                  <div>
                    <p className="font-bold text-sm lg:text-base">
                      Grandes Eventos
                    </p>
                    <p className="text-xs lg:text-sm text-zinc-500">
                      Conferências & Shows
                    </p>
                  </div>
                </div>
                <ChevronRight
                  size={18}
                  className="text-zinc-300 group-hover:text-zinc-500 lg:w-5 lg:h-5"
                />
              </Link>
            </div>
          </div>

          {/* 4. LINKS INSTITUCIONAIS */}
          <div className="grid grid-cols-2 gap-3 lg:gap-4">
            <Link
              href="/ministries"
              className="flex items-center justify-center gap-2 lg:gap-3 p-4 lg:p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-xs lg:text-sm font-semibold hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors shadow-sm">
              <Users size={16} className="text-zinc-400 lg:w-5 lg:h-5" />
              Ministérios
            </Link>
            <Link
              href="/about"
              className="flex items-center justify-center gap-2 lg:gap-3 p-4 lg:p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-xs lg:text-sm font-semibold hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors shadow-sm">
              <Info size={16} className="text-zinc-400 lg:w-5 lg:h-5" />
              Sobre Nós
            </Link>
          </div>

          {/* Footer Mobile (Centralizado e pequeno) */}
          <div className="lg:hidden text-center pt-8 pb-4">
            <p className="text-[10px] text-zinc-400 uppercase tracking-widest">
              © 2026 IBRD
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
