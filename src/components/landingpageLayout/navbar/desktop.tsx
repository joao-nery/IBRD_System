import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function NavbarDesktopComponent() {
  return (
    <nav className="hidden lg:flex bg-[#15131B] rounded-bl-4xl rounded-br-4xl py-3 px-10 text-white sticky top-0 shadow-2xl">
      <Link href={"/"}>
        <Image
          src={"/IBRDN.png"}
          width={1100}
          height={0}
          alt="Logo Image"
          className="w-[200px] xl:w-[200px]"
        />
      </Link>

      <div className="flex list-none justify-center-safe mr-10 gap-8 items-center w-full text-[14px] xl:text-[14px]">
        <ul className="flex justify-center items-center   *:cursor-pointer">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex gap-2 hover:text-gray-300  cursor-pointer items-center">
              <p>Sobre nós</p>
              <ChevronDown size={20} />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Opções:</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <ul className="text-[14px] flex flex-col gap-4">
                  <li>
                    <Link href={"/pages/whoWeAre"}>Quem Somos</Link>
                  </li>
                  <li>
                    <Link href={"/pages/vision"}>Visão</Link>
                  </li>
                </ul>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </ul>

        <ul className="flex justify-center items-center">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex gap-2 items-center hover:text-gray-300  cursor-pointer">
              <p>Agenda</p>
              <ChevronDown size={20} />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Opções:</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <ul className="text-[14px] flex flex-col gap-4  *:cursor-pointer">
                  <li>
                    <Link href={"/pages/cell"}>Células</Link>
                  </li>
                  <li>
                    <Link href={"/pages/vision"}>Cultos</Link>
                  </li>
                </ul>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </ul>

        <li>
          <Link href={"/pages/contribute"} className="hover:text-gray-300">
            Contribua
          </Link>
        </li>
        <li>
          <Link href={"/pages/learn"} className="hover:text-gray-300">
            Ensino
          </Link>
        </li>
        <li>
          <Link href={"/pages/contats"} className="hover:text-gray-300">
            Contato
          </Link>
        </li>
      </div>
    </nav>
  );
}
