"use client";

import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Calendar,
  Clock,
  Users,
  ArrowRight,
  Navigation,
  Search,
} from "lucide-react";

export default function CellsPage() {
  // Dados das Células (Bairros de Betim para exemplo)
  const cells = [
    {
      id: 1,
      name: "Célula Betim Central",
      leader: "Líder João & Maria",
      day: "Terça-feira",
      time: "20:00",
      address: "Av. Governador Valadares, Centro, Betim - MG",
      neighborhood: "Centro",
      image:
        "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80",
      tags: ["Jovens", "Mista"],
      mapsLink:
        "https://www.google.com/maps/search/?api=1&query=Av.+Governador+Valadares,+Centro,+Betim+MG",
    },
    {
      id: 2,
      name: "Célula Jardim da Cidade",
      leader: "Líder Pedro",
      day: "Quinta-feira",
      time: "19:30",
      address: "Rua do Rosário, Jardim da Cidade, Betim - MG",
      neighborhood: "Jardim da Cidade",
      image:
        "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=800&q=80",
      tags: ["Família", "Casais"],
      mapsLink:
        "https://www.google.com/maps/search/?api=1&query=Rua+do+Rosário,+Jardim+da+Cidade,+Betim+MG",
    },
    {
      id: 3,
      name: "Célula Ingá",
      leader: "Líder Lucas & Ana",
      day: "Sexta-feira",
      time: "20:00",
      address: "Rua do Café, Bairro Ingá, Betim - MG",
      neighborhood: "Ingá",
      image:
        "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=800&q=80",
      tags: ["Jovens", "Universitários"],
      mapsLink:
        "https://www.google.com/maps/search/?api=1&query=Rua+do+Café,+Ingá,+Betim+MG",
    },
    {
      id: 4,
      name: "Célula Angola",
      leader: "Líder Marcos",
      day: "Quarta-feira",
      time: "19:30",
      address: "Rua Salvador, Angola, Betim - MG",
      neighborhood: "Angola",
      image:
        "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&w=800&q=80",
      tags: ["Mista", "Adultos"],
      mapsLink:
        "https://www.google.com/maps/search/?api=1&query=Rua+Salvador,+Angola,+Betim+MG",
    },
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 pt-20">
      {/* --- HERO SECTION --- */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/50 to-white dark:from-zinc-950/90 dark:via-zinc-950/50 dark:to-zinc-950 z-10" />
          {/* Fundo sutil de mapa abstrato */}
          <div className="absolute inset-0 opacity-10 dark:opacity-20 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/World_map_blank_without_borders.svg/2000px-World_map_blank_without_borders.svg.png')] bg-cover bg-center grayscale" />
        </div>

        <div className="relative z-20 max-w-4xl mx-auto text-center space-y-6">
          <Badge
            variant="outline"
            className="border-zinc-200 dark:border-zinc-700 px-4 py-1.5 backdrop-blur-md text-zinc-600 dark:text-zinc-400 uppercase tracking-widest text-xs">
            Pequenos Grupos
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-zinc-900 dark:text-white">
            A igreja na{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              sua casa.
            </span>
          </h1>
          <p className="text-lg text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto">
            Não fomos feitos para caminhar sozinhos. Encontre uma célula perto
            de você, faça amizades verdadeiras e cresça em sua fé.
          </p>

          {/* Barra de Busca "Fake" (Apenas visual para UX) */}
          <div className="flex items-center justify-center pt-4">
            <div className="flex items-center w-full max-w-md bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-full p-2 pl-6 shadow-lg shadow-zinc-200/50 dark:shadow-black/50">
              <Search className="text-zinc-400 w-5 h-5 mr-3" />
              <span className="flex-1 text-left text-zinc-400 text-sm">
                Buscar por bairro...
              </span>
              <Button className="rounded-full px-6 bg-zinc-900 dark:bg-white text-white dark:text-black hover:bg-zinc-800 dark:hover:bg-zinc-200">
                Buscar
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* --- LISTA DE CÉLULAS --- */}
      <section className="px-6 pb-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {cells.map((cell) => (
            <div
              key={cell.id}
              className="group relative bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-blue-500/10 dark:hover:shadow-blue-900/10 transition-all duration-300">
              <div className="flex flex-col md:flex-row h-full">
                {/* Imagem da Célula (Lado Esquerdo/Topo) */}
                <div className="w-full md:w-2/5 relative h-48 md:h-auto overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 md:hidden" />
                  <Image
                    src={cell.image}
                    alt={cell.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Badge de Bairro sobre a imagem no Mobile */}
                  <div className="absolute bottom-4 left-4 z-20 md:hidden">
                    <Badge className="bg-white/90 text-black backdrop-blur-md border-none">
                      {cell.neighborhood}
                    </Badge>
                  </div>
                </div>

                {/* Conteúdo (Lado Direito) */}
                <div className="flex-1 p-6 md:p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <div className="hidden md:block">
                        <Badge
                          variant="secondary"
                          className="bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-200">
                          {cell.neighborhood}
                        </Badge>
                      </div>
                      {/* Tags de Perfil */}
                      <div className="flex gap-1">
                        {cell.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 bg-zinc-50 dark:bg-zinc-950 px-2 py-1 rounded-md border border-zinc-100 dark:border-zinc-800">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {cell.name}
                    </h3>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6 flex items-center gap-2">
                      <Users size={14} /> {cell.leader}
                    </p>

                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-zinc-700 dark:text-zinc-300">
                        <div className="w-8 h-8 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400">
                          <Calendar size={16} />
                        </div>
                        <span className="font-medium">{cell.day}</span>
                      </div>
                      <div className="flex items-center gap-3 text-zinc-700 dark:text-zinc-300">
                        <div className="w-8 h-8 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400">
                          <Clock size={16} />
                        </div>
                        <span className="font-medium">{cell.time}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-xs text-zinc-400 uppercase font-bold tracking-wider">
                        Endereço
                      </span>
                      <span className="text-sm text-zinc-600 dark:text-zinc-400 truncate w-40 md:w-auto">
                        {cell.address}
                      </span>
                    </div>

                    <Button
                      asChild
                      size="icon"
                      className="rounded-full bg-zinc-900 dark:bg-white text-white dark:text-black hover:scale-105 transition-transform shadow-lg">
                      <a
                        href={cell.mapsLink}
                        target="_blank"
                        rel="noopener noreferrer">
                        <Navigation size={18} />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- BANNER "NÃO ENCONTROU?" --- */}
      <section className="px-6 pb-24">
        <div className="max-w-4xl mx-auto bg-zinc-900 dark:bg-zinc-100 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
          {/* Efeito de brilho de fundo */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 z-0" />

          <div className="relative z-10 space-y-6">
            <h2 className="text-3xl font-bold text-white dark:text-black">
              Não encontrou uma célula perto de você?
            </h2>
            <p className="text-zinc-400 dark:text-zinc-600 max-w-lg mx-auto">
              Entre em contato conosco! Nossa equipe vai te ajudar a encontrar o
              grupo perfeito ou quem sabe iniciar um novo em sua região.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="secondary"
                className="rounded-full h-12 px-8 font-bold"
                asChild>
                <a
                  href="https://wa.me/5531999999999"
                  target="_blank"
                  rel="noopener noreferrer">
                  Falar no WhatsApp
                </a>
              </Button>
              <Button
                variant="outline"
                className="rounded-full h-12 px-8 font-bold bg-transparent border-zinc-700 text-white hover:bg-zinc-800 dark:border-zinc-300 dark:text-black dark:hover:bg-zinc-200"
                asChild>
                <Link href="/contacts">Ver Endereço da Igreja</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
