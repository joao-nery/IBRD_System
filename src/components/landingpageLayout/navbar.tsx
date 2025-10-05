import Image from "next/image";
import Link from "next/link";
import { DM_Sans } from "next/font/google";
import { SiInstagram, SiWhatsapp } from "@icons-pack/react-simple-icons";

const dmsans = DM_Sans();

export function NavBarComponent() {
  return (
    <nav
      className={`${dmsans.className} text-white sticky top-0 z-100 flex justify-around items-center bg-neutral-800 p-1.5 shadow-xl`}>
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
          <h1 className="font-bold ">IBRD - Igreja Batista Renovo de Davi</h1>
        </Link>
      </div>

      <ul className="flex gap-5 mr-50 *:hover:text-gray-400 font-bold">
        <li className="">
          <Link href={"/"}>Página Inicial</Link>
        </li>
        <li className="">
          <Link href={"/pages/whoWeAre"}>Quem Somos</Link>
        </li>
        <li>
          <Link href={"/pages/vision"}>Visão</Link>
        </li>

        <li>
          <Link href={"/pages/contats"}>Contatos</Link>
        </li>
        <li>
          <Link href={"/pages/whereLocalization"}>Onde Estamos</Link>
        </li>
      </ul>
      <div className="flex gap-4">
        <Link href={"https://www.instagram.com/ibrd_oficial/"} target="_blank">
          <SiInstagram size={25} className="hover:text-gray-400" />
        </Link>
        <Link
          href={"https://www.whatsapp.com/channel/0029VaabZQW6buMF8knzA02K"}
          target="_blank">
          <SiWhatsapp size={25} className="hover:text-gray-400" />
        </Link>
      </div>
    </nav>
  );
}
