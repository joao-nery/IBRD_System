// import Autoplay from "embla-carousel-autoplay";
// import { useRef } from "react";

import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

export function TitleHeroComponent() {
  // const plugin = useRef(
  //   Autoplay({
  //     delay: 5000,
  //     stopOnInteraction: true,
  //   })
  // );

  return (
    <div className="h-screen bg-gradient-to-tr to-[#601C25] from-[#5530AA]">
      <section className="text-white flex flex-col pb-10 h-full gap-5 font-light justify-center items-center">
        <Image
          src={"/IBRDN.png"}
          width={1100}
          height={0}
          alt="Logo Image"
          className="w-[250px] md:w-[350px] xl:w-[400px]"
        />
        <div className="text-center flex flex-col gap-2 w-[350px] md:w-[700px] xl:w-[1200px]">
          <h1 className="text-xl md:text-4xl xl:text-5xl">
            Seja bem-vindo á{" "}
            <span className="font-extrabold">Renovo de Davi</span>
          </h1>
          <h2 className="text-lg md:text-3xl xl:text-4xl">
            Onde as diferenças se <span className="font-extrabold">unem</span>{" "}
            por um <span className="font-extrabold">propósito eterno</span>.
          </h2>
        </div>
        <hr className="w-[400px] md:w-[700px] xl:w-[1100px]" />
        <h3 className="text-md md:text-2xl xl:text-2xl">
          <span className="font-extrabold">Cultos</span>: Domingo 10h e 19h -
          Quinta-Feira 19:30h
        </h3>
        <Link href={"/pages/localization"}>
          <Button
            variant={"secondary"}
            className="rounded-full text-[#5530AA] mt-10 px-10 py-8 text-lg  xl:w-[300px] xl:h-[70px] xl:text-xl font-extrabold cursor-pointer">
            Planeje Sua Visita
          </Button>
        </Link>
      </section>
    </div>
  );
}
