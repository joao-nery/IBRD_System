import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function WhoWeArePaeg() {
  return (
    <div className="flex flex-col h-[1700px] mt-30  text-white items-center gap-10">
      <div className="flex flex-col gap-5 items-center">
        <Image
          src={"/logo.jpg"}
          width={1000}
          height={40}
          alt="Image Logo"
          className="rounded-full w-[80px] lg:w-[120px]"
        />
        <h1 className="text-3xl mt-5 xl:text-4xl font-bold">Quem Somos?</h1>
      </div>

      <section className="flex flex-col justify-center gap-15 items-center w-[350px] md:w-[650px] lg:w-[800px]">
        <h2 className="md:text-2xl xl:text-3xl text-center">
          Bem-vindo à{" "}
          <span className="font-bold">Igreja Batista Renovo de Davi</span>
        </h2>
        <p className="lg:text-lg font-medium text-center">
          Somos uma comunidade cristã que, há mais de uma década, tem sido um
          ponto de encontro para famílias e amigos que desejam crescer na fé e
          viver em comunhão.
          <br /> <br />
          Nascemos do desejo de criar um espaço de acolhimento e esperança em
          Betim, e hoje, somos uma família que continua a crescer, unida pelo
          amor a Jesus Cristo.
        </p>
        <Card className="w-full py-20 px-10">
          <CardHeader>
            <CardTitle className="text-xl md:text-2xl lg:text-3xl text-center">
              O que significa Renovo de Davi?
            </CardTitle>
            <CardDescription className="mt-10 lg:text-lg">
              {" "}
              <p>
                Nosso nome é uma expressão de nossa fé. Ele vem de uma promessa
                bíblica que aponta para Jesus como o Renovo, aquele que traz uma
                nova aliança, restauração e um futuro de esperança.
                <br /> <br />
                Para nós, isso significa que em Cristo sempre há a chance de um
                novo começo, de ter a vida renovada pela Sua graça. O que você
                vai encontrar aqui? Ao nos visitar, você não encontrará apenas
                um prédio, mas um ambiente vibrante e alegre.
              </p>
              <br />
              <p>
                Somos pessoas reais, com histórias diferentes, que se reúnem
                para celebrar, aprender da Bíblia, orar uns pelos outros e
                construir amizades verdadeiras. Nossos cultos são pensados para
                inspirar sua semana e fortalecer sua conexão com Deus.
              </p>
              <br />
              <p>
                Convidamos você a fazer parte desta história. Venha nos conhecer
                e descobrir um lugar para chamar de sua casa espiritual.
              </p>
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col justify-center items-center">
            <Link href={"/pages/whereLocalization"}>
              <Button className="w-[200px] h-[60px]  mt-10 rounded-full">
                Ver localização
                <MapPin />
              </Button>
            </Link>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
