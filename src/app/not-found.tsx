import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <div className="flex flex-col gap-5 justify-center items-center h-screen text-white">
        <h1>404</h1>
        <h1 className="text-4xl text-center">Página não encontrada.</h1>
        <Link href={"/"}>
          <Button>Voltar para home</Button>
        </Link>
      </div>
    </>
  );
}
