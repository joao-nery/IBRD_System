"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Users,
  Heart,
  Music,
  Baby,
  Coffee,
  Clock,
  Home,
  Megaphone,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CommunityPage() {
  // Dados das Células (Com links reais ou placeholders para o Maps)
  const cells = [
    {
      name: "Célula Laranjeiras",
      neighborhood: "Laranjeiras",
      host: "Família Silva",
      time: "Terça às 20h",
      addressLink: "https://goo.gl/maps/placeholderLaranjeiras", // Substitua pelo link real
      image:
        "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Célula Vila Cristina",
      neighborhood: "Vila Cristina",
      host: "Pr. João & Maria",
      time: "Quarta às 19h30",
      addressLink: "https://goo.gl/maps/placeholderVilaCristina",
      image:
        "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Célula Pq. das Acácias",
      neighborhood: "Parque das Acácias",
      host: "Lucas & Ana",
      time: "Quinta às 20h",
      addressLink: "https://goo.gl/maps/placeholderAcacias",
      image:
        "https://images.unsplash.com/photo-1478147427282-58a87a120781?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Célula Centro",
      neighborhood: "Centro de Betim",
      host: "Pedro & Julia",
      time: "Sexta às 20h",
      addressLink: "https://goo.gl/maps/placeholderCentro",
      image:
        "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=800&q=80",
    },
  ];

  // Dados dos Ministérios
  const ministries = [
    {
      title: "Grupo de Jovens (HUB)",
      desc: "Uma galera apaixonada por Jesus, conectada e pronta para marcar essa geração.",
      icon: <Users size={24} className="text-purple-500" />,
      bgIcon: "bg-purple-100 dark:bg-purple-900/20",
    },
    {
      title: "Renovo Kids",
      desc: "Ensinando o caminho da verdade para os pequeninos com muito amor e diversão.",
      icon: <Baby size={24} className="text-yellow-500" />,
      bgIcon: "bg-yellow-100 dark:bg-yellow-900/20",
    },
    {
      title: "Mulheres da Dança",
      desc: "Expressando adoração e louvor através do movimento e da arte.",
      icon: <Music size={24} className="text-pink-500" />,
      bgIcon: "bg-pink-100 dark:bg-pink-900/20",
    },
    {
      title: "Recepção & Acolhimento",
      desc: "O sorriso que recebe, o abraço que acolhe. Servindo com excelência na casa.",
      icon: <Coffee size={24} className="text-orange-500" />,
      bgIcon: "bg-orange-100 dark:bg-orange-900/20",
    },
    {
      title: "Mídia & Comunicação",
      desc: "Levando a mensagem do Evangelho através das lentes, telas e redes sociais.",
      icon: <Megaphone size={24} className="text-blue-500" />,
      bgIcon: "bg-blue-100 dark:bg-blue-900/20",
    },
    {
      title: "Ação Social",
      desc: "Amor na prática. Mãos estendidas para abençoar nossa cidade e quem precisa.",
      icon: <Heart size={24} className="text-red-500" />,
      bgIcon: "bg-red-100 dark:bg-red-900/20",
    },
  ];

  return (
    <div className="min-h-screen pt-24 bg-white dark:bg-black text-zinc-900 dark:text-zinc-100">
      {/* --- HERO SECTION (Fundo Branco) --- */}
      <section className="px-6 max-w-4xl mx-auto text-center mb-24 pt-10 animate-fade-in-up">
        <Badge
          variant="secondary"
          className="mb-8 px-6 py-2 bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 border border-zinc-200 dark:border-zinc-700 text-sm font-medium">
          Nossa Comunidade
        </Badge>
        <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-8 text-zinc-900 dark:text-white">
          Não fomos criados <br className="hidden md:block" />
          para viver sozinhos.
        </h1>
        <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto font-medium leading-relaxed">
          Seja servindo em um ministério ou compartilhando a vida em uma célula,
          aqui você encontra uma família para pertencer.
        </p>
      </section>

      {/* --- SEÇÃO 1: CÉLULAS (Fundo Cinza Suave no Claro) --- */}
      <section className="py-24 bg-zinc-100 dark:bg-zinc-900/30 border-y border-zinc-100 dark:border-zinc-800">
        <div className="px-6 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-green-100 dark:bg-green-900/20 rounded-2xl text-green-600 dark:text-green-400">
                <Home size={28} />
              </div>
              <div>
                <h2 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">
                  Nossas Células
                </h2>
                <p className="text-zinc-500 mt-2 font-medium">
                  Igreja nos lares. Encontre uma perto de você.
                </p>
              </div>
            </div>
            {/* Opcional: Filtro de Bairros futuramente */}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cells.map((cell, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-[2rem] overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
                {/* Imagem da Célula */}
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={cell.image}
                    alt={cell.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-bold text-lg">{cell.neighborhood}</p>
                  </div>
                </div>

                {/* Conteúdo */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">
                    {cell.name}
                  </h3>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                      <Users size={16} className="text-zinc-400" /> {cell.host}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                      <Clock size={16} className="text-zinc-400" /> {cell.time}
                    </div>
                  </div>

                  <div className="mt-auto">
                    <Button
                      variant="outline"
                      className="w-full rounded-full border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 font-bold group-hover:border-green-500 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors"
                      asChild>
                      <Link href={cell.addressLink} target="_blank">
                        <MapPin className="mr-2 h-4 w-4" /> Ver no Mapa
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SEÇÃO 2: MINISTÉRIOS (Fundo Branco) --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <div className="p-3 bg-blue-100 dark:bg-blue-900/20 rounded-2xl text-blue-600 dark:text-blue-400">
            <Heart size={28} />
          </div>
          <div>
            <h2 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">
              Ministérios
            </h2>
            <p className="text-zinc-500 mt-2 font-medium">
              Áreas onde servimos a Deus e uns aos outros.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ministries.map((ministry, index) => (
            <div
              key={index}
              className="p-8 rounded-[2.5rem] bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 hover:border-blue-200 dark:hover:border-blue-900/50 hover:shadow-lg transition-all duration-300 group">
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${ministry.bgIcon} group-hover:scale-110 transition-transform`}>
                {ministry.icon}
              </div>
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-3">
                {ministry.title}
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium">
                {ministry.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* --- CTA FINAL: QUER SERVIR? (Fundo Escuro/Destaque) --- */}
      <section className="py-24 bg-zinc-50 dark:bg-zinc-800 text-black dark:text-white  mt-12">
        <div className="px-6 max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Quer fazer parte de algo maior?
          </h2>
          <p className="text-black dark:text-zinc-300  text-lg max-w-2xl mx-auto font-medium">
            Se você deseja servir em algum ministério ou abrir sua casa para uma
            célula, fale com nossa liderança. Há um lugar especial para você.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              size="lg"
              className="rounded-full text-lg px-10 py-8 font-semibold"
              asChild>
              <Link href="/contacts">Fale conosco</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
