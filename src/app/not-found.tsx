import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-zinc-50 dark:bg-zinc-950 overflow-hidden px-6">
      {/* --- BACKGROUND DECORATION --- */}
      {/* Um 'glow' sutil para dar vida ao fundo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-zinc-200 dark:bg-zinc-900 rounded-full blur-[100px] opacity-50 pointer-events-none" />

      <div className="relative z-10 text-center space-y-8 max-w-2xl mx-auto">
        {/* --- NÚMERO GIGANTE (Marca d'água) --- */}
        <h1 className="text-[150px] md:text-[200px] font-black leading-none text-zinc-200/50 dark:text-zinc-900/50 select-none tracking-tighter">
          404
        </h1>

        {/* --- CONTEÚDO --- */}
        <div className="-mt-12 md:-mt-20 space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 dark:text-white tracking-tight">
            Caminho não encontrado
          </h2>

          <p className="text-lg text-zinc-500 dark:text-zinc-400 max-w-lg mx-auto leading-relaxed">
            Parece que a página que você está procurando se perdeu ou foi
            movida. Não se preocupe, o caminho de volta é logo ali.
          </p>

          {/* --- AÇÕES --- */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            {/* Botão Principal: Ir para Home */}
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto rounded-full h-12 px-8 font-semibold bg-zinc-900 text-white hover:bg-black dark:bg-white dark:text-black dark:hover:bg-zinc-200 shadow-lg">
              <Link href="/">
                <Home className="mr-2 h-4 w-4" />
                Ir para o Início
              </Link>
            </Button>

            {/* Botão Secundário: Voltar (usando o histórico seria ideal, mas um link serve) */}
            <Button
              variant="outline"
              size="lg"
              asChild
              className="w-full sm:w-auto rounded-full h-12 px-8 border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-300">
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* --- FOOTER SIMPLIFICADO --- */}
      <div className="absolute bottom-10 text-xs text-zinc-400 dark:text-zinc-600 font-medium uppercase tracking-widest">
        IBRD • Error 404
      </div>
    </div>
  );
}
