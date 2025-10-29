import Image from "next/image";

export default function ContributePage() {
  return (
    <div className="h-screen flex justify-center  text-white">
      <section className="w-[370px] mt-20">
        <h1 className="text-center">
          Sua generosidade está transformando o mundo! O avanço do Reino de Deus
          em vários países, a restauração de familias e o socorro aos
          necessitados através da ação social da igreja, tem sido beneficiados
          com o seu fiel apoio financeiro
        </h1>
        <div>
          <Image
            src={"/santanderbank-icon 1.svg"}
            height={0}
            width={0}
            alt="Santander Icon"
            className="w-[50px]"
          />
        </div>
      </section>
    </div>
  );
}
