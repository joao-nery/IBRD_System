import {
  SiFacebook,
  SiInstagram,
  SiWhatsapp,
} from "@icons-pack/react-simple-icons";
import Image from "next/image";

export function FooterComponent() {
  return (
    <footer className="bg-[#100F0F] h-full text-white py-5 px-10">
      <section className="flex justify-between pt-10">
        <div>
          <Image
            src={"/IBRDN.png"}
            width={1000}
            height={0}
            alt="Logo Image"
            className="w-[150px] mr-13"
          />
          <div className=" text-[11px] w-[200px] flex flex-col mt-5">
            <p>
              Igreja Batista Renovo de Davi. Um lugar para pertencer, crescer e
              encontrar propósito.
            </p>
          </div>

          <div className="flex gap-2 mt-10">
            <SiFacebook />
            <SiInstagram />
            <SiWhatsapp />
          </div>
        </div>
      </section>
      <p className="text-center pt-20 text-xs ">
        Desenvolvido por Nery Enterprises - {new Date().getFullYear()}
      </p>
    </footer>
  );
}
