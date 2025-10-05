import { ContentComponent } from "@/components/landingpageLayout/content";
import { FooterComponent } from "@/components/landingpageLayout/footer";
import { TitleHeroComponent } from "@/components/landingpageLayout/titlehero";

export default function Home() {
  return (
    <div>
      <TitleHeroComponent />
      <ContentComponent />
      <FooterComponent />
    </div>
  );
}
