import { Button } from "@/components/ui/button";
import { MapPinPen } from "lucide-react";
import Link from "next/link";

export function SecondaryContent() {
  return (
    <div
      className="
      w-[350px] md:w-[800px] lg:w-[800px]
    flex flex-col justify-center items-center text-white">
      <h3
        className="
      
      text-[16px] text-center md:text-xl lg:text-2xl mt-5 xl:text-3xl">
        <span className="font-extrabold">Cultos</span>: Domingo 09h e 19h -
        Quarta-Feira 20:00h
      </h3>
      <Link href={"/pages/localization"} className="mt-5">
        <Button
          variant={"secondary"}
          className="rounded-full bg-[#8514FF] shadow-xl text-white mt-10 w-[240px] py-8 text-md lg:w-[290px] lg:h-[80px] lg:text-xl xl:w-[300px] xl:h-[70px] xl:text-xl font-extrabold cursor-pointer">
          Planeje Sua Visita
          <MapPinPen />
        </Button>
      </Link>
    </div>
  );
}
