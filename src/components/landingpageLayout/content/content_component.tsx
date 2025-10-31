import { CardPrincipal } from "./card_principal";
import { CardsContent } from "./cards_content";
import { PrayRequest } from "./prayrequest";

export function ContentComponent() {
  return (
    <div className="bg-[#110D14] h-max flex flex-col justify-center items-center">
      <CardPrincipal />
      <CardsContent />
      <PrayRequest />
    </div>
  );
}
