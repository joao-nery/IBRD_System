"use client";

import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Ticket,
  Sparkles,
  Users,
  Music,
  CheckCircle2,
  CalendarDays,
  ArrowRight,
} from "lucide-react";

export default function EventsPage() {
  // Dados dos Eventos Futuros
  const upcomingEvents = [
    {
      id: 1,
      title: "Acampamento FLAME 2026",
      category: "Jovens",
      date: "14 - 17 Fev",
      location: "Sítio Vale das Águias",
      description:
        "Quatro dias de imersão total, adoração intensa e comunhão. O evento mais aguardado do ano para a juventude.",
      price: "R$ 350,00",
      status: "Vagas Esgotando",
      statusColor:
        "bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20",
      image:
        "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=800&q=80",
      icon: Sparkles,
    },
    {
      id: 2,
      title: "Conferência de Mulheres: Florescer",
      category: "Mulheres",
      date: "08 Mar",
      location: "Templo Principal",
      description:
        "Um dia inteiro dedicado a curar, levantar e empoderar mulheres para viverem o propósito de Deus.",
      price: "Gratuito",
      status: "Inscrições Abertas",
      statusColor:
        "bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20",
      image:
        "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80",
      icon: Users,
    },
    {
      id: 3,
      title: "Noite de Adoração & Louvor",
      category: "Geral",
      date: "25 Mar",
      location: "Templo Principal",
      description:
        "Gravação ao vivo do novo álbum do Renovo Music. Venha fazer parte dessa história.",
      price: "1kg de Alimento",
      status: "Em Breve",
      statusColor:
        "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
      // Imagem corrigida (Banda/Adoração)
      image:
        "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=800&q=80",
      icon: Music,
    },
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 pt-20">
      {/* --- HERO SECTION PADRÃO (SIMPLIFICADO) --- */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/50 to-white dark:from-zinc-950/90 dark:via-zinc-950/50 dark:to-zinc-950 z-10" />
          {/* Fundo abstrato sutil */}
          <Image
            src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1920&q=80"
            alt="Fundo Eventos"
            fill
            className="object-cover opacity-10 dark:opacity-20 blur-sm"
          />
        </div>

        <div className="relative z-20 max-w-4xl mx-auto text-center space-y-6">
          <Badge
            variant="outline"
            className="border-zinc-200 dark:border-zinc-700 px-4 py-1.5 backdrop-blur-md text-zinc-600 dark:text-zinc-400 uppercase tracking-widest text-xs">
            Calendário 2026
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-zinc-900 dark:text-white">
            Eventos & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-500">
              Programações
            </span>
          </h1>
          <p className="text-lg text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto">
            Confira o que vem por aí. Grandes coisas o Senhor tem feito por nós,
            e por isso estamos alegres.
          </p>
        </div>
      </section>

      {/* --- LISTA DE EVENTOS --- */}
      <section className="pb-24 px-6 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12 border-b border-zinc-100 dark:border-zinc-800 pb-4">
          <div className="flex items-center gap-3">
            <CalendarDays className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold tracking-tight">
              Próximos Eventos
            </h2>
          </div>
          {/* Filtro Simplificado (Apenas visual "Todos") */}
          <div className="flex gap-2">
            <Badge
              variant="secondary"
              className="px-4 py-1.5 text-sm bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white hover:bg-zinc-200 cursor-pointer">
              Todos
            </Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {upcomingEvents.map((event) => (
            <div
              key={event.id}
              className="group relative bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-zinc-200/50 dark:hover:shadow-black/50 transition-all duration-300">
              <div className="flex flex-col lg:flex-row">
                {/* Data e Imagem (Esquerda) */}
                <div className="lg:w-1/3 relative h-64 lg:h-auto overflow-hidden">
                  <div className="absolute top-4 left-4 z-20 bg-white/90 dark:bg-black/80 backdrop-blur-md rounded-xl p-3 text-center min-w-[70px] shadow-lg">
                    <span className="block text-2xl font-bold text-zinc-900 dark:text-white leading-none">
                      {event.date.split(" ")[0]}
                    </span>
                    <span className="block text-xs font-bold text-zinc-500 uppercase">
                      {event.date.split(" ")[2]}
                    </span>
                  </div>
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Overlay gradiente no mobile */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent lg:hidden" />
                </div>

                {/* Detalhes (Direita) */}
                <div className="flex-1 p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <Badge variant="secondary" className="rounded-md">
                        {event.category}
                      </Badge>
                      <Badge
                        variant="outline"
                        className={`rounded-md ${event.statusColor} border`}>
                        {event.status}
                      </Badge>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {event.title}
                    </h3>

                    <p className="text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
                      {event.description}
                    </p>

                    <div className="flex flex-wrap gap-6 text-sm font-medium text-zinc-700 dark:text-zinc-300">
                      <div className="flex items-center gap-2">
                        <MapPin className="text-zinc-400" size={18} />
                        {event.location}
                      </div>
                      <div className="flex items-center gap-2">
                        <Ticket className="text-zinc-400" size={18} />
                        {event.price}
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-zinc-100 dark:border-zinc-800 flex justify-end">
                    <Button className="rounded-full group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      Inscrever-se agora{" "}
                      <ArrowRight
                        size={16}
                        className="ml-2 group-hover:translate-x-1 transition-transform"
                      />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- GALERIA FLASHBACK (CORRIGIDA) --- */}
      <section className="py-20 bg-zinc-50 dark:bg-zinc-900/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Melhores Momentos</h2>
            <p className="text-zinc-500 dark:text-zinc-400">
              Veja como Deus tem se movido em nossos últimos encontros.
            </p>
          </div>

          {/* Grid corrigido */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
            {/* Item 1 - Vertical (Grande Esquerda) - Imagem Corrigida (Adoração Vertical) */}
            <div className="col-span-1 row-span-2 relative rounded-2xl overflow-hidden group bg-zinc-200 dark:bg-zinc-800">
              <Image
                src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&w=800&q=80"
                alt="Adoração"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>

            {/* Item 2 - Horizontal (Topo Meio) */}
            <div className="col-span-1 md:col-span-2 row-span-1 relative rounded-2xl overflow-hidden group bg-zinc-200 dark:bg-zinc-800">
              <Image
                src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&w=1200&q=80"
                alt="Show de Luzes e Palco"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>

            {/* Item 3 - Quadrado (Topo Direita) */}
            <div className="col-span-1 row-span-1 relative rounded-2xl overflow-hidden group bg-zinc-200 dark:bg-zinc-800">
              <Image
                src="https://images.unsplash.com/photo-1471479917193-f00955256257?auto=format&fit=crop&w=800&q=80"
                alt="Mãos levantadas"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>

            {/* Item 4 - Quadrado (Baixo Meio 1) */}
            <div className="col-span-1 row-span-1 relative rounded-2xl overflow-hidden group bg-zinc-200 dark:bg-zinc-800">
              <Image
                src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=800&q=80"
                alt="Comunhão"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>

            {/* Item 5 - Horizontal (Baixo Direita) - Imagem Corrigida (Multidão) */}
            <div className="col-span-2 md:col-span-2 row-span-1 relative rounded-2xl overflow-hidden group bg-zinc-200 dark:bg-zinc-800">
              <Image
                src="https://images.unsplash.com/photo-1505506874110-6a7a69069a08?auto=format&fit=crop&w=1200&q=80"
                alt="Multidão"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Button
                  variant="outline"
                  className="text-white border-white hover:bg-white hover:text-black">
                  Ver Galeria Completa
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- BANNER NEWSLETTER --- */}
      <section className="py-24 px-6 max-w-5xl mx-auto text-center">
        <div className="bg-zinc-900 dark:bg-white text-white dark:text-black rounded-[3rem] p-12 relative overflow-hidden">
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-blue-500 rounded-full blur-[100px] opacity-50" />
          <div className="relative z-10 space-y-6">
            <CheckCircle2 className="w-12 h-12 mx-auto text-blue-500" />
            <h2 className="text-3xl md:text-4xl font-bold">
              Não perca nenhum evento
            </h2>
            <p className="text-zinc-400 dark:text-zinc-600 max-w-lg mx-auto">
              Entre no nosso grupo exclusivo de avisos no WhatsApp e seja o
              primeiro a saber sobre inscrições e viradas de lote.
            </p>
            {/* Link Adicionado para /contacts */}
            <Link href="/contacts">
              <Button
                size="lg"
                className="rounded-full bg-blue-600 hover:bg-blue-700 text-white border-none text-lg px-8">
                Entrar no Grupo VIP
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
