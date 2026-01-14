"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarClock } from "lucide-react";

export default function BentoGrid() {
  // Estado para controlar qual horário está sendo exibido (0 ou 1)
  const [scheduleIndex, setScheduleIndex] = useState(0);

  // Dados dos cultos para o rodízio
  const schedules = [
    {
      label: "Domingo às 19:00",
      desc: "Culto de Celebração e Ceia do Senhor. Traga sua família.",
    },
    {
      label: "Quarta às 19:30",
      desc: "Culto de Doutrina e Oração. Recarregue suas energias.",
    },
  ];

  // Efeito de Timer (5 segundos)
  useEffect(() => {
    const interval = setInterval(() => {
      setScheduleIndex((prev) => (prev + 1) % schedules.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentSchedule = schedules[scheduleIndex];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* --- Card 1: Pastor (Atualizado) --- */}
        <Card className="md:col-span-2 relative overflow-hidden group border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 shadow-sm dark:shadow-none h-full min-h-[350px]">
          {/* Imagem de Fundo */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/2.png"
              alt="Pastor Mateus Nery"
              fill
              className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
            />
            {/* Gradiente Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />
          </div>

          <div className="relative z-20 p-8 h-full flex flex-col justify-end">
            <Badge className="w-fit mb-4 bg-white/10 text-white border-white/20 backdrop-blur-md hover:bg-white/20">
              Liderança
            </Badge>

            <h3 className="text-3xl font-bold text-white mb-3 shadow-sm drop-shadow-md">
              Pastor Mateus Nery
            </h3>

            <p className="text-zinc-200 max-w-lg font-medium text-lg mb-6 leading-relaxed text-balance">
              "Liderando com amor e visão. Venha conhecer uma família que ama
              servir e acolher você."
            </p>

            {/* Botão com efeito Glassmorphism */}
            <Button
              asChild
              className="w-fit rounded-full bg-white/10 hover:bg-white text-white hover:text-black border border-white/20 hover:border-white backdrop-blur-sm transition-all duration-300 group/btn">
              <Link href="/about" className="flex items-center gap-2">
                Conhecer nossa história
                <ArrowRight
                  size={16}
                  className="group-hover/btn:translate-x-1 transition-transform"
                />
              </Link>
            </Button>
          </div>
        </Card>

        {/* --- Card 2: Agenda (Com Timer e Animação) --- */}
        <Card className="flex flex-col justify-center p-8 transition-all border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm hover:shadow-md hover:border-zinc-300 dark:hover:border-zinc-700 relative overflow-hidden">
          {/* Barra de Progresso Animada (UX 2025) */}
          <div className="absolute top-0 left-0 h-1 bg-zinc-100 dark:bg-zinc-800 w-full">
            <div
              key={scheduleIndex} // Reinicia animação quando muda o index
              className="h-full bg-green-500 animate-[progress_5s_linear]"
              style={{ width: "100%" }}
            />
          </div>

          <CardHeader className="p-0 mb-6">
            <CardTitle className="flex items-center gap-3 text-zinc-900 dark:text-white mb-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              Próximos Cultos
            </CardTitle>

            {/* Texto Rotativo com Animação */}
            <div className="h-8 relative overflow-hidden">
              <CardDescription
                key={scheduleIndex}
                className="text-zinc-500 dark:text-zinc-400 text-lg font-semibold animate-in fade-in slide-in-from-bottom-2 duration-500">
                <span className="flex items-center gap-2">
                  <CalendarClock size={18} />
                  {currentSchedule.label}
                </span>
              </CardDescription>
            </div>
          </CardHeader>

          <CardContent className="p-0 flex-1 flex flex-col justify-between">
            <p
              key={scheduleIndex}
              className="text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed h-12 animate-in fade-in zoom-in-95 duration-500">
              {currentSchedule.desc}
            </p>

            <Button className="w-full bg-zinc-900 text-white hover:bg-black dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-700 font-semibold h-11 shadow-sm">
              <Link href={"/schedule"}> Ver agenda completa</Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Estilo Global para a animação da barra de progresso (adicione ao seu globals.css se preferir, mas funciona aqui via style tag ou tailwind config) */}
      <style jsx global>{`
        @keyframes progress {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
