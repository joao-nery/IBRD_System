import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export default function VisionPage() {
  return (
    <div className="flex flex-col h-[2000px] mt-30 items-center">
      <Image
        src={"/logo.jpg"}
        width={1000}
        height={0}
        className="rounded-full w-[80px] lg:w-[120px]"
        alt="Localization image"
      />

      <section className="w-[350px] md:w-[600px] lg:w-[800px] text-white ">
        <h1 className="text-2xl mt-10 md:text-4xl text-center font-bold">
          Nosso Propósito: Visão, Missão e Valores
        </h1>
        <p className="mt-15 md:text-xl font-light text-center">
          Somos uma igreja guiada por um propósito claro, com o objetivo de
          glorificar a Deus e abençoar vidas. Tudo o que fazemos é fundamentado
          nos princípios da Palavra de Deus, que é a nossa bússola.
        </p>
        <Card className="mt-20 py-20 w-full">
          <CardHeader className="mt-5">
            <CardTitle className="text-2xl md:text-4xl text-center">
              Nossa Visão
            </CardTitle>
            <CardDescription className="mt-5 md:text-[16px] text-center">
              {" "}
              Ser uma igreja relevante em nossa cidade, reconhecida como um
              lugar de renovo espiritual, transformação de vidas e adoração
              sincera a Deus, onde cada pessoa se sinta amada e encontre seu
              propósito em Cristo. Nossa Missão Nossa missão é colocar nossa
              visão em prática através de quatro pilares essenciais:
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="flex flex-col text-left gap-5 text-[14px] md:text-[16px] xl:text-lg list-disc *:ml-7">
              <li className="mt-5">
                <span className="font-bold">Adorar a Deus:</span> Celebrar a
                grandeza de Deus com alegria e sinceridade em nossos cultos e em
                nosso viver diário.
              </li>
              <li>
                {" "}
                <span className="font-bold">Anunciar a Esperança:</span>{" "}
                Compartilhar a mensagem transformadora do Evangelho de Jesus
                Cristo, que é a fonte de toda esperança e salvação.
              </li>
              <li>
                <span className="font-bold">Cuidar de Pessoas:</span> Edificar e
                fortalecer os membros na fé, promovendo o crescimento espiritual
                através do estudo da Bíblia, do discipulado e da comunhão.
              </li>
              <li>
                {" "}
                <span className="font-bold">Servir à Comunidade:</span>{" "}
                Demonstrar o amor de Cristo de forma prática, servindo às
                necessidades das pessoas ao nosso redor e sendo uma influência
                positiva na sociedade. Nossos Valores A Bíblia como
              </li>
              <li>
                {" "}
                <span className="font-bold">Autoridade:</span> Cremos que a
                Palavra de Deus é a verdade inabalável e nosso único guia de fé
                e conduta. Oração como Prioridade: Valorizamos a comunicação
                constante com Deus como a base de nossa vida pessoal e
                comunitária.
              </li>
              <li>
                <span className="font-bold">Comunhão como Família:</span>{" "}
                Acreditamos na importância de vivermos unidos, apoiando,
                encorajando e cuidando uns dos outros. Amor Incondicional:
                Buscamos amar e acolher todas as pessoas, sem distinção,
                refletindo a graça de Deus.
              </li>
              <li>
                <span className="font-bold">Excelência para Deus:</span>{" "}
                Empenhamo-nos em fazer o nosso melhor em tudo, como um ato de
                adoração a Deus.
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
