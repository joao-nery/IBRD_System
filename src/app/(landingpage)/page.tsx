import BentoGrid from "@/components/pages/home/bento-Grid";
import Hero from "@/components/pages/home/hero";
import { MinistersPreview } from "@/components/pages/home/ministers-preview";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <BentoGrid />
      <MinistersPreview />
    </main>
  );
}
