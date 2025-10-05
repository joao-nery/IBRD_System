import Image from "next/image";
import Link from "next/link";

export default function WhereLocalization() {
  return (
    <div className="mt-15 flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold">Onde Estamos?</h1>

      <section className="flex flex-col lg:flex-row gap-10 mt-10">
        <Link
          href={
            "https://www.google.com.br/maps/place/Igreja+Batista+Renovo+de+Davi/@-19.9380541,-44.1274708,16z/data=!4m17!1m10!3m9!1s0xa6c159decf5269:0x9a1489b9bbd8a8bb!2sIgreja+Batista+Renovo+de+Davi!8m2!3d-19.9379985!4d-44.1274274!10e5!14m1!1BCgIgARICCAI!16s%2Fg%2F11j0d35xpz!3m5!1s0xa6c159decf5269:0x9a1489b9bbd8a8bb!8m2!3d-19.9379985!4d-44.1274274!16s%2Fg%2F11j0d35xpz?entry=ttu&g_ep=EgoyMDI1MTAwMS4wIKXMDSoASAFQAw%3D%3D"
          }
          target="_blank">
          <Image
            src={"/localization.jpeg"}
            width={400}
            height={0}
            className="rounded-2xl shadow-2xl hover:scale-105 transition-all"
            alt="Localization image"
          />
        </Link>

        <div>
          <h1 className="text-2xl text-left font-semibold">
            Igreja Batista Renovo de Davi
          </h1>
          <p className="mt-5">
            Endereço: R. Dois, 417 - Parque das Acácias, Betim - MG,
          </p>
          <p>Bairro: Parque das Acácias</p>
          <p>CEP: 32675-545</p>

          <h2 className="text-xl font-bold mt-10">Horarios</h2>
          <p>Quarta-Feira 19:30 Hrs</p>
          <p>Domingo 19:00 Hrs</p>
        </div>
      </section>
    </div>
  );
}
