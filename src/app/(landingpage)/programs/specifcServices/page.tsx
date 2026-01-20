"use client";

import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  Heart,
  Shield,
  Zap,
  Moon,
  ArrowRight,
  Info,
} from "lucide-react";

export default function SpecialServices() {
  // Configuração da Rotação de Sábados
  const saturdayRotation = [
    {
      week: "1º Sábado",
      title: "Culto de Jovens",
      audience: "Juventude FLAME",
      time: "19:30",
      icon: Zap,
      color: "blue",
      description:
        "Muita música, energia e uma palavra que conecta com a realidade do jovem cristão. O melhor lugar para estar no sábado à noite.",
      image:
        "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=800&q=80",
    },
    {
      week: "2º Sábado",
      title: "Rede de Mulheres",
      audience: "Mulheres",
      time: "19:30",
      icon: Heart, // Ícone feminino/coração
      color: "pink",
      description:
        "Um tempo de cura, empoderamento e comunhão. Mulheres levantando outras mulheres através da oração e da palavra.",
      image:
        "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=800&q=80",
    },
    {
      week: "3º Sábado",
      title: "Rede de Homens",
      audience: "Homens",
      time: "19:30",
      icon: Shield, // Ícone de força/proteção
      color: "slate",
      description:
        "Forjando caráter e liderança. Um ambiente franco para homens crescerem em seu papel sacerdotal na família e sociedade.",
      image:
        "https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?auto=format&fit=crop&w=800&q=80",
    },
    {
      week: "4º Sábado",
      title: "Rede de Casais",
      audience: "Casais & Noivos",
      time: "19:30",
      icon: Users,
      color: "rose",
      description:
        "Investimento no seu relacionamento. Palestras dinâmicas, renovação de votos e ferramentas para um casamento blindado.",
      image:
        "https://images.unsplash.com/photo-1621252179027-94459d27d3ee?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 pt-20">
      {/* --- HERO SECTION --- */}
      <section className="relative py-20 px-6 overflow-hidden bg-zinc-50 dark:bg-zinc-900/50">
        <div className="absolute inset-0 z-0 opacity-10 dark:opacity-20">
          {/* Pattern de fundo opcional */}
          <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
          <Badge className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-1.5 uppercase tracking-widest text-xs">
            Agenda Mensal
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Sábados no{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
              Renovo
            </span>
          </h1>
          <p className="text-lg text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto">
            Nossos sábados são rotativos. A cada semana, um encontro especial
            focado em uma área específica da sua vida.
          </p>
        </div>
      </section>

      {/* --- TIMELINE DE SÁBADOS (Ciclo Mensal) --- */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        {/* Grid dos 4 Sábados Principais */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
          {/* Linha conectora vertical (apenas desktop visual) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-zinc-200 dark:via-zinc-800 to-transparent -translate-x-1/2" />

          {saturdayRotation.map((item, index) => {
            // Alternar lados no desktop (Zig-zag)
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={`relative flex items-center ${isEven ? "md:justify-end md:pr-12" : "md:justify-start md:pl-12 md:col-start-2"}`}>
                {/* Bolinha do Timeline (Desktop) */}
                <div
                  className="hidden md:flex absolute top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white dark:bg-zinc-950 border-4 border-zinc-100 dark:border-zinc-800 items-center justify-center z-10 
                            left-1/2 -translate-x-1/2 shadow-sm text-xs font-bold text-zinc-400">
                  {index + 1}
                </div>

                {/* Card do Culto */}
                <div className="group w-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl overflow-hidden hover:shadow-xl hover:shadow-purple-500/10 dark:hover:shadow-purple-900/10 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row h-full">
                    {/* Imagem */}
                    <div className="sm:w-1/3 relative h-48 sm:h-auto min-h-[200px]">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute top-3 left-3">
                        <Badge className="bg-white/90 text-black backdrop-blur-md shadow-sm border-none font-bold">
                          {item.week}
                        </Badge>
                      </div>
                    </div>

                    {/* Conteúdo */}
                    <div className="flex-1 p-6 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-2 text-zinc-500 dark:text-zinc-400 text-xs font-bold uppercase tracking-wider">
                          <item.icon
                            size={14}
                            className="text-purple-600 dark:text-purple-400"
                          />
                          {item.audience}
                        </div>
                        <h3 className="text-2xl font-bold mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                          {item.description}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm font-semibold">
                          <Clock size={16} className="text-zinc-400" />{" "}
                          {item.time}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-zinc-500">
                          <MapPin size={16} className="text-zinc-400" /> Templo
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* --- 5º SÁBADO (VIGÍLIA) - CARD ESPECIAL --- */}
        <div className="mt-16">
          <div className="relative bg-zinc-900 dark:bg-black rounded-3xl p-8 md:p-12 overflow-hidden text-center md:text-left">
            {/* Background Decorativo Estrelado */}
            <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/30 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>

            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <div className="shrink-0 p-6 bg-zinc-800/50 rounded-full border border-zinc-700 backdrop-blur-sm">
                <Moon
                  size={48}
                  className="text-yellow-100 fill-yellow-100/20"
                />
              </div>

              <div className="flex-1 space-y-4">
                <div className="flex flex-col md:flex-row items-center gap-3 justify-center md:justify-start">
                  <Badge
                    variant="outline"
                    className="border-yellow-500/50 text-yellow-500">
                    Ocorre eventualmente
                  </Badge>
                  <h2 className="text-3xl md:text-4xl font-bold text-white">
                    Quando houver 5º Sábado
                  </h2>
                </div>
                <p className="text-zinc-400 max-w-2xl mx-auto md:mx-0 text-lg">
                  Realizamos a nossa poderosa <strong>Vigília do Renovo</strong>
                  . Uma madrugada inteira dedicada à oração, intercessão e busca
                  profunda pelo Espírito Santo.
                </p>
                <div className="flex flex-wrap gap-6 justify-center md:justify-start pt-2 text-zinc-300 font-medium">
                  <span className="flex items-center gap-2">
                    <Clock size={18} /> Início às 22:00
                  </span>
                  <span className="flex items-center gap-2">
                    <Calendar size={18} /> Apenas meses com 5 sábados
                  </span>
                </div>
              </div>

              <div className="shrink-0">
                <Button
                  variant="secondary"
                  className="rounded-full px-8 h-12 font-bold hover:bg-white hover:text-black transition-colors"
                  asChild>
                  <Link href="/contacts">Localização</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FAQ RÁPIDO --- */}
      <section className="pb-24 px-6 max-w-3xl mx-auto text-center space-y-8">
        <div className="bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/20 rounded-2xl p-6 flex flex-col md:flex-row items-center gap-4 text-left">
          <Info className="w-8 h-8 text-blue-600 shrink-0" />
          <div>
            <h4 className="font-bold text-blue-900 dark:text-blue-100">
              Não faço parte do público do sábado (ex: sou solteiro no dia dos
              casais), posso ir?
            </h4>
            <p className="text-sm text-blue-700 dark:text-blue-300 mt-1">
              Claro! Embora a ministração seja direcionada, a igreja é uma
              família e todos são sempre bem-vindos em qualquer culto.
            </p>
          </div>
        </div>

        <p className="text-zinc-500 text-sm">
          Dúvidas sobre qual sábado estamos?{" "}
          <Link
            href="/contacts"
            className="underline hover:text-black dark:hover:text-white">
            Entre em contato no WhatsApp
          </Link>
          .
        </p>
      </section>
    </main>
  );
}
