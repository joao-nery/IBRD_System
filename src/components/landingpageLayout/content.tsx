import Link from "next/link";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import {
  Book,
  Calendar,
  ChevronRightCircle,
  Globe,
  HeartHandshake,
  Users2,
} from "lucide-react";

export function ContentComponent() {
  return (
    <div className="bg-white h-[1500px] text-black flex flex-col px-10 justify-center items-center">
      <h1 className="text-3xl text-center lg:text-4xl font-bold">
        Aqui na Renovo de Davi, Você Encontra:
      </h1>

      <div className="grid lg:grid-cols-2 mt-20 gap-10 *:bg-neutral-200 *:shadow-xl *:border-2 *:border-neutral-200 *:rounded-3xl">
        <Card className="w-[350px] md:w-[400px] py-10 md:h-[450px]">
          <CardHeader>
            <HeartHandshake
              size={60}
              className="rounded-full bg-neutral-400 p-3"
              color="white"
            />
            <CardTitle className="text-2xl lg:text-xl">
              Um Lugar para Pertencer
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-12">
            <p className="font-normal">
              Não somos apenas uma igreja, somos uma família. Um lugar onde suas
              diferenças encontram um propósito em comum. Conheça nossa
              história, nossa liderança e a comunidade que está de braços
              abertos para receber você.
            </p>
            <Link href={"/#"}>
              <Button className="cursor-pointer w-[250px] py-8 rounded-full">
                Conheça nossa Familia <ChevronRightCircle />
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="w-[350px] md:w-[400px] py-10 md:h-[450px]">
          <CardHeader>
            <Calendar
              size={60}
              className="rounded-full bg-neutral-400 p-3"
              color="white"
            />
            <CardTitle className="text-2xl lg:text-xl">
              Participe e Conecte-se
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-5 h-max">
            <p>
              A vida da igreja vai além do domingo. Temos encontros para jovens,
              mulheres, casais e eventos para toda a família durante o ano.
              Sempre há algo acontecendo e um lugar para você se enturmar.a
              comunidade que está de braços abertos para receber você.
            </p>
            <Link href={"/#"}>
              <Button className="cursor-pointer w-[250px] py-8 rounded-full">
                Veja os próximos eventos <ChevronRightCircle />
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="w-[350px] md:w-[400px] py-10 md:h-[450px]">
          <CardHeader>
            <Book
              size={60}
              className="rounded-full bg-neutral-400 p-3"
              color="white"
            />
            <CardTitle className="text-2xl lg:text-xl">
              Uma Fé para a Vida Real
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-18 h-max">
            <p>
              Buscamos entender e aplicar a Palavra de Deus de forma prática e
              relevante. Nossas mensagens e estudos são feitos para fortalecer
              sua fé, tirar suas dúvidas e te dar direção para os desafios do
              dia a dia.
            </p>
            <Link href={"/#"}>
              <Button className="cursor-pointer w-[250px] py-8 rounded-full">
                Assista a uma mensagem <ChevronRightCircle />
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="w-[350px] md:w-[400px] py-10 md:h-[450px]">
          <CardHeader>
            <Globe
              size={60}
              className="rounded-full bg-neutral-400 p-3"
              color="white"
            />
            <CardTitle className="text-2xl lg:text-xl ">
              Juntos, Fazemos a Diferença
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-6 h-max">
            <p>
              Acreditamos que a generosidade transforma vidas — a de quem dá e a
              de quem recebe. É através da contribuição de cada um que
              conseguimos servir nosso bairro, cuidar de famílias e manter as
              portas abertas para levar a mensagem de esperança.
            </p>
            <Link href={"/#"}>
              <Button className="cursor-pointer w-[250px] py-8 rounded-full">
                Faça parte desta missão <ChevronRightCircle />
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
