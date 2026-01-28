"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  Clock,
  ArrowRight,
  Star,
  Music,
  BookOpen,
  Users,
  Baby,
  Flame,
} from "lucide-react";
import { SiWhatsapp } from "@icons-pack/react-simple-icons";
import Image from "next/image";
import Link from "next/link";

export default function ProgrammingPage() {
  return (
    <div className="min-h-screen pt-24 bg-white dark:bg-black text-zinc-900 dark:text-zinc-100">
      {/* --- HERO SECTION (Fundo Branco Padrão) --- */}
      <section className="px-6 max-w-4xl mx-auto text-center mb-24 pt-10 animate-fade-in-up">
        <Badge
          variant="secondary"
          className="mb-8 px-6 py-2 bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 border border-zinc-200 dark:border-zinc-700 text-sm font-medium">
          Agenda Completa
        </Badge>
        <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-8 text-zinc-900 dark:text-white">
          Uma igreja viva <br className="hidden md:block" />
          todos os dias da semana.
        </h1>
        <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto font-medium leading-relaxed">
          Confira nossos horários fixos de culto, encontros de ministérios e os
          grandes eventos que estão por vir.
        </p>
      </section>

      {/* --- SEÇÃO 1: CULTOS (Fundo Cinza Suave no Claro) --- */}
      <section className="py-24 bg-zinc-50 dark:bg-zinc-900/30 border-y border-zinc-100 dark:border-zinc-800">
        <div className="px-6 max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <div className="p-3 bg-blue-100 dark:bg-blue-900/20 rounded-2xl text-blue-600 dark:text-blue-400">
              <Clock size={28} />
            </div>
            <h2 className="text-4xl font-bold tracking-tight">Nossos Cultos</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Card Principal: Domingo */}
            <div className="group relative bg-zinc-900 rounded-[3rem] p-10 md:p-14 overflow-hidden text-white flex flex-col justify-between min-h-[450px] hover:shadow-2xl hover:shadow-blue-900/20 transition-all duration-500">
              <Image
                src="https://images.unsplash.com/photo-1478147427282-58a87a120781?auto=format&fit=crop&w=1000&q=80"
                alt="Culto"
                fill
                className="object-cover opacity-30 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90" />

              <div className="relative z-10 flex justify-between items-start">
                <Badge className="bg-blue-600 hover:bg-blue-500 text-white border-none text-lg px-6 py-2 rounded-full shadow-lg shadow-blue-900/50">
                  Domingo
                </Badge>
                <Music
                  className="text-zinc-500 group-hover:text-white transition-colors"
                  size={40}
                />
              </div>

              <div className="relative z-10 mt-auto">
                <h3 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  Culto de
                  <br />
                  Celebração
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/10 backdrop-blur-md w-fit border border-white/10">
                    <Clock className="text-blue-400" size={24} />
                    <span className="text-2xl font-mono font-bold tracking-tight">
                      09h{" "}
                      <span className="text-zinc-400 text-lg mx-1 font-sans font-normal">
                        e
                      </span>{" "}
                      19h
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-zinc-300 ml-1">
                    <Baby className="text-pink-400" size={20} />
                    <span className="text-base font-medium">
                      IBRD Kids Simultâneo
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card Quinta-feira */}
            <div className="h-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-[3rem] p-10 md:p-14 flex flex-col justify-between group hover:border-orange-500/30 transition-colors relative overflow-hidden shadow-sm">
              <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

              <div className="relative z-10">
                <div className="flex justify-between items-center mb-8">
                  <Badge
                    variant="outline"
                    className="text-zinc-600 dark:text-zinc-400 border-zinc-300 dark:border-zinc-700 text-base px-4 py-1">
                    Quinta-feira
                  </Badge>
                  <BookOpen className="text-orange-500" size={40} />
                </div>
                <h3 className="text-4xl font-bold mb-4 text-zinc-900 dark:text-white leading-tight">
                  Ensino &<br />
                  Oração
                </h3>
                <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-md">
                  Um tempo profundo para mergulhar nas escrituras e interceder
                  uns pelos outros.
                </p>
              </div>

              <div className="relative z-10 mt-8">
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-800 w-fit border border-zinc-100 dark:border-zinc-700">
                  <Clock size={24} className="text-orange-500" />
                  <span className="text-2xl font-mono font-bold text-zinc-900 dark:text-white">
                    20h00
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SEÇÃO 2: CULTOS ESPECIAIS (Fundo Branco para respiro) --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <div className="p-3 bg-purple-100 dark:bg-purple-900/20 rounded-2xl text-purple-600 dark:text-purple-400">
            <Star size={28} />
          </div>
          <h2 className="text-4xl font-bold tracking-tight">
            Cultos Especiais
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card Jovens */}
          <div className="bg-zinc-900 text-white p-10 rounded-[2.5rem] relative overflow-hidden group min-h-[300px] flex flex-col justify-between hover:-translate-y-2 transition-transform duration-300 shadow-xl shadow-zinc-200 dark:shadow-none">
            <div className="absolute top-0 right-0 w-40 h-40 bg-purple-600 blur-[80px] opacity-40 group-hover:opacity-60 transition-opacity" />
            <div>
              <Flame className="text-purple-400 mb-6" size={36} />
              <h3 className="text-3xl font-bold mb-2">Culto de Jovens</h3>
              <p className="text-zinc-400 font-medium">
                A galera se conecta todo sábado para adorar.
              </p>
            </div>
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm font-mono mt-6 w-fit">
              Sábado • 19h30
            </div>
          </div>

          {/* Card Mulheres - Mudei bg para dar contraste com o fundo branco da seção */}
          <div className="bg-pink-50 dark:bg-zinc-900/50 border border-pink-100 dark:border-zinc-800 p-10 rounded-[2.5rem] group hover:border-pink-300/50 transition-colors min-h-[300px] flex flex-col justify-between hover:-translate-y-2 duration-300">
            <div>
              <Users className="text-pink-500 mb-6" size={36} />
              <h3 className="text-3xl font-bold mb-2 text-zinc-900 dark:text-white">
                Culto de Mulheres
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 font-medium">
                Encontros mensais de comunhão e palavra.
              </p>
            </div>
            <div className="inline-flex items-center px-4 py-2 bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 rounded-full text-sm font-bold w-fit mt-6">
              1ª Sexta do Mês
            </div>
          </div>

          {/* Card Homens - Mudei bg para dar contraste */}
          <div className="bg-blue-50 dark:bg-zinc-900/50 border border-blue-100 dark:border-zinc-800 p-10 rounded-[2.5rem] group hover:border-blue-300/50 transition-colors min-h-[300px] flex flex-col justify-between hover:-translate-y-2 duration-300">
            <div>
              <Users className="text-blue-600 mb-6" size={36} />
              <h3 className="text-3xl font-bold mb-2 text-zinc-900 dark:text-white">
                Culto de Homens
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 font-medium">
                Café da manhã e mentoria para homens.
              </p>
            </div>
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-bold w-fit mt-6">
              Bimestral
            </div>
          </div>
        </div>
      </section>

      {/* --- SEÇÃO 3: EVENTOS (Fundo Cinza Suave novamente para diferenciar da anterior) --- */}
      <section className="py-24 bg-zinc-50/50 dark:bg-zinc-900/20 border-t border-zinc-100 dark:border-zinc-800">
        <div className="px-6 max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 pb-8 gap-4">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-orange-100 dark:bg-orange-900/20 rounded-2xl text-orange-600 dark:text-orange-400">
                <Calendar size={28} />
              </div>
              <div>
                <h2 className="text-3xl font-bold tracking-tight">
                  Próximos Eventos
                </h2>
                <p className="text-zinc-500 font-medium">
                  Salve a data na sua agenda.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {/* Evento 1 - bg-white para destacar do fundo cinza */}
            <div className="group flex items-center gap-6 p-6 rounded-[2rem] bg-white dark:bg-zinc-900 hover:shadow-lg transition-all cursor-pointer border border-zinc-100 dark:border-zinc-800 hover:border-zinc-200">
              <div className="flex-shrink-0 w-24 h-24 bg-zinc-50 dark:bg-zinc-800 rounded-2xl flex flex-col items-center justify-center border border-zinc-200 dark:border-zinc-700 shadow-sm">
                <span className="text-xs font-bold text-red-500 uppercase tracking-widest">
                  Fev
                </span>
                <span className="text-3xl font-black text-zinc-900 dark:text-white">
                  14
                </span>
              </div>
              <div className="flex-grow">
                <Badge
                  variant="secondary"
                  className="mb-2 bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">
                  Retiro
                </Badge>
                <h3 className="text-xl md:text-2xl font-bold text-zinc-900 dark:text-white group-hover:text-purple-600 transition-colors">
                  Acampamento de Verão 2026
                </h3>
                <p className="text-zinc-500 text-sm hidden md:block mt-1">
                  Sítio das Águas • 3 dias de imersão
                </p>
              </div>
              <div className="hidden md:flex w-12 h-12 rounded-full border border-zinc-200 dark:border-zinc-700 items-center justify-center opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-2">
                <ArrowRight size={20} />
              </div>
            </div>

            {/* Evento 2 */}
            <div className="group flex items-center gap-6 p-6 rounded-[2rem] bg-white dark:bg-zinc-900 hover:shadow-lg transition-all cursor-pointer border border-zinc-100 dark:border-zinc-800 hover:border-zinc-200">
              <div className="flex-shrink-0 w-24 h-24 bg-zinc-50 dark:bg-zinc-800 rounded-2xl flex flex-col items-center justify-center border border-zinc-200 dark:border-zinc-700 shadow-sm">
                <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest">
                  Mar
                </span>
                <span className="text-3xl font-black text-zinc-900 dark:text-white">
                  08
                </span>
              </div>
              <div className="flex-grow">
                <Badge
                  variant="secondary"
                  className="mb-2 bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300">
                  Especial
                </Badge>
                <h3 className="text-xl md:text-2xl font-bold text-zinc-900 dark:text-white group-hover:text-pink-600 transition-colors">
                  Culto das Mulheres
                </h3>
                <p className="text-zinc-500 text-sm hidden md:block mt-1">
                  Templo Principal • 19h30
                </p>
              </div>
              <div className="hidden md:flex w-12 h-12 rounded-full border border-zinc-200 dark:border-zinc-700 items-center justify-center opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-2">
                <ArrowRight size={20} />
              </div>
            </div>

            {/* Evento 3 */}
            <div className="group flex items-center gap-6 p-6 rounded-[2rem] bg-white dark:bg-zinc-900 hover:shadow-lg transition-all cursor-pointer border border-zinc-100 dark:border-zinc-800 hover:border-zinc-200">
              <div className="flex-shrink-0 w-24 h-24 bg-zinc-50 dark:bg-zinc-800 rounded-2xl flex flex-col items-center justify-center border border-zinc-200 dark:border-zinc-700 shadow-sm">
                <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest">
                  Abr
                </span>
                <span className="text-3xl font-black text-zinc-900 dark:text-white">
                  12
                </span>
              </div>
              <div className="flex-grow">
                <Badge
                  variant="secondary"
                  className="mb-2 bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                  Celebração
                </Badge>
                <h3 className="text-xl md:text-2xl font-bold text-zinc-900 dark:text-white group-hover:text-blue-600 transition-colors">
                  Domingo de Páscoa
                </h3>
                <p className="text-zinc-500 text-sm hidden md:block mt-1">
                  Celebração Especial com Cantata
                </p>
              </div>
              <div className="hidden md:flex w-12 h-12 rounded-full border border-zinc-200 dark:border-zinc-700 items-center justify-center opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-2">
                <ArrowRight size={20} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA FINAL: Fundo mais escuro para destaque (zinc-100) --- */}
      <section className="py-24 bg-zinc-100 dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800">
        <div className="px-6 text-center max-w-2xl mx-auto space-y-8">
          <h3 className="text-3xl font-bold text-zinc-900 dark:text-white">
            Ficou com alguma dúvida?
          </h3>

          <Button
            size="lg"
            className="group relative h-16 px-10 rounded-full bg-[#25D366] hover:bg-[#1ebc57] text-white font-bold text-lg shadow-xl shadow-green-500/20 transition-all duration-300 hover:scale-105"
            asChild>
            <Link
              href="https://www.whatsapp.com/channel/0029VaabZQW6buMF8knzA02K"
              target="_blank">
              <SiWhatsapp className="mr-3 text-2xl group-hover:rotate-12 transition-transform duration-300" />
              Falar no WhatsApp
            </Link>
          </Button>

          <p className="text-sm text-zinc-500 dark:text-zinc-400 font-medium">
            Nossa equipe responde normalmente em até 1 hora.
          </p>
        </div>
      </section>
    </div>
  );
}
