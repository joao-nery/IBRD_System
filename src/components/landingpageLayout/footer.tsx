import {
  SiFacebook,
  SiInstagram,
  SiWhatsapp,
} from "@icons-pack/react-simple-icons";
import Image from "next/image";

export function FooterComponent() {
  return (
    <footer className="bg-[#1B0D2A] h-full text-white py-5 px-10">
      <section className="flex justify-between pt-10">
        <div>
          <Image
            src={"/IBRDN.png"}
            width={1000}
            height={0}
            alt="Logo Image"
            className="w-[170px]"
          />
          <div className="pl-4 text-[11px] flex flex-col gap-3 xl:gap-0 xl:text-xs mt-5">
            <p>
              <span className="font-bold">Endereço:</span> Rua Dois, 417 -
              Parque das Acacias, Betim/MG{" "}
            </p>
            <p>
              <span className="font-bold">Cultos:</span> Domingo 10h e 19:00 -
              Quinta-Feira 19:30
            </p>
            <p>
              <span className="font-bold">Email:</span> renovo@gmail.com
            </p>
          </div>
        </div>
        <div className="flex flex-col pl-4 xl:pl-0 gap-4 xl:gap-4 mt-10">
          <SiFacebook />
          <SiInstagram />
          <SiWhatsapp />
        </div>
      </section>
      <p className="text-center pt-10 text-xs ">
        Desenvolvido por Nery Enterprises - {new Date().getFullYear()}
      </p>
    </footer>
  );
}
