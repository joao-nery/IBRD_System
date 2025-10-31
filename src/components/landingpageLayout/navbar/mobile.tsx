import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import { MenuIcon, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function NavbarMobileComponent() {
  return (
    <nav className="bg-[#15131B] lg:hidden h-max py-3 rounded-bl-3xl rounded-br-3xl shadow-2xl sticky top-0">
      <div className="flex px-5">
        <Sheet>
          <SheetTrigger>
            <MenuIcon color="white" />
          </SheetTrigger>
          <SheetContent className="bg-[#221f29] border-none text-white">
            <SheetHeader className="bg-[#100e15] rounded-bl-2xl shadow-2xl rounded-br-2xl">
              <Link href={"/"}>
                <div className="flex gap-2 items-center">
                  <Image
                    src={"/logo.jpg"}
                    width={1000}
                    height={0}
                    className="w-[40px] rounded-full"
                    alt="Logo Image"
                  />
                  <SheetTitle className="text-white">IBRD</SheetTitle>
                </div>
              </Link>
            </SheetHeader>

            <div className="mt-5">
              <ul className=" pl-5 flex flex-col gap-5">
                <li>
                  <Collapsible>
                    <CollapsibleTrigger className="flex gap-1">
                      <p>Sobre nós</p>
                      <ChevronDown />
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <ul className="list-disc p-2 text-[14px] text-neutral-300 ml-5 flex flex-col gap-4">
                        <li>
                          <Link href={"/pages/whoWeAre"}>Quem Somos</Link>
                        </li>
                        <li>
                          <Link href={"/pages/vision"}>Visão</Link>
                        </li>
                      </ul>
                    </CollapsibleContent>
                  </Collapsible>
                </li>
                <li>
                  <Collapsible>
                    <CollapsibleTrigger className="flex gap-1">
                      <p>Agenda</p>
                      <ChevronDown />
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <ul className="list-disc p-2 text-[14px] text-neutral-300 ml-5 flex flex-col gap-4">
                        <li>
                          <Link href={"/pages/cell"}>Células</Link>
                        </li>
                        <li>
                          <Link href={"/pages/vision"}>Cultos</Link>
                        </li>
                      </ul>
                    </CollapsibleContent>
                  </Collapsible>
                </li>

                <li>
                  <Link href={"/pages/contribute"}>Contribua</Link>
                </li>
                <li>
                  <Link href={"/#"}>Ensino</Link>
                </li>
                <li>
                  <Link href={"/pages/contact"}>Contato</Link>
                </li>
              </ul>
            </div>
          </SheetContent>
        </Sheet>
        <div className="w-full flex justify-center">
          <Link href={"/"}>
            <Image
              src={"/logo.jpg"}
              width={1000}
              height={0}
              className="w-[40px] rounded-full"
              alt="Logo Image"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
}
