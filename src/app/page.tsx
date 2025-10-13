import { ContentComponent } from "@/components/landingpageLayout/content";

import { TitleHeroComponent } from "@/components/landingpageLayout/titlehero";

export default function Home() {
  return (
    <div>
      <TitleHeroComponent />
      <ContentComponent />
    </div>
  );
}
