"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  MapPin,
  CalendarDays,
  Users,
  Sparkles,
  BookOpen,
  Heart,
  ChevronRight,
} from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black text-zinc-900 dark:text-zinc-100 overflow-x-hidden">
      {/* --- HERO SECTION: BRAND FOCUS --- */}
      <section className="relative h-[85vh] flex items-center justify-center p-6 overflow-hidden">
        {/* Imagem de Fundo */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=1920&q=80"
            alt="Comunidade IBRD"
            fill
            className="object-cover object-center opacity-90 dark:opacity-50"
            priority
          />
          {/* Overlay gradiente */}
          <div className="absolute inset-0 bg-white/20 dark:bg-black/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent dark:from-black dark:via-transparent dark:to-transparent" />
        </div>

        <div className="relative z-10 w-full max-w-5xl text-center flex flex-col items-center animate-fade-in-up">
          <span className="text-zinc-800 dark:text-zinc-400 font-bold tracking-[0.3em] text-sm md:text-base uppercase mb-2">
            Igreja Batista
          </span>

          <h1 className="text-[12vw] md:text-[8rem] lg:text-[10rem] font-black tracking-tighter leading-[0.85] text-zinc-900 dark:text-white mix-blend-overlay dark:mix-blend-normal opacity-90">
            RENOVO
          </h1>

          <div className="flex items-center gap-4 mt-2 mb-8">
            <div className="h-[2px] w-12 bg-blue-600 dark:bg-blue-500"></div>
            <span className="text-2xl md:text-4xl font-light italic text-zinc-700 dark:text-zinc-300">
              de Davi
            </span>
            <div className="h-[2px] w-12 bg-purple-600 dark:bg-purple-500"></div>
          </div>

          <p className="text-lg md:text-xl text-zinc-700 dark:text-zinc-300 max-w-xl mx-auto leading-relaxed font-medium mb-8">
            Uma família apostólica vivendo o sobrenatural de Deus em Betim.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="h-14 rounded-full px-10 text-base font-bold bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200 shadow-xl shadow-blue-900/10"
              asChild>
              <Link href="/programs/services">Nossos Horários</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-14 rounded-full px-10 text-base font-bold border-zinc-400 dark:border-zinc-700 bg-white/30 dark:bg-black/30 backdrop-blur-md hover:bg-white dark:hover:bg-zinc-900"
              asChild>
              <Link href="/about">Conheça a IBRD</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* --- EXPLORE A IBRD (BENTO GRID) --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-2">
              Explore a IBRD
            </h2>
            <p className="text-zinc-500">O que você procura está aqui.</p>
          </div>
          {/* Link Atualizado para o Hub Central */}
          <Button
            variant="ghost"
            className="hidden md:flex gap-2 text-zinc-500 hover:text-black dark:hover:text-white"
            asChild>
            <Link href="/programs/hub">
              Menu Rápido <ArrowRight size={16} />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-auto md:h-[600px]">
          {/* Cards (Mantidos iguais) */}
          <Link
            href="/programs/services"
            className="group relative col-span-1 md:col-span-2 row-span-2 rounded-[2.5rem] overflow-hidden bg-zinc-900">
            <Image
              src="https://images.unsplash.com/photo-1478147427282-58a87a120781?auto=format&fit=crop&w=1200&q=80"
              alt="Culto"
              fill
              className="object-cover opacity-60 group-hover:scale-105 group-hover:opacity-50 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-0 left-0 p-8 md:p-10 w-full">
              <div className="flex items-center gap-2 mb-4">
                <Badge className="bg-blue-600 border-none">Próximo</Badge>
                <span className="text-zinc-300 font-mono text-sm uppercase tracking-widest">
                  Domingo • 19h
                </span>
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
                Domingo de
                <br />
                Celebração
              </h3>
              <div className="flex items-center gap-2 text-white/80 mt-4 group-hover:translate-x-2 transition-transform">
                <span className="font-semibold">Saiba mais</span>{" "}
                <ArrowRight size={20} />
              </div>
            </div>
          </Link>

          <Link
            href="/cell"
            className="group relative col-span-1 md:col-span-2 row-span-1 rounded-[2.5rem] bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-8 flex flex-col justify-between hover:border-green-500/30 transition-colors overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-green-500/20 transition-colors" />
            <div className="flex justify-between items-start relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-white dark:bg-zinc-800 flex items-center justify-center text-green-600 shadow-sm">
                <Users size={24} />
              </div>
              <div className="bg-white dark:bg-zinc-800 px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                +15 Grupos
              </div>
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-1">Células</h3>
              <p className="text-zinc-500 text-sm max-w-xs">
                Não caminhe sozinho. Encontre uma família de fé perto da sua
                casa.
              </p>
            </div>
          </Link>

          <Link
            href="/schedule"
            className="group relative col-span-1 md:col-span-1 row-span-1 rounded-[2.5rem] bg-zinc-900 text-white p-6 flex flex-col justify-between overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-orange-500/40 blur-3xl rounded-full translate-y-1/2 translate-x-1/2" />
            <CalendarDays className="text-orange-400 relative z-10" size={28} />
            <div className="relative z-10">
              <h3 className="text-xl font-bold leading-none">
                Agenda
                <br />
                Mensal
              </h3>
              <p className="text-zinc-400 text-xs mt-2">Fique por dentro</p>
            </div>
          </Link>

          <Link
            href="/ministries"
            className="group relative col-span-1 md:col-span-1 row-span-1 rounded-[2.5rem] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 flex flex-col justify-between hover:shadow-lg transition-all">
            <Sparkles className="text-purple-500" size={28} />
            <div>
              <h3 className="text-xl font-bold leading-none">
                Servir &<br />
                Amar
              </h3>
              <div className="flex items-center justify-between mt-2">
                <p className="text-zinc-500 text-xs">Voluntariado</p>
                <div className="w-8 h-8 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center group-hover:bg-purple-500 group-hover:text-white transition-colors">
                  <ArrowRight size={14} />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* --- SOBRE (NOVA SEÇÃO RESUMIDA) --- */}
      <section className="py-20 bg-zinc-50 dark:bg-zinc-900/30 border-y border-zinc-100 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Imagem do Sobre */}
            <div className="relative h-[500px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl group">
              <Image
                src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=800&q=80"
                alt="Nossa Família"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Badge flutuante */}
              <div className="absolute bottom-8 left-8 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md px-6 py-4 rounded-2xl shadow-lg max-w-xs">
                <p className="font-bold text-lg mb-1">Desde 2010</p>
                <p className="text-sm text-zinc-500">
                  Escrevendo uma história de fé em Betim.
                </p>
              </div>
            </div>

            {/* Texto do Sobre */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white leading-tight">
                  Mais que uma igreja, <br />
                  <span className="text-zinc-400">uma grande família.</span>
                </h2>
                <p className="text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed">
                  A IBRD nasceu do desejo de ver vidas transformadas pelo poder
                  do Evangelho. Não somos perfeitos, mas somos apaixonados por
                  Jesus e comprometidos uns com os outros.
                </p>
                <p className="text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed">
                  Nosso propósito é simples:{" "}
                  <strong>
                    Amar a Deus, Servir Pessoas e Fazer Discípulos.
                  </strong>{" "}
                  Acreditamos que cada pessoa tem um chamado especial e um lugar
                  à mesa.
                </p>
              </div>

              <div className="flex gap-4">
                <Button
                  className="rounded-full h-12 px-8 bg-zinc-900 dark:bg-white text-white dark:text-black hover:opacity-90 transition-opacity"
                  asChild>
                  <Link href="/about">
                    Conheça nossa História{" "}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- NOSSA ESSÊNCIA --- */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nossa Essência
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400">
            Acreditamos em uma igreja simples, profunda e relevante. Estes são
            os pilares que sustentam nossa comunidade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-zinc-50 dark:bg-zinc-900 p-8 rounded-[2rem] border border-zinc-100 dark:border-zinc-800 text-center hover:-translate-y-2 transition-transform duration-300">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6">
              <Heart size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3">Amar a Deus</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Nossa prioridade é a presença de Deus. Vivemos uma adoração
              intensa e vertical, buscando agradar o coração do Pai.
            </p>
          </div>

          <div className="bg-zinc-50 dark:bg-zinc-900 p-8 rounded-[2rem] border border-zinc-100 dark:border-zinc-800 text-center hover:-translate-y-2 transition-transform duration-300">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center text-purple-600 dark:text-purple-400 mb-6">
              <Users size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3">Servir Pessoas</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">
              O amor é prático. Somos uma igreja que se move para fora das
              quatro paredes para impactar nossa cidade.
            </p>
          </div>

          <div className="bg-zinc-50 dark:bg-zinc-900 p-8 rounded-[2rem] border border-zinc-100 dark:border-zinc-800 text-center hover:-translate-y-2 transition-transform duration-300">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-orange-100 dark:bg-orange-900/20 flex items-center justify-center text-orange-600 dark:text-orange-400 mb-6">
              <BookOpen size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3">Viver a Palavra</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Não negociamos a verdade. Nosso ensino é cristocêntrico, focado em
              transformar mentes e corações.
            </p>
          </div>
        </div>
      </section>

      {/* --- PLANEJE SUA VISITA --- */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto bg-zinc-900 dark:bg-zinc-100 rounded-[3rem] p-8 md:p-16 text-center relative overflow-hidden text-white dark:text-black">
          <div className="relative z-10 space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Planeje sua Visita
            </h2>
            <p className="text-lg text-zinc-300 dark:text-zinc-600 max-w-xl mx-auto">
              Queremos te receber bem. Saiba onde estacionar, o que temos para
              as crianças e como chegar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                size="lg"
                className="rounded-full h-14 px-8 text-lg bg-white text-black hover:bg-zinc-200 dark:bg-black dark:text-white dark:hover:bg-zinc-800"
                asChild>
                <Link href="/contacts">
                  <MapPin className="mr-2" /> Ver Localização
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full h-14 px-8 text-lg border-zinc-600 text-white hover:bg-white/10 dark:border-zinc-300 dark:text-black dark:hover:bg-black/5 bg-transparent"
                asChild>
                <Link href="https://wa.me/5531999999999">
                  Falar no WhatsApp
                </Link>
              </Button>
            </div>
          </div>

          <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>
      </section>
    </main>
  );
}
