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
      <section className="text-white flex flex-col h-full gap-5 font-light justify-center items-center">
        <Image src={"/IBRDN.png"} width={400} height={0} alt="Logo Image" />
        <div className="text-center flex flex-col gap-3">
          <h1 className="text-5xl">
            Seja bem-vindo á{" "}
            <span className="font-extrabold">Renovo de Davi</span>
          </h1>
          <h2 className="text-4xl">
            Onde as diferenças se <span className="font-extrabold">unem</span>{" "}
            por um <span className="font-extrabold">propósito eterno</span>.
          </h2>
        </div>
        <hr className="w-[1100px]" />
        <h3 className="text-2xl">
          <span className="font-extrabold">Cultos</span>: Domingo 10h e 19h -
          Quinta-Feira 19:30h
        </h3>
        <Link href={"/#"}>
          <Button
            variant={"secondary"}
            className="rounded-full text-[#5530AA] mt-10 w-[300px] h-[70px] text-xl font-extrabold cursor-pointer">
            Planeje Sua Visita
          </Button>
        </Link>
      </section>
    </div>
  );
}
