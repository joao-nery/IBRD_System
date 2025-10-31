import { ContentComponent } from "@/components/landingpageLayout/content/content_component";
import { TitleHeroComponent } from "@/components/landingpageLayout/titlehero/titlehero_component";

export default function Home() {
  return (
    <div className="bg-[#110D14]">
      <TitleHeroComponent />
      <ContentComponent />
    </div>
  );
}
