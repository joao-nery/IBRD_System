import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Home,
  Baby,
  Music2,
  HeartHandshake,
  Camera,
  Coffee,
  ArrowRight,
  Users,
} from "lucide-react";

export default function MinistersPage() {
  const ministries = [
    {
      title: "Pequenos Grupos",
      desc: "A igreja acontece nos lares. Crie conexões profundas, compartilhe a vida e cresça em comunhão durante a semana.",
      icon: <Home size={24} />,
      color: "bg-blue-500",
      image:
        "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2669&auto=format&fit=crop",
    },
    {
      title: "IBRD Kids",
      desc: "Investimos na próxima geração. Um ambiente seguro e divertido onde as crianças aprendem princípios bíblicos.",
      icon: <Baby size={24} />,
      color: "bg-yellow-500",
      image:
        "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2670&auto=format&fit=crop",
    },
    {
      title: "Worship & Artes",
      desc: "Levitas, músicos e artistas que conduzem a igreja à presença de Deus através da excelência e unção.",
      icon: <Music2 size={24} />,
      color: "bg-purple-500",
      image:
        "https://images.unsplash.com/photo-1514525253440-b393452e8d26?q=80&w=2670&auto=format&fit=crop",
    },
    {
      title: "Ação Social",
      desc: "O amor em movimento. Servimos nossa comunidade em Betim através de doações, apoio a famílias e projetos sociais.",
      icon: <HeartHandshake size={24} />,
      color: "bg-red-500",
      image:
        "https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=2670&auto=format&fit=crop",
    },
    {
      title: "Mídia & Comunicação",
      desc: "Levando a mensagem do evangelho para o mundo digital através da fotografia, vídeo, design e transmissão.",
      icon: <Camera size={24} />,
      color: "bg-pink-500",
      image:
        "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=2528&auto=format&fit=crop",
    },
    {
      title: "Recepção & Acolhimento",
      desc: "O primeiro sorriso, o café quentinho e o abraço que faz qualquer pessoa se sentir em casa na IBRD.",
      icon: <Coffee size={24} />,
      color: "bg-orange-500",
      image:
        "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2670&auto=format&fit=crop",
    },
  ];

  return (
    <div className="pt-24 pb-16 min-h-screen bg-zinc-50 dark:bg-zinc-950">
      {/* --- HEADER --- */}
      <section className="px-6 max-w-4xl mx-auto text-center space-y-6 mb-16 fade-in-up">
        <Badge
          variant="secondary"
          className="px-4 py-1.5 text-sm rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 font-medium">
          Áreas de Atuação
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white">
          Encontre o seu lugar
        </h1>
        <p className="text-lg text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto">
          Acreditamos que todo membro é um ministro. Descubra onde seus dons
          podem servir ao Reino e transformar vidas.
        </p>
      </section>

      {/* --- GRID DE MINISTÉRIOS --- */}
      <section className="px-6 max-w-7xl mx-auto mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ministries.map((item, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:shadow-2xl hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-500 hover:-translate-y-2">
              {/* Imagem de Capa */}
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay Gradiente */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />

                {/* Ícone Flutuante */}
                <div
                  className={`absolute bottom-4 left-4 w-12 h-12 rounded-xl ${item.color} flex items-center justify-center text-white shadow-lg z-10 group-hover:scale-110 transition-transform`}>
                  {item.icon}
                </div>
              </div>

              <CardHeader className="pt-6 pb-2">
                <CardTitle className="text-2xl font-bold text-zinc-900 dark:text-white group-hover:text-zinc-700 dark:group-hover:text-zinc-300 transition-colors">
                  {item.title}
                </CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm">
                  {item.desc}
                </p>
              </CardContent>

              <CardFooter className="pt-4 mt-auto">
                <Button
                  variant="ghost"
                  className="w-full justify-between hover:bg-zinc-50 dark:hover:bg-zinc-800 text-zinc-900 dark:text-white group/btn">
                  Quero servir aqui
                  <ArrowRight
                    size={16}
                    className="text-zinc-400 group-hover/btn:text-black dark:group-hover/btn:text-white transition-colors"
                  />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* --- CTA VOLUNTARIADO --- */}
      <section className="px-6 max-w-5xl mx-auto">
        <div className="bg-zinc-900 dark:bg-zinc-100 rounded-3xl p-8 md:p-12 text-center md:text-left flex flex-col md:flex-row items-center gap-8 md:gap-16 shadow-2xl relative overflow-hidden">
          {/* Background Pattern sutil */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-zinc-800 dark:bg-zinc-200 rounded-full blur-[80px] opacity-50 -translate-y-1/2 translate-x-1/2" />

          <div className="relative z-10 flex-1 space-y-4">
            <h2 className="text-3xl font-bold text-white dark:text-zinc-900">
              Não sabe por onde começar?
            </h2>
            <p className="text-zinc-400 dark:text-zinc-600 text-lg">
              Participe do nosso{" "}
              <span className="text-white dark:text-black font-bold">
                Curso de Integração
              </span>
              . É o primeiro passo para conhecer nossa cultura e descobrir seus
              dons espirituais.
            </p>
          </div>

          <div className="relative z-10">
            <Button
              size="lg"
              className="rounded-full h-14 px-8 text-base font-bold bg-white text-black hover:bg-zinc-200 dark:bg-black dark:text-white dark:hover:bg-zinc-800 shadow-xl w-full md:w-auto">
              <Users className="mr-2 h-5 w-5" />
              Inscreva-se agora
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
