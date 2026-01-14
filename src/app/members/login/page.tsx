"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Loader2,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";

// Componentes Shadcn
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

// --- SCHEMA DE VALIDAÇÃO ---
const loginSchema = z.object({
  email: z.string().email({ message: "Por favor, insira um e-mail válido." }),
  password: z.string().min(1, { message: "A senha é obrigatória." }),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export default function MembersLoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(data: LoginFormValues) {
    setIsLoading(true);
    // Simula API
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("Dados:", data);
    setIsLoading(false);
  }

  return (
    <div className="min-h-screen w-full grid lg:grid-cols-2 bg-zinc-50 dark:bg-zinc-950 overflow-hidden">
      {/* --- LADO ESQUERDO: IMAGEM IMERSIVA (Desktop) --- */}
      {/* Correção de Bug: Usamos 'h-full' e 'relative' para travar a imagem no grid */}
      <div className="hidden lg:block relative h-full w-full bg-zinc-900">
        <Image
          src="https://images.unsplash.com/photo-1478147427282-58a87a120781?q=80&w=2670&auto=format&fit=crop"
          alt="Louvor e Adoração"
          fill
          className="object-cover opacity-90"
          priority
        />

        {/* Overlay Gradiente Moderno (Fade suave de baixo para cima) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

        {/* Overlay de Textura (Opcional, dá um toque premium de 'filme') */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay" />

        {/* Conteúdo Sobreposto */}
        <div className="absolute inset-0 flex flex-col justify-between p-16 z-20">
          {/* Marca no Topo */}
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-white/20 shadow-lg">
              <Image src="/logo.jpg" alt="Logo" fill className="object-cover" />
            </div>
            <span className="font-bold text-xl tracking-tight text-white drop-shadow-md">
              IBRD System
            </span>
          </div>

          {/* Texto de Impacto na Base */}
          <div className="space-y-4 max-w-lg animate-in slide-in-from-left-8 fade-in duration-1000">
            <h1 className="text-5xl font-bold leading-tight text-white drop-shadow-lg">
              Conectados em <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 to-zinc-500">
                um só propósito.
              </span>
            </h1>
            <p className="text-zinc-300 text-lg leading-relaxed font-medium text-balance drop-shadow-md">
              Acesse a plataforma exclusiva para gestão ministerial, escalas e
              comunhão da Igreja Batista Renovo de Davi.
            </p>
          </div>
        </div>
      </div>

      {/* --- LADO DIREITO: FORMULÁRIO (Com Aurora Background) --- */}
      <div className="relative h-full w-full flex items-center justify-center p-6 sm:p-12">
        {/* BACKGROUND EFFECT (Aurora Blur - UI 2026) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-zinc-200/50 via-zinc-300/30 to-transparent dark:from-zinc-800/50 dark:via-zinc-900/30 rounded-full blur-[100px] pointer-events-none -z-10" />

        {/* Botão Voltar */}
        <Link
          href="/"
          className="absolute top-8 left-8 sm:top-12 sm:left-12 flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-black dark:hover:text-white transition-colors group">
          <div className="p-2 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm group-hover:-translate-x-1 transition-transform">
            <ArrowLeft size={16} />
          </div>
          <span className="hidden sm:inline">Voltar ao site</span>
        </Link>

        <div className="w-full max-w-[420px] space-y-8">
          {/* Cabeçalho do Form */}
          <div className="text-center lg:text-left space-y-2">
            <div className="lg:hidden flex justify-center mb-6">
              <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-zinc-100 shadow-xl">
                <Image
                  src="/logo.jpg"
                  alt="Logo"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
              Bem-vindo de volta
            </h2>
            <p className="text-zinc-500 dark:text-zinc-400 text-balance">
              Insira suas credenciais para acessar o painel administrativo.
            </p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-zinc-900 dark:text-zinc-100 font-semibold">
                      E-mail Corporativo
                    </FormLabel>
                    <FormControl>
                      <div className="relative group">
                        <Mail className="absolute left-3 top-3 h-5 w-5 text-zinc-400 group-focus-within:text-black dark:group-focus-within:text-white transition-colors" />
                        <Input
                          placeholder="nome@ibrd.com"
                          {...field}
                          className="pl-10 h-12 bg-white/80 dark:bg-zinc-900/50 border-zinc-200 dark:border-zinc-800 focus-visible:ring-black dark:focus-visible:ring-white transition-all shadow-sm"
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center justify-between">
                      <FormLabel className="text-zinc-900 dark:text-zinc-100 font-semibold">
                        Senha
                      </FormLabel>
                      <Link
                        href="#"
                        className="text-xs font-semibold text-zinc-500 hover:text-black dark:hover:text-white transition-colors">
                        Esqueceu?
                      </Link>
                    </div>
                    <FormControl>
                      <div className="relative group">
                        <Lock className="absolute left-3 top-3 h-5 w-5 text-zinc-400 group-focus-within:text-black dark:group-focus-within:text-white transition-colors" />
                        <Input
                          type={showPassword ? "text" : "password"}
                          placeholder="••••••••"
                          {...field}
                          className="pl-10 pr-10 h-12 bg-white/80 dark:bg-zinc-900/50 border-zinc-200 dark:border-zinc-800 focus-visible:ring-black dark:focus-visible:ring-white transition-all shadow-sm"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-3 text-zinc-400 hover:text-black dark:hover:text-white transition-colors p-0.5 rounded-md">
                          {showPassword ? (
                            <EyeOff size={18} />
                          ) : (
                            <Eye size={18} />
                          )}
                        </button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full h-12 rounded-xl font-bold text-base bg-gradient-to-r from-zinc-900 via-black to-zinc-900 text-white hover:from-black hover:to-black shadow-lg hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300 border-none relative overflow-hidden group">
                {/* Efeito de brilho ao passar o mouse */}
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />

                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <span>Autenticando...</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <span>Acessar Portal</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                )}
              </Button>
            </form>
          </Form>

          <p className="text-center text-sm text-zinc-500 dark:text-zinc-400">
            Problemas com o acesso?{" "}
            <Link
              href="/contacts"
              className="font-bold text-zinc-900 dark:text-white hover:underline underline-offset-4">
              Contate o suporte
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
