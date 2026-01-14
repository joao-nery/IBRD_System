import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Send,
  ArrowRight,
  Instagram,
  Globe,
} from "lucide-react";
import Link from "next/link";

export default function ContactsPage() {
  return (
    <div className="relative pt-32 pb-24 min-h-screen bg-zinc-50 dark:bg-zinc-950 overflow-hidden">
      {/* --- BACKGROUND FX (Aurora Blur) --- */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[600px] bg-gradient-to-b from-zinc-200/50 via-zinc-100/20 to-transparent dark:from-zinc-900/50 dark:via-zinc-900/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* --- HEADER --- */}
      <section className="px-6 max-w-4xl mx-auto text-center space-y-8 mb-20 fade-in-up">
        <Badge
          variant="secondary"
          className="px-4 py-1.5 text-sm rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 font-medium shadow-sm">
          Estamos à disposição
        </Badge>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-zinc-900 dark:text-white">
          Vamos conversar?
        </h1>
        <p className="text-xl text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
          Seja para um pedido de oração, uma dúvida sobre os cultos ou apenas
          para dizer olá. Nossa equipe está pronta para te ouvir.
        </p>
      </section>

      <div className="px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          {/* --- COLUNA ESQUERDA: Bento Grid de Contatos (lg:col-span-5) --- */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Bloco 1: Canais Diretos (Grid 2 colunas) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* WhatsApp Card */}
              <Link
                href="https://wa.me/553199999999"
                target="_blank"
                className="group">
                <Card className="h-full bg-white dark:bg-zinc-900/50 border-zinc-200 dark:border-zinc-800 hover:border-green-500/50 hover:shadow-lg hover:shadow-green-500/10 transition-all duration-300">
                  <CardContent className="p-6 flex flex-col items-start justify-between h-full gap-4">
                    <div className="p-3 rounded-2xl bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 group-hover:scale-110 transition-transform">
                      <MessageCircle size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-zinc-900 dark:text-white text-lg">
                        WhatsApp
                      </h3>
                      <p className="text-zinc-500 dark:text-zinc-400 text-sm mt-1">
                        Resposta rápida
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </Link>

              {/* Email Card */}
              <Link href="mailto:contato@ibrd.com" className="group">
                <Card className="h-full bg-white dark:bg-zinc-900/50 border-zinc-200 dark:border-zinc-800 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300">
                  <CardContent className="p-6 flex flex-col items-start justify-between h-full gap-4">
                    <div className="p-3 rounded-2xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-zinc-900 dark:text-white text-lg">
                        E-mail
                      </h3>
                      <p className="text-zinc-500 dark:text-zinc-400 text-sm mt-1">
                        Parcerias e dúvidas
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>

            {/* Bloco 2: Card de Visita (Grande) */}
            <Card className="flex-1 bg-zinc-900 text-white dark:bg-white dark:text-black border-none overflow-hidden relative group">
              {/* Texture Overlay */}
              <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />

              <CardContent className="p-8 flex flex-col justify-between h-full relative z-10 gap-8">
                <div>
                  <Badge
                    variant="outline"
                    className="border-white/20 text-white dark:border-black/20 dark:text-black mb-4">
                    Sede Principal
                  </Badge>
                  <h3 className="text-2xl font-bold mb-2">Venha nos visitar</h3>
                  <p className="text-zinc-400 dark:text-zinc-600 leading-relaxed">
                    Rua Dois, 417 - Parque das Acácias
                    <br />
                    Betim, Minas Gerais
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-8 h-8 rounded-full bg-white/10 dark:bg-black/10 flex items-center justify-center">
                      <Clock size={14} />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-bold">Domingo</span>
                      <span className="text-zinc-400 dark:text-zinc-600">
                        19:00 - Celebração
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-8 h-8 rounded-full bg-white/10 dark:bg-black/10 flex items-center justify-center">
                      <Clock size={14} />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-bold">Quarta-feira</span>
                      <span className="text-zinc-400 dark:text-zinc-600">
                        19:30 - Doutrina
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Bloco 3: Socials */}
            <div className="flex gap-3">
              <Button
                variant="outline"
                className="flex-1 h-12 bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800">
                <Instagram size={18} className="mr-2" /> Instagram
              </Button>
              <Button
                variant="outline"
                className="flex-1 h-12 bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800">
                <Globe size={18} className="mr-2" /> Facebook
              </Button>
            </div>
          </div>

          {/* --- COLUNA DIREITA: Formulário (lg:col-span-7) --- */}
          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-zinc-900/80 backdrop-blur-sm p-8 md:p-10 rounded-[2rem] border border-zinc-200 dark:border-zinc-800 shadow-2xl shadow-zinc-200/50 dark:shadow-none h-full flex flex-col justify-center">
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-zinc-900 dark:text-white mb-3">
                  Envie uma mensagem
                </h3>
                <p className="text-zinc-500 dark:text-zinc-400">
                  Preencha os campos abaixo. Geralmente respondemos em até 24
                  horas.
                </p>
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 ml-1">
                      Seu Nome
                    </label>
                    <Input
                      id="name"
                      placeholder="Como podemos te chamar?"
                      className="h-12 bg-zinc-50 dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800 focus-visible:ring-zinc-900 rounded-xl"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="phone"
                      className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 ml-1">
                      WhatsApp / Telefone
                    </label>
                    <Input
                      id="phone"
                      placeholder="(31) 99999-9999"
                      className="h-12 bg-zinc-50 dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800 focus-visible:ring-zinc-900 rounded-xl"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 ml-1">
                    E-mail
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    className="h-12 bg-zinc-50 dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800 focus-visible:ring-zinc-900 rounded-xl"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 ml-1">
                    Mensagem
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Conte-nos o que você precisa..."
                    className="min-h-[160px] bg-zinc-50 dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800 focus-visible:ring-zinc-900 rounded-xl resize-none p-4"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full h-14 text-base font-bold rounded-xl bg-zinc-900 text-white hover:bg-black dark:bg-white dark:text-black dark:hover:bg-zinc-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
                  Enviar Mensagem <Send size={18} className="ml-2" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
