import Image from "next/image";
import Link from "next/link";
import { Poppins } from "next/font/google";
import { SiInstagram, SiWhatsapp } from "@icons-pack/react-simple-icons";
import { ChevronDown, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const poppins = Poppins({ weight: "300", adjustFontFallback: true });

export function NavBarComponent() {
  return (
    <main className="sticky top-0 z-100">
      <nav
        className={`${poppins.className} py-1 hidden sticky top-0 rounded-bl-[30px] rounded-br-[30px]  lg:flex justify-center gap-[13%] items-center bg-white text-black p-1.5 shadow-xl`}>
        <div>
          <Link
            href={"/"}
            className="flex items-center gap-2 hover:text-gray-300 cursor-pointer">
            <Image
              src={"/logoSVG 2(1).png"}
              width={1000}
              height={0}
              className="w-[180px]"
              alt="Imagem Logo"
            />
          </Link>
        </div>
        <ul className="flex gap-10 mr-50 *:text-[#401969] lg:text-[14px] xl:text-md font-semibold">
          <li>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex gap-1 cursor-pointer ">
                Sobre Nós{" "}
                <ChevronDown className=" cursor-pointer rounded-full w-[20px] hover:bg-gray-200" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="z-100 px-5 py-5">
                <DropdownMenuLabel className="font-bold">
                  Sobre Nós
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link href={"/pages/whoWeAre"}>Quem Somos</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href={"/pages/vision"}>Nossa Visão</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </li>
          <li>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex gap-1">
                Agenda{" "}
                <ChevronDown className=" cursor-pointer rounded-full w-[20px] hover:bg-gray-200" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="z-100 px-5 py-5">
                <DropdownMenuLabel className="font-bold">
                  Agenda IBRD
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link href={"/pages/cell"}>Células</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href={"/pages/cults"}>Cultos</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </li>
          <li>
            <Link href={"/pages/contats"}>Contribua</Link>
          </li>
          <li>
            <Link href={"/pages/whereLocalization"}>Ensino</Link>
          </li>
          <li>
            <Link href={"/pages/whereLocalization"}>Contato</Link>
          </li>
        </ul>
      </nav>

      <nav className="lg:hidden bg-white shadow-xl p-3 rounded-bl-[20px] rounded-br-[20px]">
        <Sheet>
          <SheetTrigger className="flex items-center justify-center w-full">
            <Menu size={30} color="black" className="relative right-4/11" />

            <Image
              src={"/logo.jpg"}
              width={40}
              height={45}
              alt="Imagem Logo"
              className="rounded-full mr-3"
            />
          </SheetTrigger>
          <SheetContent side="left" className="w-[350px] pt-15">
            <SheetHeader>
              <SheetTitle>
                <div>
                  <Link
                    href={"/"}
                    className="flex items-center gap-2 hover:text-gray-300 cursor-pointer">
                    <Image
                      src={"/logo.jpg"}
                      width={40}
                      height={45}
                      alt="Imagem Logo"
                      className="rounded-full"
                    />
                    <h1 className="font-bold ">IBRD</h1>
                  </Link>
                </div>
              </SheetTitle>
            </SheetHeader>
            <ul className="flex flex-col gap-2 pl-5  ">
              <li>
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex gap-1">
                    Sobre Nós{" "}
                    <ChevronDown className=" cursor-pointer rounded-full" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="z-100 ">
                    <DropdownMenuLabel className="font-bold">
                      Sobre Nós
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <Link href={"/pages/whoWeAre"}>Quem Somos</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link href={"/pages/vision"}>Nossa Visão</Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </li>
              <li>
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex gap-1">
                    Agenda <ChevronDown />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="z-100">
                    <DropdownMenuLabel className="font-bold">
                      Agenda IBRD
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <Link href={"/pages/cell"}>Células</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link href={"/pages/cults"}>Cultos</Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </li>
              <li>
                <Link href={"/pages/contats"}>Contribua</Link>
              </li>
              <li>
                <Link href={"/pages/whereLocalization"}>Ensino</Link>
              </li>
              <li>
                <Link href={"/pages/whereLocalization"}>Contato</Link>
              </li>
            </ul>

            <SheetFooter>
              <div className="flex  gap-2">
                <Link
                  href={"https://www.instagram.com/ibrd_oficial/"}
                  target="_blank">
                  <SiInstagram size={25} className="text-gray-900" />
                </Link>
                <Link
                  href={
                    "https://www.whatsapp.com/channel/0029VaabZQW6buMF8knzA02K"
                  }
                  target="_blank">
                  <SiWhatsapp size={25} className="hover:text-gray-400" />
                </Link>
              </div>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </nav>
    </main>
  );
}
