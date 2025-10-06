import Image from "next/image";

export default function VisionPage() {
  return (
    <div className="flex flex-col py-15 lg:mt-20 items-center">
      <Image
        src={"/logo.jpg"}
        width={100}
        height={0}
        className="rounded-full  hover:scale-105 transition-all"
        alt="Localization image"
      />

      <h1 className="text-2xl w-3/4 mt-10 lg:text-3xl text-center font-bold">
        Nosso Propósito: Visão, Missão e Valores
      </h1>
      <p className="mt-5 w-3/4 lg:w-1/2">
        Somos uma igreja guiada por um propósito claro, com o objetivo de
        glorificar a Deus e abençoar vidas. Tudo o que fazemos é fundamentado
        nos princípios da Palavra de Deus, que é a nossa bússola.
      </p>

      <h2 className="text-2xl font-bold mt-10">Nossa Visão</h2>

      <h2 className="w-3/4 lg:w-1/2 mt-5">
        {" "}
        Ser uma igreja relevante em nossa cidade, reconhecida como um lugar de
        renovo espiritual, transformação de vidas e adoração sincera a Deus,
        onde cada pessoa se sinta amada e encontre seu propósito em Cristo.
        Nossa Missão Nossa missão é colocar nossa visão em prática através de
        quatro pilares essenciais:
      </h2>
      <ul className="w-3/4 lg:w-1/2 list-disc *:ml-7">
        <li className="mt-5">
          <span className="font-bold">Adorar a Deus:</span> Celebrar a grandeza
          de Deus com alegria e sinceridade em nossos cultos e em nosso viver
          diário.
        </li>
        <li>
          {" "}
          <span className="font-bold">Anunciar a Esperança:</span> Compartilhar
          a mensagem transformadora do Evangelho de Jesus Cristo, que é a fonte
          de toda esperança e salvação.
        </li>
        <li>
          <span className="font-bold">Cuidar de Pessoas:</span> Edificar e
          fortalecer os membros na fé, promovendo o crescimento espiritual
          através do estudo da Bíblia, do discipulado e da comunhão.
        </li>
        <li>
          {" "}
          <span className="font-bold">Servir à Comunidade:</span> Demonstrar o
          amor de Cristo de forma prática, servindo às necessidades das pessoas
          ao nosso redor e sendo uma influência positiva na sociedade. Nossos
          Valores A Bíblia como
        </li>
        <li>
          {" "}
          <span className="font-bold">Autoridade:</span> Cremos que a Palavra de
          Deus é a verdade inabalável e nosso único guia de fé e conduta. Oração
          como Prioridade: Valorizamos a comunicação constante com Deus como a
          base de nossa vida pessoal e comunitária.
        </li>
        <li>
          <span className="font-bold">Comunhão como Família:</span> Acreditamos
          na importância de vivermos unidos, apoiando, encorajando e cuidando
          uns dos outros. Amor Incondicional: Buscamos amar e acolher todas as
          pessoas, sem distinção, refletindo a graça de Deus.
        </li>

        <li>
          <span className="font-bold">Excelência para Deus:</span> Empenhamo-nos
          em fazer o nosso melhor em tudo, como um ato de adoração a Deus.
        </li>
      </ul>
    </div>
  );
}
