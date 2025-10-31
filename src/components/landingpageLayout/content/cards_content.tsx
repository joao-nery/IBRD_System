import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

const cards = [
  {
    title: "Encontre seu Grupo",
    src: "/Rectangle 34.png",
    description:
      "  Acreditamos que a vida é melhor em comunidade. Nossas células são pequenos grupos nas casas, feitos para criar amizades e crescer na fé.",
    textButton: "Conheça nossas células",
  },

  {
    title: "Palavras que Transformam",
    src: "/Rectangle 34(1).png",
    description:
      " Todo domingo, compartilhamos mensagens práticas e baseadas na Bíblia para inspirar sua semana. Perca alguma? Assista quando quiser",
    textButton: "Conheça nossas cultos",
  },
  {
    title: "Fique por Dentro",
    src: "/Rectangle 34(2).png",
    description:
      " Do nosso acampamento de jovens a jantares de casais, sempre tem algo acontecendo. Veja o que vem por aí na nossa comunidade.",
    textButton: "Veja a nossa Agenda",
  },
];

export function CardsContent() {
  return (
    <section className="flex flex-col h-[2000px] justify-center items-center mt-20">
      <h1 className="text-xl font-bold text-white">
        Viva a Experiência Completa
      </h1>

      <div className="mt-10 flex flex-col justify-center items-center  gap-10">
        {cards.map((item, index) => (
          <Card key={index} className="w-[300px]">
            <div>
              <Image
                src={item.src}
                width={1000}
                height={0}
                alt=""
                className="w-full p-3 z-0"
              />
            </div>
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center">
              <Button className="py-7 w-full rounded-2xl">
                {item.textButton}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <hr className="text-white w-full mt-10" />
    </section>
  );
}
