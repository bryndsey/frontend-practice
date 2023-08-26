import { FeaturedEngagements } from "./sections/FeaturedEngagements";
import { FeaturedNews } from "./sections/FeaturedNews";
import { Footer } from "./sections/Footer";
import { SmoothScroll } from "./components/SmoothScroll";
import { Header } from "./sections/Header";
import { HeroSection } from "./sections/HeroSection";
import "./main.css";
import { SpotlightSection } from "./sections/SpotlightSection";
import { FeaturedProjects } from "./sections/FeaturedProjects";
import { IntroSection } from "./sections/IntroSection";

export default function Page() {
  return (
    <SmoothScroll>
      <div
        id="basic-dept-root"
        className="text-content bg-backdrop overflow-x-clip"
      >
        <Header />

        <main className="mb-12 md:mb-24">
          <HeroSection />

          <IntroSection />

          <FeaturedProjects />

          <div className="p-10 md:p-16 xl:p-20">
            <figure className="bg-content h-[1px]" />
          </div>

          <FeaturedEngagements />

          <SpotlightSection />

          <FeaturedNews />
        </main>

        <Footer />
      </div>
    </SmoothScroll>
  );
}
