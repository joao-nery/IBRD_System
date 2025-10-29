import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { ChevronDown, MenuIcon } from "lucide-react";
import Link from "next/link";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";

export function NavbarComponent() {
  return (
    <>
      {/* Mobile */}
      <nav className="bg-[#15131B] h-max py-3 rounded-bl-3xl rounded-br-3xl shadow-2xl sticky top-0">
        <div className="flex px-5">
          <Sheet>
            <SheetTrigger>
              <MenuIcon color="white" />
            </SheetTrigger>
            <SheetContent className="bg-[#15131B] border-none text-white">
              <SheetHeader className="bg-black rounded-bl-3xl rounded-br-3xl">
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
                        <div className="flex flex-col gap-3 p-2 text-[14px] text-gray-200">
                          <Link href={"/pages/whoWeAre"}>- Quem Somos</Link>
                          <Link href={"/pages/vision"}>- Visão</Link>
                        </div>
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
                        <div className="flex flex-col gap-3 p-2 text-[14px] text-gray-200">
                          <Link href={"/pages/cell"}>- Células</Link>
                          <Link href={"/pages/vision"}>- Cultos</Link>
                        </div>
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

      {/* Desktop */}
      <nav></nav>
    </>
  );
}
