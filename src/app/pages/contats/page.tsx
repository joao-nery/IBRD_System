"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { SiInstagram, SiWhatsapp } from "@icons-pack/react-simple-icons";
import Link from "next/link";
import { useForm } from "react-hook-form";
import z from "zod";

const formSchema = z.object({
  name: z.string().min(2, { error: "Precisa ter no minimo 2 caracteres" }),
  email: z.email({ error: "E-mail inválido" }),
  phone: z.string().min(11, { error: "Telefone inválido" }),
  message: z.string().min(5, { error: "Precisar ter no minimo 5 caracteres" }),
});

type formTypes = z.infer<typeof formSchema>;

export default function ContatsPage() {
  const form = useForm<formTypes>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      message: "",
      name: "",
      phone: "",
    },
  });

  async function onSubmit(values: formTypes) {
    console.log(values);
  }

  return (
    <div className="flex flex-col mt-20 items-center">
      <h1 className="text-4xl font-bold">Nossos Contatos</h1>

      <section className="mt-10 flex ">
        <div className="border-1 p-10 w-[500px] shadow-xl rounded-2xl">
          <h2 className="text-2xl font-semibold text-center">
            Contate-nos - Fale com a gente
          </h2>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="mt-10 flex flex-col gap-5 pb-5">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome:</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        className="py-6"
                        {...field}
                        placeholder="Digite seu nome"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>E-mail:</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        className="py-6"
                        placeholder="example@example.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Telefone:</FormLabel>
                    <FormControl>
                      <Input
                        type="tel"
                        className="py-6"
                        placeholder="(00) 0 0000-0000"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mensagem:</FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        placeholder="Digite sua mensagem..."
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="py-8">
                Enviar
              </Button>

              <div className="flex gap-2">
                <Link
                  href={"https://www.instagram.com/ibrd_oficial/"}
                  target="_blank">
                  <SiInstagram size={25} className="hover:text-gray-400" />
                </Link>
                <Link
                  href={
                    "https://www.whatsapp.com/channel/0029VaabZQW6buMF8knzA02K"
                  }
                  target="_blank">
                  <SiWhatsapp size={25} className="hover:text-gray-400" />
                </Link>
              </div>
            </form>
          </Form>
        </div>
      </section>
    </div>
  );
}
