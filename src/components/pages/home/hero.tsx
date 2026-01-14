import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, MapPin } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  // Link direto para a busca no Maps
  const googleMapsLink =
    "https://www.google.com/maps/search/?api=1&query=Rua+Dois,+417,+Parque+das+Acacias,+Betim,+MG";

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* --- BACKGROUND --- */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=2673&auto=format&fit=crop"
          alt="Adoração na Igreja"
          fill
          className="object-cover"
          priority
        />
        {/* Overlays mantidos */}
        <div className="absolute inset-0 bg-black/60 dark:bg-black/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white dark:to-zinc-950" />
      </div>

      {/* --- CONTEÚDO --- */}
      <div className="relative z-10 container px-6 text-center space-y-6 mt-10">
        <Badge
          variant="outline"
          className="border-white/30 bg-white/10 text-white backdrop-blur-md px-4 py-1.5 uppercase tracking-widest text-[10px]">
          Betim • Minas Gerais
        </Badge>

        <div className="space-y-1">
          <span className="block text-xl md:text-2xl font-medium text-zinc-300 uppercase tracking-[0.2em]">
            Igreja Batista
          </span>
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-white drop-shadow-2xl">
            Renovo de Davi
          </h1>
        </div>

        <p className="text-lg md:text-xl text-zinc-200 max-w-2xl mx-auto leading-relaxed drop-shadow-md font-light">
          Uma comunidade de fé apaixonada por Jesus e dedicada a transformar
          nossa cidade através do amor e serviço.
        </p>

        {/* --- BOTÃO DE AÇÃO ÚNICO --- */}
        <div className="flex justify-center pt-6">
          <Button
            asChild
            size="lg"
            className="rounded-full h-14 px-8 text-base font-bold shadow-[0_0_20px_rgba(255,255,255,0.3)] border-none bg-gradient-to-r from-white via-zinc-100 to-zinc-300 text-black hover:from-white hover:to-white hover:scale-105 transition-all duration-300">
            <a
              href={googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              Onde nos encontrar
            </a>
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-zinc-400">
        <ArrowRight className="rotate-90 w-6 h-6" />
      </div>
    </section>
  );
}
