import Link from "next/link";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

export function ContentComponent() {
  const contents = [
    {
      title: "Cultos Renovo",
      contentTilte: "Cultos presenciais",
      time: "Quinta-feira às 20hrs - Domingos 10hrs e 18hrs.",
      link: "/pages/cults",
    },
    {
      title: "Células Renovo",
      contentTilte: "Células Renovo Church",
      time: "Encontre uma célula mais próxima de você",
      link: "/pages/cell",
    },
  ];

  return (
    <div className="bg-white h-[1100px] text-black flex flex-col px-10 justify-center items-center">
      <h1 className="text-4xl font-bold">Não perca nossos Conteúdos!</h1>

      <div className="grid grid-cols-2 mt-20 gap-5 *:hover:scale-105 *:transition-all">
        {contents.map((content, index) => (
          <div key={index}>
            <Card className="w-[400px] h-[300px]">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl">{content.title}</CardTitle>
                <CardDescription>Venha com sua familia!</CardDescription>
              </CardHeader>
              <CardContent className="flex h-[250px] gap-5 flex-col justify-center items-center">
                <div className="text-center w-full flex flex-col items-center">
                  <h1 className="text-2xl font-semibold">
                    {content.contentTilte}
                  </h1>
                  <p className="w-[200px]">{content.time}</p>
                </div>
                <Link href={content.link}>
                  <Button className="cursor-pointer">Ver Mais</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
