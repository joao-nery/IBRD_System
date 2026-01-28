import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Target, Lightbulb, ArrowRight, Clock } from "lucide-react";
import Link from "next/link";
import { SiInstagram } from "@icons-pack/react-simple-icons";

export default function AboutPage() {
  return (
    // FIX: bg-dark não existe por padrão, usei bg-black para dark mode real
    <div className="min-h-screen pt-24 pb-16 bg-white dark:bg-black text-zinc-900 dark:text-zinc-100">
      {/* --- HERO SECTION --- */}
      <section className="px-6 max-w-4xl mx-auto text-center space-y-6 mb-24 animate-fade-in-up">
        <Badge
          variant="secondary"
          className="px-4 py-1.5 text-sm rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 border border-zinc-200 dark:border-zinc-800 font-semibold">
          Nossa Essência
        </Badge>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-white leading-tight">
          Uma igreja de pessoas imperfeitas amando um Deus perfeito.
        </h1>
        {/* FIX: Texto escurecido para zinc-600 no light mode para leitura */}
        <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl mx-auto font-medium">
          Somos uma família de fé em Betim, comprometida em viver o evangelho de
          forma autêntica, relevante e transformadora.
        </p>
      </section>

      {/* --- HISTÓRIA (Bento Grid) --- */}
      <section className="px-6 max-w-7xl mx-auto mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {/* Card 1: O Início (Fundo Escuro SEMPRE, para contraste com texto branco) */}
          <Card className="lg:col-span-8 relative overflow-hidden min-h-[400px] flex items-end border-none rounded-[2rem] bg-zinc-900 group">
            {/* Imagem de Fundo com Next/Image */}
            <Image
              src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=2673&auto=format&fit=crop"
              alt="O início"
              fill
              className="object-cover opacity-50 group-hover:scale-105 transition-transform duration-700"
            />
            {/* Gradiente para garantir leitura do texto */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

            <div className="relative z-10 p-8 md:p-12 space-y-4 w-full">
              <div className="inline-flex items-center gap-2 text-zinc-300 text-sm font-bold uppercase tracking-widest bg-white/10 backdrop-blur-md px-3 py-1 rounded-full w-fit">
                <Clock size={14} /> Desde 2010
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white">
                O Começo de Tudo
              </h3>
              <p className="text-zinc-200 max-w-xl text-lg leading-relaxed font-medium">
                Tudo começou com um pequeno grupo de oração na sala de casa. O
                que era apenas um sonho de servir a Deus cresceu e se tornou um
                movimento de amor que hoje impacta o Parque das Acácias.
              </p>
            </div>
          </Card>

          {/* Card 2: Estatística - Invertido para destaque */}
          <Card className="lg:col-span-4 bg-zinc-100 dark:bg-zinc-900 border-none rounded-[2rem] flex flex-col justify-center p-8 md:p-12 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Target size={100} />
            </div>
            <h4 className="text-6xl md:text-7xl font-black text-zinc-900 dark:text-white mb-2 tracking-tighter">
              +500
            </h4>
            <p className="text-lg font-semibold text-zinc-600 dark:text-zinc-400 leading-snug">
              Vidas transformadas através dos nossos ministérios e ações
              sociais.
            </p>
          </Card>

          {/* Card 3: Cultura - Clean */}
          <Card className="lg:col-span-4 bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800 rounded-[2rem] p-8 flex flex-col justify-between hover:border-yellow-400/50 transition-colors">
            <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/20 rounded-full flex items-center justify-center mb-6 text-yellow-600 dark:text-yellow-500">
              <Lightbulb className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3 text-zinc-900 dark:text-white">
                Nossa Cultura
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 font-medium">
                Acreditamos em uma igreja sem máscaras. Aqui, você não precisa
                fingir ser quem não é. Valorizamos a transparência e o
                crescimento real.
              </p>
            </div>
          </Card>

          {/* Card 4: Futuro (Imagem) */}
          <Card className="lg:col-span-8 relative min-h-[300px] overflow-hidden rounded-[2rem] border-none group bg-zinc-900">
            <Image
              src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=2670&auto=format&fit=crop"
              alt="Comunidade"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent flex items-end p-8 md:p-12">
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  Olhando para o Futuro
                </h3>
                <p className="text-zinc-200 font-medium text-lg">
                  Construindo um legado para as próximas gerações.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* --- LIDERANÇA (Pastor) --- */}
      <section className="bg-zinc-50 dark:bg-zinc-900 border-y border-zinc-200 dark:border-zinc-800 py-24 mb-24">
        <div className="px-6 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
            {/* Foto do Pastor */}
            <div className="relative w-full md:w-1/2 max-w-md mx-auto">
              <div className="aspect-[3/4] relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white dark:border-zinc-800">
                {/* Certifique-se que a imagem /2.png existe ou troque por URL externa */}
                <Image
                  src="/2.png"
                  alt="Pastor Mateus Nery"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Badge flutuante */}
              <div className="absolute bottom-8 -right-4 bg-white dark:bg-zinc-800 px-6 py-3 rounded-xl shadow-lg border border-zinc-100 dark:border-zinc-700 flex items-center gap-3">
                <span className="text-2xl">👋</span>
                <div>
                  <p className="text-xs font-bold text-zinc-400 uppercase">
                    Fale comigo
                  </p>
                  <p className="text-sm font-bold text-zinc-900 dark:text-white">
                    @mateusnery
                  </p>
                </div>
              </div>
            </div>

            {/* Texto do Pastor */}
            <div className="w-full md:w-1/2 space-y-8 text-center md:text-left">
              <div>
                <Badge
                  variant="outline"
                  className="mb-4 py-2 px-4 border-zinc-300 text-zinc-700 dark:border-zinc-700 dark:text-zinc-300 bg-white dark:bg-zinc-950">
                  Liderança Sênior
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-6 tracking-tight">
                  Pastor Mateus Nery
                </h2>
                <div className="relative">
                  <span className="absolute -top-4 -left-2 text-6xl text-zinc-200 dark:text-zinc-800 font-serif opacity-50">
                    “
                  </span>
                  <p className="text-xl text-zinc-600 dark:text-zinc-300 leading-relaxed font-medium relative z-10 italic">
                    Olá! Sou apaixonado por ver pessoas descobrindo seu
                    propósito em Deus. Acredito que a igreja deve ser um
                    hospital para a alma e uma escola para a vida.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed">
                  Casado, teólogo e fundador da IBRD, Mateus dedica sua vida ao
                  ensino das escrituras de forma descomplicada e prática. Seu
                  ministério é marcado pelo acolhimento e pela ênfase no
                  discipulado pessoal.
                </p>
                <Button
                  className="rounded-full px-10 h-14 text-base bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
                  asChild>
                  <Link
                    href="https://www.instagram.com/mateusdnery/"
                    target="_blank">
                    <SiInstagram />
                    Siga no Instagram <ArrowRight className="ml-2 w-4 h-6" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- VALORES (Cards Clean) --- */}
      <section className="px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white tracking-tight">
            Nossa Bússola
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 mt-4 text-lg">
            Estes são os princípios inegociáveis que guiam cada decisão e cada
            passo que damos como comunidade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Target,
              title: "Missão",
              desc: "Levar o amor de Jesus a cada casa de Betim, transformando vizinhos em família.",
              color:
                "text-red-500 bg-red-50 dark:bg-red-900/10 border-red-100 dark:border-red-900/20",
            },
            {
              icon: Heart,
              title: "Visão",
              desc: "Ser uma igreja relevante, onde pessoas feridas encontram cura e pessoas comuns se tornam líderes extraordinários.",
              color:
                "text-purple-500 bg-purple-50 dark:bg-purple-900/10 border-purple-100 dark:border-purple-900/20",
            },
            {
              icon: Lightbulb,
              title: "Valores",
              desc: "Amor incondicional, Serviço ao próximo, Excelência, Transparência e Dependência do Espírito Santo.",
              color:
                "text-blue-500 bg-blue-50 dark:bg-blue-900/10 border-blue-100 dark:border-blue-900/20",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="text-center p-8 rounded-[2rem] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:-translate-y-2 transition-all duration-300 shadow-sm hover:shadow-xl group">
              <div
                className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-6 shadow-sm border ${item.color}`}>
                <item.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-4">
                {item.title}
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
