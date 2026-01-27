"use client";

import { Badge } from "@/components/ui/badge";
import {
  CalendarDays,
  Users,
  MapPin,
  ArrowRight,
  QrCode,
  Radio,
  Heart,
} from "lucide-react";
import { SiWhatsapp } from "@icons-pack/react-simple-icons";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function HubPage() {
  const addressEncoded = encodeURIComponent(
    "Rua Dois, 417, Parque das Acácias, Betim - MG",
  );
  return (
    // FUNDO COMPLEXO: Gradientes sutis para não ficar "branco opaco" no light mode
    <div className="min-h-screen bg-[#f0f2f5] dark:bg-[#0a0a0a] overflow-hidden relative flex flex-col items-center py-10 px-4">
      {/* Efeitos de Luz de Fundo (Aurora spots) */}
      <div className="absolute top-[-10%] left-[-10%] w-[40vh] h-[40vh] bg-blue-200/40 dark:bg-blue-900/20 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40vh] h-[40vh] bg-purple-200/40 dark:bg-purple-900/20 blur-[100px] rounded-full pointer-events-none" />

      {/* --- CABEÇALHO COMPACTO --- */}
      <header className="text-center mb-8 relative z-10 animate-fade-in-up flex flex-col items-center">
        <div className="relative w-20 h-20 mb-4 rounded-[2rem] overflow-hidden border-2 border-white/50 dark:border-zinc-800/50 shadow-xl shadow-blue-900/5 dark:shadow-black/50 bg-zinc-100 dark:bg-zinc-800">
          {/* Substitua pelo caminho real da sua logo */}
          <Image src="/logo.jpg" alt="IBR" fill className="object-cover" />
          {/* Fallback */}
          <div className="absolute inset-0 flex items-center justify-center font-black text-xl text-zinc-400/20">
            LOGO
          </div>
        </div>
        <h1 className="text-2xl font-black tracking-tight text-zinc-900 dark:text-white">
          Olá, família!
        </h1>
        <p className="text-zinc-500 dark:text-zinc-400 text-sm font-medium">
          Acesso rápido a tudo que importa.
        </p>
      </header>

      {/* --- BENTO GRID PRINCIPAL --- */}
      <main className="w-full max-w-md relative z-10 grid grid-cols-2 gap-3 animate-fade-in-up delay-100">
        {/* --- CARD 1 (Principal): Programação/Agenda --- */}
        {/* Ocupa 2 colunas no topo */}
        <Link href="/schedule" className="col-span-2 group">
          <div className="relative overflow-hidden rounded-[2.5rem] p-6 min-h-[140px] flex flex-col justify-between text-white shadow-lg hover:scale-[1.01] transition-all duration-300 border border-white/10 dark:border-zinc-800/50 bg-gradient-to-br from-blue-600 to-purple-600 dark:from-blue-900 dark:to-purple-900">
            <div className="relative z-10 flex justify-between items-start">
              <div>
                <Badge className="bg-white/20 hover:bg-white/30 text-white border-none backdrop-blur-md flex items-center gap-1 mb-2 pl-1 pr-3 py-0.5 text-[10px] font-bold uppercase tracking-wider w-fit">
                  <Radio size={10} className="text-red-300 animate-pulse" /> Em
                  Destaque
                </Badge>
                <h3 className="text-2xl font-bold leading-tight">
                  Programação
                  <br />& Cultos
                </h3>
              </div>
              <div className="bg-white/20 p-3 rounded-2xl backdrop-blur-sm">
                <CalendarDays size={28} className="text-white" />
              </div>
            </div>
            <p className="text-blue-100 text-sm relative z-10 mt-2 flex items-center gap-1">
              Ver horários da semana{" "}
              <ArrowRight
                size={14}
                className="group-hover:translate-x-1 transition-transform"
              />
            </p>

            {/* Textura de fundo do card */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />
          </div>
        </Link>

        {/* --- CARD 2: Redes & Células --- */}
        <Link href="/ministries" className="group col-span-1">
          <div className="h-full bg-white/70 dark:bg-zinc-900/70 backdrop-blur-xl border border-white/40 dark:border-zinc-800/50 rounded-[2.5rem] p-5 flex flex-col justify-between hover:bg-white/90 dark:hover:bg-zinc-900/90 transition-all duration-300 shadow-sm hover:shadow-md relative overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-20 bg-purple-500/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-2xl flex items-center justify-center text-purple-600 dark:text-purple-400 mb-3">
              <Users size={22} />
            </div>
            <div>
              <h3 className="font-bold text-base text-zinc-900 dark:text-white leading-tight">
                Redes & Células
              </h3>
              <p className="text-zinc-500 text-xs mt-1">Conecte-se</p>
            </div>
          </div>
        </Link>

        {/* --- CARD 3: WhatsApp --- */}
        <Link
          href="https://www.whatsapp.com/channel/0029VaabZQW6buMF8knzA02K"
          target="_blank"
          className="group col-span-1">
          <div className="h-full bg-white/70 dark:bg-zinc-900/70 backdrop-blur-xl border border-white/40 dark:border-zinc-800/50 rounded-[2.5rem] p-5 flex flex-col justify-between hover:bg-white/90 dark:hover:bg-zinc-900/90 transition-all duration-300 shadow-sm hover:shadow-md relative overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-20 bg-green-500/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-2xl flex items-center justify-center text-green-600 dark:text-green-500 mb-3">
              <SiWhatsapp size={22} />
            </div>
            <div>
              <h3 className="font-bold text-base text-zinc-900 dark:text-white leading-tight">
                WhatsApp
              </h3>
              <p className="text-zinc-500 text-xs mt-1">Fale conosco</p>
            </div>
          </div>
        </Link>

        {/* --- CARD 4: Como Chegar (Full Width) --- */}
        <Link
          href={`https://www.google.com/maps/search/?api=1&query=Rua%20Dois%2C%20417%2C%20Parque%20das%20Ac%C3%A1cias%2C%20Betim%20-%20MG`}
          target="_blank"
          className="col-span-2 group">
          <div className="bg-white/70 dark:bg-zinc-900/70 backdrop-blur-xl border border-white/40 dark:border-zinc-800/50 rounded-[2.5rem] p-4 flex items-center gap-4 hover:bg-white/90 dark:hover:bg-zinc-900/90 transition-all duration-300 shadow-sm hover:shadow-md relative overflow-hidden">
            <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center text-blue-600 dark:text-blue-500 flex-shrink-0">
              <MapPin size={24} />
            </div>
            <div className="flex-grow">
              <h3 className="font-bold text-base text-zinc-900 dark:text-white">
                Como Chegar
              </h3>
              <p className="text-zinc-500 text-xs">
                Rua Dois, 417 - Parque das Acácias
              </p>
            </div>
            <div className="w-10 h-10 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
              <ArrowRight size={18} />
            </div>
          </div>
        </Link>

        {/* --- CARD 5: QR CODE (Destaque de Contribuição) --- */}
        <div className="col-span-2 mt-2">
          <div className="bg-zinc-900 dark:bg-zinc-800 rounded-[2.5rem] p-6 text-white flex items-center gap-6 shadow-xl relative overflow-hidden border border-zinc-800 dark:border-zinc-700">
            {/* Background sutil */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none" />

            {/* Placeholder do QR Code - Substitua a div pelo seu componente de imagem real */}
            <div className="relative z-10 w-28 h-28 bg-white rounded-2xl flex-shrink-0 flex items-center justify-center p-2 shadow-sm">
              {/* Coloque sua imagem de QR Code aqui */}
              {/* <Image src="/seu-qrcode.png" fill alt="QR Code Pix" /> */}
              <QrCode size={60} className="text-zinc-900 opacity-20" />
              <p className="absolute text-xs font-bold text-zinc-400 text-center px-2">
                QR CODE AQUI
              </p>
            </div>

            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-1 flex items-center gap-2">
                Contribua{" "}
                <Heart size={18} className="text-red-500 fill-red-500" />
              </h3>
              <p className="text-zinc-400 text-sm mb-3 leading-tight">
                Escaneie para dizimar ou ofertar via Pix.
              </p>
              <Badge className="bg-zinc-700 text-zinc-200 hover:bg-zinc-600 cursor-copy">
                Chave Pix: ibrd@gmail.com
              </Badge>
            </div>
          </div>
        </div>
      </main>

      {/* --- FOOTER --- */}
      <footer className="mt-10 relative z-10 animate-fade-in-up delay-200">
        <Button
          variant="link"
          className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white text-sm"
          asChild>
          <Link href="/">Ir para o site completo</Link>
        </Button>
      </footer>
    </div>
  );
}
