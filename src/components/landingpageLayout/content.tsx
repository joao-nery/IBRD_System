import Link from "next/link";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import Image from "next/image";

export function ContentComponent() {
  return (
    <div className="bg-[#110D14] h-[2000px] text-white flex justify-center items-center">
      <Card className="bg-transparent text-white border-0 w-[300px]">
        <div className="w-full flex justify-center">
          <Image
            src={"/Rectangle 24.png"}
            width={1000}
            height={0}
            alt="Pastor Image"
            className="w-[250px]"
          />
        </div>
        <CardHeader>
          <CardTitle className="text-xl">Seja Bem-Vindo</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            Olá! Somos a família Igreja Bastista Renovo de Davi e estamos muito
            felizes por você estar aqui. Nosso maior desejo é que você se sinta
            em casa e encontre um lugar de acolhimento e esperança. Esperamos te
            ver em breve!" - Assinado, Pastor Mateus Nery
          </p>

          <Button className="mt-10 bg-[#8514FF] py-7 font-bold">
            Conheça nossa história
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
