import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  ArrowRight,
  HomeIcon,
  Baby,
  Music2,
  HeartHandshake,
} from "lucide-react";

export function MinistersPreview() {
  const ministries = [
    {
      title: "Pequenos Grupos",
      shortDescription: "Comunhão nos lares",
      fullDescription:
        "Nossos encontros semanais nos lares são a oportunidade perfeita para criar laços profundos, compartilhar a vida e estudar a palavra em família.",
      icon: <HomeIcon size={24} />,
      color: "bg-blue-500",
      image:
        "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2670&auto=format&fit=crop",
    },
    {
      title: "IBRD Kids",
      shortDescription: "O futuro da igreja",
      fullDescription:
        "Um ambiente seguro, lúdico e cheio de Deus. Seus filhos aprendem princípios eternos com monitores treinados enquanto se divertem.",
      icon: <Baby size={24} />,
      color: "bg-yellow-500",
      image:
        "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2670&auto=format&fit=crop",
    },
    {
      title: "Worship & Artes",
      shortDescription: "Adoração sem reservas",
      fullDescription:
        "Expressamos nossa gratidão e conectamos a igreja aos céus através da música, dança e teatro. Junte-se ao nosso time de levitas.",
      icon: <Music2 size={24} />,
      color: "bg-purple-500",
      image:
        "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?q=80&w=2670&auto=format&fit=crop",
    },
    {
      title: "Ação Social",
      shortDescription: "Amor em movimento",
      fullDescription:
        "Levamos o evangelho através de atitudes práticas, servindo a comunidade de Betim com distribuição de alimentos e apoio às famílias.",
      icon: <HeartHandshake size={24} />,
      color: "bg-red-500",
      image:
        "https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=2670&auto=format&fit=crop",
    },
  ];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto space-y-8">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full">
        {/* --- Header da Seção com Controles --- */}
        <div className="flex items-end justify-between px-1 border-b border-zinc-200 dark:border-zinc-800 pb-6 mb-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
              Experiência IBRD
            </h2>
            <p className="text-zinc-500 dark:text-zinc-400 mt-2 max-w-md">
              Descubra como você pode servir, crescer e fazer parte da nossa
              família através dos ministérios.
            </p>
          </div>

          {/* Controles do Carousel (Visíveis em Desktop) */}
          <div className="hidden md:flex gap-2">
            <CarouselPrevious className="static translate-y-0" />
            <CarouselNext className="static translate-y-0" />
          </div>
        </div>

        <CarouselContent className="-ml-4 pb-4">
          {ministries.map((item, index) => (
            <CarouselItem
              key={index}
              className="pl-4 md:basis-1/2 lg:basis-1/3">
              <div className="h-full">
                {" "}
                {/* Wrapper para altura igual */}
                <Card className="group relative h-full flex flex-col border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 overflow-hidden hover:shadow-xl hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300">
                  {/* Imagem de Capa */}
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Overlay Gradiente */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />

                    {/* Badge do Ícone Flutuante */}
                    <div
                      className={`absolute bottom-4 left-4 w-12 h-12 rounded-xl ${item.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform`}>
                      {item.icon}
                    </div>
                  </div>

                  <CardHeader className="pt-6">
                    <CardTitle className="text-xl font-bold text-zinc-900 dark:text-white flex items-center gap-2">
                      {item.title}
                    </CardTitle>
                    <CardDescription className="font-medium text-zinc-500 dark:text-zinc-400">
                      {item.shortDescription}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="flex-1">
                    <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed line-clamp-3">
                      {item.fullDescription}
                    </p>
                  </CardContent>

                  <CardFooter className="pt-4 border-t border-zinc-100 dark:border-zinc-800/50 mt-auto">
                    <Button
                      variant="ghost"
                      className="w-full justify-between hover:bg-zinc-50 dark:hover:bg-zinc-800 group/btn"
                      asChild>
                      <Link href="#">
                        <span className="font-semibold">Conhecer mais</span>
                        <ArrowRight
                          size={16}
                          className="text-zinc-400 group-hover/btn:text-zinc-900 dark:group-hover/btn:text-white transition-colors"
                        />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
