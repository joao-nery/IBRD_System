import Image from "next/image";

export function MainContent() {
  return (
    <div
      className="
      w-[350px] md:w-[600px] lg:w-[800px] xl:w-[1000px]
      lg:mt-20
    flex flex-col justify-center text-white items-center">
      <Image
        src={"/IBRDN.png"}
        width={1100}
        height={0}
        alt="Logo Image"
        className="w-[300px] md:w-[350px] mb-6 xl:w-[400px]"
      />

      <div className="text-center flex flex-col gap-2 justify-center items-center">
        <h1
          className="
        text-xl text-center md:text-2xl lg:text-3xl xl:text-5xl">
          Seja bem-vindo á{" "}
          <span className="font-extrabold">Renovo de Davi</span>
        </h1>
        <h2
          className="
  
        text-[16px] text-center  md:text-lg lg:text-2xl xl:text-4xl">
          Onde as diferenças se <span className="font-extrabold">unem</span> por
          um <span className="font-extrabold">propósito eterno</span>.
        </h2>
      </div>

      <hr className="w-[350px] mt-8 md:w-[600px] xl:w-[1100px]" />
    </div>
  );
}
