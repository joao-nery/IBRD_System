import {
  SiFacebook,
  SiInstagram,
  SiWhatsapp,
} from "@icons-pack/react-simple-icons";
import Image from "next/image";

export function FooterComponent() {
  return (
    <footer className="bg-[#1B0D2A] text-white flex justify-between py-15 px-20">
      <div>
        <Image src={"/IBRDN.png"} width={200} height={0} alt="Logo Image" />
        <div className="pl-4 mt-5">
          <p>
            <span className="font-bold">Endereço:</span> Rua Dois, 417 - Parque
            das Acacias, Betim/MG{" "}
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
      <div className="flex flex-col gap-5 mt-10">
        <SiFacebook />
        <SiInstagram />
        <SiWhatsapp />
      </div>
    </footer>
  );
}
