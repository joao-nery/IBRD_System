import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function CellsPage() {
  const addressArray = [
    {
      title: "Celula Parque das Acácias",
      neighborhood: "Parque das Acácias",
      address: "R. Quatro 231, parque das acacias, Betim",
    },
    {
      title: "Celula Vila Cristina",
      neighborhood: "Vila Cristina",
      address: "R. Tupis - Vila Cristina",
    },
  ];

  return (
    <div className="flex h-[1200px] mt-50  flex-col items-center">
      <h1 className="text-2xl lg:text-4xl font-bold text-white">
        Nossas Células
      </h1>
      <p className="text-lg lg:text-2xl text-white">
        Procure a célula mais próxima de sua casa!
      </p>

      <section className="mt-10 lg:mt-20 grid md:grid-cols-2 gap-5">
        {addressArray.map((neighborhood, index) => {
          const encodedAddress = encodeURIComponent(neighborhood.address);
          const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
          return (
            <div key={index}>
              <Card className="w-[300px] lg:w-[400px] xl:w-[500px] h-full py-20">
                <CardHeader className="text-center">
                  <CardTitle className="text-xl lg:text-2xl">
                    {neighborhood.title}
                  </CardTitle>
                  <CardDescription>Traga sua familia!</CardDescription>
                </CardHeader>
                <CardContent className="flex h-[150px] gap-5 flex-col justify-center items-center">
                  <div className="text-center flex-col flex items-center gap-2">
                    <h1>
                      <span className="font-bold">Bairro:</span>{" "}
                      {neighborhood.neighborhood}
                    </h1>
                    <p>
                      <span className="font-bold">Endereço:</span>{" "}
                      {neighborhood.address}
                    </p>
                  </div>
                  <Link href={googleMapsUrl} target="_blank" className="mt-4">
                    <Button
                      className="cursor-pointer rounded-full py-10 px-10"
                      size={"lg"}>
                      Clique para Ver localização
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          );
        })}
      </section>
    </div>
  );
}
