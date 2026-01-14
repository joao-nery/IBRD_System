import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Target, Lightbulb, ArrowRight, Clock } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="pt-24 pb-16">
      <section className="px-6 max-w-4xl mx-auto text-center space-y-6 mb-24 fade-in-up">
        <Badge
          variant="secondary"
          className="px-4 py-1.5 text-sm rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 font-medium">
          Nossa Essência
        </Badge>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-zinc-900 dark:text-white">
          Uma igreja de pessoas imperfeitas amando um Deus perfeito.
        </h1>
        <p className="text-xl text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-2xl mx-auto">
          Somos uma família de fé em Betim, comprometida em viver o evangelho de
          forma autêntica, relevante e transformadora.
        </p>
      </section>

      {/* --- HISTÓRIA (Timeline Visual / Bento Style) --- */}
      <section className="px-6 max-w-7xl mx-auto mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {/* Bloco 1: O Início (Grande) */}
          <Card className="lg:col-span-8 bg-zinc-900 text-white overflow-hidden relative min-h-[400px] flex items-end group border-none">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=2673&auto=format&fit=crop')] bg-cover bg-center opacity-40 group-hover:scale-105 transition-transform duration-700" />
            <div className="relative z-10 p-8 md:p-12 space-y-4">
              <div className="inline-flex items-center gap-2 text-zinc-300 text-sm font-bold uppercase tracking-widest">
                <Clock size={16} /> Desde 2020
              </div>
              <h3 className="text-3xl md:text-4xl font-bold">
                O Começo de Tudo
              </h3>
              <p className="text-zinc-300 max-w-xl text-lg leading-relaxed">
                Tudo começou com um pequeno grupo de oração na sala de casa. O
                que era apenas um sonho de servir a Deus cresceu e se tornou um
                movimento de amor que hoje impacta o Parque das Acácias.
              </p>
            </div>
          </Card>

          {/* Bloco 2: Estatística/Impacto */}
          <Card className="lg:col-span-4 bg-zinc-100 dark:bg-zinc-800 border-none flex flex-col justify-center p-8 md:p-12">
            <h4 className="text-6xl font-bold text-zinc-900 dark:text-white mb-2">
              +500
            </h4>
            <p className="text-xl font-medium text-zinc-600 dark:text-zinc-400">
              Vidas transformadas através dos nossos ministérios e ações
              sociais.
            </p>
          </Card>

          {/* Bloco 3: Texto Simples */}
          <Card className="lg:col-span-4 bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 p-8 flex flex-col justify-between">
            <Lightbulb className="w-10 h-10 text-yellow-500 mb-6" />
            <div>
              <h3 className="text-xl font-bold mb-3 text-zinc-900 dark:text-white">
                Nossa Cultura
              </h3>
              <p className="text-zinc-500 dark:text-zinc-400">
                Acreditamos em uma igreja sem máscaras. Aqui, você não precisa
                fingir ser quem não é. Valorizamos a transparência e o
                crescimento real.
              </p>
            </div>
          </Card>

          {/* Bloco 4: Futuro (Imagem) */}
          <Card className="lg:col-span-8 relative min-h-[300px] overflow-hidden group border-none">
            <Image
              src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=2670&auto=format&fit=crop"
              alt="Comunidade"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8 md:p-12">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Olhando para o Futuro
                </h3>
                <p className="text-zinc-300">
                  Construindo um legado para as próximas gerações.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* --- LIDERANÇA (Pastor) --- */}
      <section className="bg-zinc-50 dark:bg-zinc-900/50 py-24 mb-24">
        <div className="px-6 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
            {/* Foto do Pastor com Moldura Criativa */}
            <div className="relative w-full md:w-1/2 max-w-md">
              <div className="aspect-[3/4] relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/2.png"
                  alt="Pastor Mateus Nery"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Elemento decorativo */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-zinc-900 dark:bg-white rounded-full flex items-center justify-center text-4xl shadow-xl">
                👋
              </div>
            </div>

            {/* Texto do Pastor */}
            <div className="w-full md:w-1/2 space-y-8">
              <div>
                <Badge
                  variant="outline"
                  className="mb-4 border-zinc-300 text-zinc-600 dark:border-zinc-700 dark:text-zinc-300">
                  Liderança Sênior
                </Badge>
                <h2 className="text-4xl font-bold text-zinc-900 dark:text-white mb-4">
                  Pastor Mateus Nery
                </h2>
                <p className="text-lg text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  &quot; Olá! Sou apaixonado por ver pessoas descobrindo seu
                  propósito em Deus. Acredito que a igreja deve ser um hospital
                  para a alma e uma escola para a vida. &quot;
                </p>
              </div>

              <div className="space-y-4">
                <p className="text-zinc-600 dark:text-zinc-300">
                  Casado, teólogo e fundador da IBRD, Mateus dedica sua vida ao
                  ensino das escrituras de forma descomplicada e prática. Seu
                  ministério é marcado pelo acolhimento e pela ênfase no
                  discipulado pessoal.
                </p>
                <Button
                  variant="link"
                  className="px-0 text-zinc-900 dark:text-white font-bold"
                  asChild>
                  <Link href="https://instagram.com" target="_blank">
                    Siga no Instagram <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- VALORES (Cards Clean) --- */}
      <section className="px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">
            Nossa Bússola
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 mt-2">
            O que nos guia em cada decisão.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Target,
              title: "Missão",
              desc: "Levar o amor de Jesus a cada casa de Betim, transformando vizinhos em família.",
            },
            {
              icon: Heart,
              title: "Visão",
              desc: "Ser uma igreja relevante, onde pessoas feridas encontram cura e pessoas comuns se tornam líderes extraordinários.",
            },
            {
              icon: Lightbulb,
              title: "Valores",
              desc: "Amor incondicional, Serviço ao próximo, Excelência, Transparência e Dependência do Espírito Santo.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="text-center p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 hover:shadow-lg transition-all duration-300 group">
              <div className="w-16 h-16 mx-auto bg-white dark:bg-zinc-800 rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                <item.icon className="w-8 h-8 text-zinc-900 dark:text-white" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">
                {item.title}
              </h3>
              <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
