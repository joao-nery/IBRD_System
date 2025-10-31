import { Button } from "@/components/ui/button";
import Image from "next/image";

export function PrayRequest() {
  return (
    <section className="mb-80 my-40 flex flex-col justify-center items-center">
      <div className=" w-[350px] h-[400px] text-center">
        <Image
          src={"/Rectangle 45.png"}
          width={1000}
          height={0}
          alt=""
          className="w-[400px] h-[400px]"
        />

        <div className="bg-black rounded-3xl opacity-65 w-[350px] h-[400px] relative bottom-100"></div>

        <div className="text-white relative bottom-180 px-6">
          <h1 className="text-2xl font-bold">Deixe-nos Orar por Você</h1>
          <p className="text-xs mt-5">
            Acreditamos no poder de uma comunidade que ora unida. Se você está
            enfrentando um desafio, celebrando uma vitória ou carregando um peso
            no coração, saiba que não precisa fazer isso sozinho. Nossa equipe
            de oração está pronta para apresentar sua causa a Deus com fé,
            carinho e total discrição.
          </p>

          <Button className="mt-10 bg-[#8514FF] py-8 px-10 rounded-full">
            Fazer um Pedido de Oração
          </Button>
        </div>
      </div>
    </section>
  );
}
