import { MainContent } from "./main_content";
import { SecondaryContent } from "./secodary_content";

export function TitleHeroComponent() {
  return (
    <div className="h-[750px] lg:h-[820px] xl:h-[900px] w-full flex flex-col items-center bg-gradient-to-tr rounded-bl-3xl rounded-br-3xl to-[#601C25] from-[#5530AA]">
      <section className="h-[690px] w-[350px] xl:mt-13 flex flex-col justify-center items-center">
        <MainContent />
        <SecondaryContent />
      </section>
    </div>
  );
}
