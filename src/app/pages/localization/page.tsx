import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Locate, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Localization() {
  return (
    <div className="h-[1000px] md:h-[1300px] lg:h-[1300px] xl:h-[1400px] text-white flex flex-col gap-5 justify-center items-center">
      <section className="flex flex-col justify-center items-center gap-5 mt-5 xl:hidden">
        <h1 className="text-3xl md:text-4xl -mt-30 md:-mt-100 lg:-mt-110 xl:-mt-20 font-bold">
          Onde Estamos?
        </h1>
        <Card className="w-[300px] md:w-[400px] xl:w-[600px]">
          <CardHeader className="text-center">
            <CardTitle className="text-xl">
              Igreja Batista Renovo de Davi
            </CardTitle>
            <CardDescription>Veja nossa localização!</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-2 ">
              <Image
                src={"/titlleHeroREal.jpeg"}
                width={1000}
                height={0}
                className="w-full rounded-xl"
                alt="Localization image "
              />
              <Link
                href={
                  "https://www.google.com.br/maps/place/Igreja+Batista+Renovo+de+Davi/@-19.9380541,-44.1274708,16z/data=!4m17!1m10!3m9!1s0xa6c159decf5269:0x9a1489b9bbd8a8bb!2sIgreja+Batista+Renovo+de+Davi!8m2!3d-19.9379985!4d-44.1274274!10e5!14m1!1BCgIgARICCAI!16s%2Fg%2F11j0d35xpz!3m5!1s0xa6c159decf5269:0x9a1489b9bbd8a8bb!8m2!3d-19.9379985!4d-44.1274274!16s%2Fg%2F11j0d35xpz?entry=ttu&g_ep=EgoyMDI1MTAwMS4wIKXMDSoASAFQAw%3D%3D"
                }
                target="_blank">
                <Button className="w-full py-6">
                  Link Google Maps
                  <MapPin />
                </Button>
              </Link>
            </div>

            <div className="text-xs">
              <p className="mt-5">
                <span className="font-bold">Endereço:</span> R. Dois, 417 -
                Parque das Acácias, Betim - MG,
              </p>
              <p>
                <span className="font-bold">Bairro:</span> Parque das Acácias
              </p>
              <p>
                <span className="font-bold">CEP:</span> 32675-545
              </p>
              <h2 className=" font-bold mt-3">Horarios</h2>
              <p>Quarta-Feira 19:30 Hrs</p>
              <p>Domingo 19:00 Hrs</p>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="xl:flex gap-10 w-[1200px] h-[700px] rounded-2xl shadow-2xl -mt-120 bg-white">
        <div className="flex flex-col w-[700px]  gap-2">
          <Image
            src={"/titlleHeroREal.jpeg"}
            width={1000}
            height={0}
            className="w-max rounded-2xl "
            alt="Localization image "
          />
        </div>

        <div className="text-center mt-30">
          <h1 className="text-2xl text-black pt-6 font-bold">
            Igreja Batista Renovo de Davi
          </h1>
          <p className="text-foreground">Veja nossa localização!</p>
          <Link
            href={
              "https://www.google.com.br/maps/place/Igreja+Batista+Renovo+de+Davi/@-19.9380541,-44.1274708,16z/data=!4m17!1m10!3m9!1s0xa6c159decf5269:0x9a1489b9bbd8a8bb!2sIgreja+Batista+Renovo+de+Davi!8m2!3d-19.9379985!4d-44.1274274!10e5!14m1!1BCgIgARICCAI!16s%2Fg%2F11j0d35xpz!3m5!1s0xa6c159decf5269:0x9a1489b9bbd8a8bb!8m2!3d-19.9379985!4d-44.1274274!16s%2Fg%2F11j0d35xpz?entry=ttu&g_ep=EgoyMDI1MTAwMS4wIKXMDSoASAFQAw%3D%3D"
            }
            target="_blank">
            <div className=" text-black text-left text-base w-[400px]">
              <p className="mt-5">
                <span className="font-bold">Endereço:</span> R. Dois, 417 -
                Parque das Acácias, Betim - MG,
              </p>
              <p>
                <span className="font-bold">Bairro:</span> Parque das Acácias
              </p>
              <p>
                <span className="font-bold">CEP:</span> 32675-545
              </p>
              <h2 className=" font-bold mt-3">Horarios</h2>
              <p>Quarta-Feira 19:30 Hrs</p>
              <p>Domingo 19:00 Hrs</p>
            </div>
            <Button className="w-full text-xl mt-10 py-8 rounded-full">
              Ver localização
              <MapPin />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
