"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import ThemeToggle from "./theme-toggle";
import {
  User,
  Menu,
  Home,
  Info,
  Calendar,
  Phone,
  ChevronRight,
  Instagram,
  MessageCircle,
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "../ui/sheet";

export default function Header() {
  // Itens do menu com Ícones para UX Mobile rica
  const menuItems = [
    { name: "Início", href: "/", icon: Home },
    { name: "Sobre", href: "/about", icon: Info },
    { name: "Agenda", href: "/schedule", icon: Calendar },
    { name: "Ministérios", href: "/ministers", icon: Calendar },
    { name: "Contato", href: "/contacts", icon: Phone },
  ];

  // Classes comuns para o botão preto gradiente (para garantir consistência)
  const blackGradientBtnClasses =
    "bg-gradient-to-r from-zinc-900 via-black to-zinc-900 text-white hover:from-black hover:to-black shadow-md hover:shadow-xl transition-all duration-300 border-none";

  return (
    <header className="fixed top-0 w-full z-50 bg-white border-b border-zinc-100 dark:bg-zinc-950/80 dark:backdrop-blur-xl dark:border-white/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* --- LOGO & NOME --- */}
        <div className="flex items-center gap-3">
          <div className="relative w-10 h-10 rounded-full overflow-hidden border border-zinc-200 dark:border-zinc-700 shadow-sm">
            <Link href={"/"}>
              <Image
                src="/logo.jpg"
                alt="Logo IBRD"
                fill
                className="object-cover"
              />
            </Link>
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-bold tracking-tight text-lg text-zinc-900 dark:text-white">
              IBRD
            </span>
            <span className="text-[10px] font-medium text-zinc-500 uppercase tracking-wider">
              Renovo
            </span>
          </div>
        </div>

        {/* --- MENU DESKTOP (Apenas md ou maior) --- */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-600 dark:text-zinc-400">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="hover:text-black dark:hover:text-white transition-colors relative group">
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black dark:bg-white transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* --- AÇÕES (Direita) --- */}
        <div className="flex items-center gap-3">
          {/* Botão Membros (Desktop Only) - PRETO GRADIENTE */}
          <div className="hidden md:block">
            <Link href="/members/login">
              <Button
                className={`rounded-full font-bold gap-2 hover:-translate-y-0.5 ${blackGradientBtnClasses}`}>
                <User size={16} />
                Área de Membros
              </Button>
            </Link>
          </div>

          {/* Divisor (Desktop Only) */}
          <div className="h-6 w-px bg-zinc-200 dark:bg-zinc-800 mx-1 hidden md:block" />

          {/* Toggle de Tema (Sempre visível) */}
          <ThemeToggle />

          {/* --- MENU MOBILE / SHEET (Desktop Hidden) --- */}
          <div className="md:hidden ml-1">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-zinc-400 md:hidden lg:hidden xl:hidden dark:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full">
                  <Menu size={24} strokeWidth={2.5} />
                </Button>
              </SheetTrigger>

              <SheetContent
                side="right"
                className="w-[85%] sm:w-[350px] bg-white dark:bg-zinc-950 border-l border-zinc-200 dark:border-zinc-800 p-0 flex flex-col">
                {/* Cabeçalho do Menu Mobile */}
                <SheetHeader className="p-6 border-b border-zinc-100 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/20">
                  <SheetTitle className="flex items-center gap-3">
                    <div className="relative w-9 h-9 rounded-full overflow-hidden border border-zinc-200 dark:border-zinc-700">
                      <Image
                        src="/logo.jpg"
                        alt="Logo"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="text-left">
                      <span className="block font-bold text-base text-zinc-900 dark:text-white leading-none">
                        Menu IBRD
                      </span>
                      <span className="text-xs text-zinc-500 font-normal">
                        Navegação Principal
                      </span>
                    </div>
                  </SheetTitle>
                </SheetHeader>

                {/* Corpo do Menu - Links Estilizados */}
                <div className="flex-1 overflow-y-auto py-6 px-4">
                  <nav className="flex flex-col gap-2">
                    {menuItems.map((item) => (
                      <SheetClose asChild key={item.name}>
                        <Link
                          href={item.href}
                          className="flex items-center justify-between p-4 rounded-xl text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-900 hover:text-black dark:hover:text-white transition-all group">
                          <div className="flex items-center gap-4">
                            <div className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 group-hover:bg-white dark:group-hover:bg-black transition-colors">
                              <item.icon size={20} />
                            </div>
                            <span className="font-semibold text-lg">
                              {item.name}
                            </span>
                          </div>
                          <ChevronRight
                            size={18}
                            className="text-zinc-300 dark:text-zinc-600 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors"
                          />
                        </Link>
                      </SheetClose>
                    ))}
                  </nav>
                </div>

                {/* Rodapé do Menu - Ações Fixas */}
                <div className="p-6 border-t border-zinc-100 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/20 space-y-4">
                  {/* Botão Principal Mobile - PRETO GRADIENTE */}
                  <SheetClose asChild>
                    <Link href="/members/login" className="w-full block">
                      <Button
                        className={`w-full rounded-xl font-bold text-base gap-2 h-12 ${blackGradientBtnClasses}`}>
                        <User size={18} />
                        Acessar Área de Membros
                      </Button>
                    </Link>
                  </SheetClose>

                  {/* Links Sociais Rápidos */}
                  <div className="flex justify-center gap-6 pt-2">
                    <a
                      href="#"
                      className="text-zinc-400 hover:text-pink-600 transition-colors p-2">
                      <Instagram size={22} />
                    </a>
                    <a
                      href="#"
                      className="text-zinc-400 hover:text-green-500 transition-colors p-2">
                      <MessageCircle size={22} />
                    </a>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
