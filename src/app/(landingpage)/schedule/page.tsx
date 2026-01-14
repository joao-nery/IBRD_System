import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, MapPin, ArrowRight, CalendarDays, Star } from "lucide-react";

export default function SchedulePage() {
  // Dados dos Cultos Semanais
  const weeklyEvents = [
    {
      day: "Domingo",
      time: "19:00",
      title: "Culto de Celebração",
      desc: "O momento principal da nossa família. Louvor, palavra e comunhão.",
      image:
        "https://images.unsplash.com/photo-1478147427282-58a87a120781?q=80&w=2670&auto=format&fit=crop",
      tag: "Família",
    },
    {
      day: "Quarta-feira",
      time: "19:30",
      title: "Culto de Doutrina",
      desc: "Um tempo profundo de estudo bíblico e oração para recarregar as energias.",
      image:
        "https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?q=80&w=2670&auto=format&fit=crop",
      tag: "Ensino",
    },
    {
      day: "Sexta-feira",
      time: "20:00",
      title: "Vigília Jovem",
      desc: "Adoração intensa e busca pelo Espírito Santo voltada para a juventude.",
      image:
        "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?q=80&w=2670&auto=format&fit=crop",
      tag: "Jovens",
    },
  ];

  // Dados de Eventos Especiais
  const specialEvents = [
    {
      date: "15 AGO",
      title: "Conferência Renovo",
      desc: "Três dias de imersão profética com preletores convidados.",
      // Link corrigido (Conferência/Palco)
      image:
        "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2670&auto=format&fit=crop",
      local: "Sede IBRD",
    },
    {
      date: "20 SET",
      title: "Batismo nas Águas",
      desc: "Celebração pública de fé e novos começos.",
      image:
        "https://images.unsplash.com/photo-1502444330042-d1a1ddf9bb5b?q=80&w=2673&auto=format&fit=crop",
      local: "Sítio Ebenézer",
    },
  ];

  return (
    <div className="pt-24 pb-16 min-h-screen bg-zinc-50 dark:bg-zinc-950">
      {/* --- HEADER --- */}
      <section className="px-6 max-w-4xl mx-auto text-center space-y-6 mb-12 fade-in-up">
        <Badge
          variant="secondary"
          className="px-4 py-1.5 text-sm rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 font-medium">
          Agenda IBRD
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white">
          Esteja conosco
        </h1>
        <p className="text-lg text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto">
          Confira nossa programação semanal fixa e fique por dentro dos próximos
          grandes eventos.
        </p>
      </section>

      {/* --- TABS DE NAVEGAÇÃO --- */}
      <section className="px-6 max-w-7xl mx-auto">
        <Tabs defaultValue="weekly" className="w-full">
          {/* Controles das Abas (Mobile Optimized) */}
          <div className="flex justify-center mb-8 md:mb-12">
            <TabsList className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-1 rounded-full h-auto w-full md:w-auto grid grid-cols-2 md:flex">
              <TabsTrigger
                value="weekly"
                className="rounded-full px-4 md:px-6 py-3 text-xs md:text-sm font-medium data-[state=active]:bg-zinc-900 data-[state=active]:text-white dark:data-[state=active]:bg-white dark:data-[state=active]:text-black transition-all">
                <CalendarDays className="w-4 h-4 mr-2" />
                <span className="hidden md:inline">Programação Semanal</span>
                <span className="md:hidden">Semanal</span>
              </TabsTrigger>
              <TabsTrigger
                value="special"
                className="rounded-full px-4 md:px-6 py-3 text-xs md:text-sm font-medium data-[state=active]:bg-zinc-900 data-[state=active]:text-white dark:data-[state=active]:bg-white dark:data-[state=active]:text-black transition-all">
                <Star className="w-4 h-4 mr-2" />
                <span className="hidden md:inline">Eventos Especiais</span>
                <span className="md:hidden">Especiais</span>
              </TabsTrigger>
            </TabsList>
          </div>

          {/* --- ABA 1: SEMANAL --- */}
          <TabsContent
            value="weekly"
            className="space-y-6 mt-0 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {weeklyEvents.map((event, i) => (
                <Card
                  key={i}
                  className="group overflow-hidden border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  {/* Imagem (Altura ajustada para mobile) */}
                  <div className="relative h-40 md:h-48 w-full overflow-hidden">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-white/90 text-black hover:bg-white dark:bg-black/80 dark:text-white backdrop-blur-md border-none text-xs">
                        {event.tag}
                      </Badge>
                    </div>
                  </div>

                  {/* Conteúdo */}
                  <CardHeader className="pb-2 pt-4 md:pt-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs md:text-sm font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                        {event.day}
                      </span>
                      <div className="flex items-center text-zinc-900 dark:text-white font-bold bg-zinc-100 dark:bg-zinc-800 px-3 py-1 rounded-full text-[10px] md:text-xs">
                        <Clock className="w-3 h-3 mr-1.5" /> {event.time}
                      </div>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-zinc-900 dark:text-white group-hover:text-zinc-700 dark:group-hover:text-zinc-300 transition-colors">
                      {event.title}
                    </h3>
                  </CardHeader>

                  <CardContent>
                    <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed text-sm line-clamp-2 md:line-clamp-none">
                      {event.desc}
                    </p>
                  </CardContent>

                  <CardFooter className="pt-4 border-t border-zinc-100 dark:border-zinc-800">
                    <div className="flex items-center text-zinc-400 text-xs">
                      <MapPin className="w-3 h-3 mr-1" /> Sede IBRD - Betim
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* --- ABA 2: ESPECIAIS --- */}
          <TabsContent
            value="special"
            className="space-y-6 mt-0 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {specialEvents.map((event, i) => (
              <Card
                key={i}
                className="group overflow-hidden border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all">
                <div className="flex flex-col md:flex-row">
                  {/* Data e Imagem */}
                  <div className="relative w-full md:w-72 h-48 md:h-auto shrink-0 overflow-hidden">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                    />
                    {/* Badge de Data Grande */}
                    <div className="absolute top-4 left-4 bg-white dark:bg-black p-2 md:p-3 rounded-xl text-center shadow-lg min-w-[60px] md:min-w-[70px]">
                      <span className="block text-lg md:text-xl font-black text-zinc-900 dark:text-white leading-none">
                        {event.date.split(" ")[0]}
                      </span>
                      <span className="block text-[10px] md:text-xs font-bold text-zinc-500 uppercase">
                        {event.date.split(" ")[1]}
                      </span>
                    </div>
                  </div>

                  {/* Informações */}
                  <div className="flex-1 p-6 md:p-8 flex flex-col justify-center">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-zinc-900 dark:text-white mb-2">
                          {event.title}
                        </h3>
                        <p className="text-zinc-500 dark:text-zinc-400 mb-6 max-w-lg text-sm md:text-base">
                          {event.desc}
                        </p>
                      </div>
                      <Button
                        variant="outline"
                        size="icon"
                        className="hidden md:flex rounded-full shrink-0 group-hover:bg-zinc-900 group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-colors">
                        <ArrowRight className="w-5 h-5" />
                      </Button>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 md:gap-6 text-sm text-zinc-500 dark:text-zinc-400 mt-auto">
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" /> 19:30
                      </span>
                      <span className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" /> {event.local}
                      </span>
                    </div>

                    {/* Botão Mobile Apenas */}
                    <Button className="w-full mt-6 md:hidden bg-zinc-100 text-black dark:bg-zinc-800 dark:text-white hover:bg-zinc-200">
                      Ver Detalhes
                    </Button>
                  </div>
                </div>
              </Card>
            ))}

            {/* Estado Vazio (Se não tiver eventos) */}
            {specialEvents.length === 0 && (
              <div className="text-center py-20 bg-zinc-100 dark:bg-zinc-900 rounded-3xl border border-dashed border-zinc-300 dark:border-zinc-800">
                <p className="text-zinc-500">
                  Nenhum evento especial programado para este mês.
                </p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
}
