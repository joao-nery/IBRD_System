import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Image from "next/image";

export function CardPrincipal() {
  return (
    <section className="h-[1400px] flex flex-col justify-center items-center">
      <Card className="bg-transparent border-0 lg:hidden text-white w-[300px] md:w-[350px]">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Sejam Bem-Vindos!</CardTitle>
        </CardHeader>
        <div className="w-full flex justify-center">
          <Image
            src={"/Rectangle 24.png"}
            width={1000}
            height={0}
            alt="Pastor Image"
            className="w-[250px] md:w-[280px]"
          />
        </div>

        <CardContent className="flex flex-col justify-center">
          <p className="text-[13px] text-left">
            Olá! Somos a família{" "}
            <span className="font-bold">Igreja Batista Renovo de Davi</span> e
            estamos muito felizes por você estar aqui. Nosso maior desejo é que
            você se sinta em casa e encontre um lugar de acolhimento e
            esperança. Esperamos te ver em breve!" - Assinado,{" "}
            <span className="font-bold">Pastor Mateus Nery</span>
          </p>
          <Button className="mt-10 bg-[#8514FF] py-7 rounded-2xl font-bold">
            Conheça nossa história
          </Button>
        </CardContent>
      </Card>
    </section>
  );
}
