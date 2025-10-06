import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function WhoWeArePaeg() {
  return (
    <div className="flex flex-col py-15 mt-5 lg:mt-40 items-center gap-10">
      <div className="flex flex-col gap-5 items-center">
        <Image
          src={"/logo.jpg"}
          width={100}
          height={40}
          alt="Image Logo"
          className="rounded-full"
        />
        <h1 className="text-4xl font-bold">Quem Somos?</h1>
      </div>

      <p className="w-3/4 lg:w-1/2">
        Bem-vindo à Igreja Batista Renovo de Davi! Somos uma comunidade cristã
        que, há mais de uma década, tem sido um ponto de encontro para famílias
        e amigos que desejam crescer na fé e viver em comunhão. Nascemos do
        desejo de criar um espaço de acolhimento e esperança em Betim, e hoje,
        somos uma família que continua a crescer, unida pelo amor a Jesus
        Cristo.
        <br /> <br />
        O que significa Renovo de Davi? Nosso nome é uma expressão de nossa fé.
        Ele vem de uma promessa bíblica que aponta para Jesus como o Renovo,
        aquele que traz uma nova aliança, restauração e um futuro de esperança.
        Para nós, isso significa que em Cristo sempre há a chance de um novo
        começo, de ter a vida renovada pela Sua graça. O que você vai encontrar
        aqui? Ao nos visitar, você não encontrará apenas um prédio, mas um
        ambiente vibrante e alegre.
        <br /> <br />
        Somos pessoas reais, com histórias diferentes, que se reúnem para
        celebrar, aprender da Bíblia, orar uns pelos outros e construir amizades
        verdadeiras. Nossos cultos são pensados para inspirar sua semana e
        fortalecer sua conexão com Deus.
        <br /> <br />
        Convidamos você a fazer parte desta história. Venha nos conhecer e
        descobrir um lugar para chamar de sua casa espiritual.
      </p>

      <Link href={"/pages/whereLocalization"}>
        <Button className="px-15 py-8">Ver localização</Button>
      </Link>
    </div>
  );
}
