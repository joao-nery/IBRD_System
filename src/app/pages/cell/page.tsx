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
    <div className="flex h-screen justify-center -mt-20 flex-col items-center">
      <h1 className="text-4xl font-bold">Nossas Células</h1>
      <p className="text-2xl text-gray-500">
        Procure a célula mais próxima de sua casa!
      </p>

      <section className="mt-20 grid grid-cols-2 gap-5">
        {addressArray.map((neighborhood, index) => {
          const encodedAddress = encodeURIComponent(neighborhood.address);
          const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
          return (
            <div key={index}>
              <Card className="w-[500px]">
                <CardHeader className="text-center">
                  <CardTitle className="text-3xl">
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
                    <Button className="cursor-pointer" size={"lg"}>
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
