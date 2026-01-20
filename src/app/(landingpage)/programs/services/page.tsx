"use client";

import Image from "next/image";
import Link from "next/link"; // Import necessário para o link de contato
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  Clock,
  MapPin,
  ArrowRight,
  Heart,
  Droplets,
  Users,
  Star,
  Flame, // Ícone para o culto de Quinta (Fogo/Renovo)
} from "lucide-react";

export default function ServicesPage() {
  // Dados dos cultos especiais (Mantidos igual)
  const specialServices = [
    {
      title: "Culto de Primícias",
      category: "Culto Mensal",
      date: "1º Domingo",
      time: "19:00",
      description:
        "Um culto especial para honrar a Deus com o melhor e as primícias do nosso mês. Um tempo de gratidão e alinhamento.",
      icon: Star,
      image:
        "https://images.unsplash.com/photo-1621508654686-81935d214a1c?auto=format&fit=crop&w=800&q=80",
      color: "from-yellow-500/20 to-orange-500/20",
    },
    {
      title: "Santa Ceia",
      category: "Sacramento",
      date: "2º Domingo",
      time: "10:00 & 19:00",
      description:
        "Nos reunimos como família para lembrar o sacrifício de Jesus. Um tempo solene de comunhão e celebração da vida.",
      icon: Droplets,
      image:
        "https://images.unsplash.com/photo-1548625361-12c62c2f0f46?auto=format&fit=crop&w=800&q=80",
      color: "from-red-500/20 to-rose-900/20",
    },
    {
      title: "Culto de Homens",
      category: "Comunhão",
      date: "3º Sábado",
      time: "19:30",
      description:
        "Forjando homens de caráter forte através da palavra, adoração e comunhão verdadeira.",
      icon: Users,
      image:
        "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=800&q=80",
      color: "from-blue-600/20 to-slate-900/20",
    },
    {
      title: "Culto de Mulheres",
      category: "Comunhão",
      date: "4º Sábado",
      time: "17:00",
      description:
        "Um lugar seguro para mulheres crescerem, compartilharem e serem empoderadas pelo Espírito Santo.",
      icon: Heart,
      image:
        "https://images.unsplash.com/photo-1525916801717-9405b5383f9e?auto=format&fit=crop&w=800&q=80",
      color: "from-pink-500/20 to-rose-500/20",
    },
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 pt-20">
      {/* --- HERO SECTION --- */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-900/50 to-zinc-950 z-10" />
          <Image
            src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&w=1920&q=80"
            alt="Atmosfera de Adoração"
            fill
            className="object-cover opacity-80"
            priority
          />
        </div>

        <div className="relative z-20 text-center px-6 max-w-4xl mx-auto space-y-6">
          <Badge
            variant="outline"
            className="border-white/30 text-white px-4 py-1.5 backdrop-blur-md uppercase tracking-widest text-xs">
            Junte-se a nós na adoração
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
            Reunir. Crescer. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-400">
              Glorificar.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-200 max-w-2xl mx-auto">
            Nossos cultos são projetados para ajudá-lo a encontrar a presença de
            Deus e se conectar com uma comunidade de fé vibrante.
          </p>
        </div>
      </section>

      {/* --- WEEKLY SCHEDULE (Regular Services) --- */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">
              Encontros Semanais
            </h2>
            <p className="text-zinc-500 dark:text-zinc-400">
              Venha recarregar suas energias espirituais durante a semana.
            </p>
          </div>
          {/* Link para /contacts conforme solicitado */}
          <Link href="/contacts">
            <Button variant="outline" className="rounded-full gap-2 group">
              Planeje sua Visita{" "}
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Button>
          </Link>
        </div>

        {/* Grid de Cultos Regulares - Layout 50/50 para clareza */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: Domingo */}
          <div className="relative group overflow-hidden rounded-3xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 min-h-[350px] flex flex-col justify-end p-8">
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />
              <Image
                src="https://images.unsplash.com/photo-1478147427282-58a87a120781?auto=format&fit=crop&w=1200&q=80"
                alt="Culto de Domingo"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="relative z-20 space-y-4">
              <div className="flex gap-2">
                <Badge className="bg-white text-black hover:bg-zinc-200 font-bold border-none">
                  Todo Domingo
                </Badge>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white mb-2">
                  Culto da Família
                </h3>
                <p className="text-zinc-300 text-sm leading-relaxed max-w-md">
                  O ponto alto da nossa semana. Um tempo de louvor vibrante,
                  palavra profunda e comunhão para toda a família.
                </p>
              </div>
              <div className="flex items-center gap-6 text-white font-semibold pt-2 border-t border-white/20 mt-4">
                <span className="flex items-center gap-2 text-lg">
                  <Clock size={20} className="text-zinc-300" /> 09:00 - 19:00
                </span>
                <span className="flex items-center gap-2 text-sm text-zinc-300 font-normal">
                  <MapPin size={16} /> Templo Principal
                </span>
              </div>
            </div>
          </div>

          {/* Card 2: Quinta-feira */}
          <div className="relative group overflow-hidden rounded-3xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 min-h-[350px] flex flex-col justify-end p-8">
            <div className="absolute inset-0 z-0">
              {/* Gradiente um pouco diferente para diferenciar (mais azulado/espiritual) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-zinc-900/40 to-transparent z-10" />
              <Image
                src="https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?auto=format&fit=crop&w=1200&q=80"
                alt="Culto de Quinta"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="relative z-20 space-y-4">
              <div className="flex gap-2">
                <Badge className="bg-zinc-800 text-white hover:bg-zinc-700 font-bold border-zinc-700">
                  Toda Quinta
                </Badge>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white mb-2 flex items-center gap-2">
                  Quinta da Vitória
                </h3>
                <p className="text-zinc-300 text-sm leading-relaxed max-w-md">
                  O combustível para o meio da sua semana. Um culto focado em
                  ensino bíblico, oração e renovação de forças.
                </p>
              </div>
              <div className="flex items-center gap-6 text-white font-semibold pt-2 border-t border-white/20 mt-4">
                <span className="flex items-center gap-2 text-lg">
                  <Clock size={20} className="text-zinc-300" /> 19:30
                </span>
                <span className="flex items-center gap-2 text-sm text-zinc-300 font-normal">
                  <MapPin size={16} /> Templo Principal
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SPECIAL SERVICES GRID (Bento Grid) --- */}
      {/* <section className="py-20 bg-zinc-50 dark:bg-zinc-900/50 border-y border-zinc-100 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold">Cultos Especiais</h2>
            <p className="text-zinc-500 dark:text-zinc-400">
              Encontros únicos dedicados a grupos específicos e momentos
              sagrados em nosso calendário mensal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {specialServices.map((service, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 hover:shadow-2xl hover:shadow-zinc-200/50 dark:hover:shadow-zinc-900/50 transition-all duration-300">
                <div
                  className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${service.color} blur-3xl rounded-full -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="p-8 h-full flex flex-col md:flex-row gap-6 items-start">
                  <div className="shrink-0 relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center mb-4 md:mb-0 text-zinc-900 dark:text-white group-hover:scale-110 transition-transform duration-300 shadow-sm">
                      <service.icon size={32} strokeWidth={1.5} />
                    </div>
                  </div>

                  <div className="flex-1 space-y-4 relative z-10">
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                          {service.category}
                        </span>
                        <h3 className="text-2xl font-bold mt-1 group-hover:text-zinc-700 dark:group-hover:text-zinc-300 transition-colors">
                          {service.title}
                        </h3>
                      </div>
                      <Badge
                        variant="outline"
                        className="bg-zinc-50 dark:bg-zinc-900 whitespace-nowrap">
                        {service.date}
                      </Badge>
                    </div>

                    <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                      {service.description}
                    </p>

                    <div className="flex items-center gap-4 text-sm font-medium pt-2 text-zinc-900 dark:text-zinc-200">
                      <span className="flex items-center gap-1.5">
                        <Clock size={16} className="text-zinc-400" />{" "}
                        {service.time}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* --- FAQ / WHAT TO EXPECT ---
      <section className="py-20 px-6 max-w-4xl mx-auto text-center space-y-8 ">
        <h2 className="text-3xl font-bold">O Que Esperar</h2>
        <div className="grid md:grid-cols-3 gap-8 text-left">
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center font-bold">
              1
            </div>
            <h4 className="font-bold">Venha como você é</h4>
            <p className="text-sm text-zinc-500">
              Não há código de vestimenta. Queremos que você se sinta
              confortável e bem-vindo na casa do Pai.
            </p>
          </div>
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center font-bold">
              2
            </div>
            <h4 className="font-bold">Ministério Infantil</h4>
            <p className="text-sm text-zinc-500">
              Ambientes seguros, divertidos e bíblicos para seus filhos durante
              os cultos de domingo.
            </p>
          </div>
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center font-bold">
              3
            </div>
            <h4 className="font-bold">Conecte-se</h4>
            <p className="text-sm text-zinc-500">
              Visite nossa Central de Boas-Vindas após o culto para conhecer
              nossa equipe e tomar um café.
            </p>
          </div>
        </div>
      </section> */}
    </main>
  );
}
