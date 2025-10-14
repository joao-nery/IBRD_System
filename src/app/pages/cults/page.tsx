import { Button } from "@/components/ui/button";
import { Cog } from "lucide-react";
import Link from "next/link";

export default function CultsPage() {
  return (
    <div className="flex h-screen flex-col justify-center items-center text-white">
      <div className="lg:w-[600px] md:w-[500px] w-[400px] h-[400px] flex flex-col items-center justify-center rounded-2xl ring-fuchsia-400 bg-white p-20">
        <div className="flex gap-4 items-center">
          <Cog size={100} color="black" />
          <h3 className="text-black text-lg lg:text-3xl font-bold">
            Tela em Contrusção aguarde!
          </h3>
        </div>
        <Link href={"/"}>
          <Button variant={"link"}>Voltar para tela inicial</Button>
        </Link>
      </div>
    </div>
  );
}
