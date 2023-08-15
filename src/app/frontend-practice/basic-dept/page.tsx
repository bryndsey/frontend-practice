import { FeaturedEngagments } from "./FeaturedEngagments";
import { FeaturedNews } from "./FeaturedNews";
import { Footer } from "./Footer";
import { SmoothScroll } from "./components/SmoothScroll";
import { Header } from "./Header";
import { HeroSection } from "./HeroSection";
import "./main.css";
import { SpotlightSection } from "./SpotlightSection";
import { FeaturedProjects } from "./FeaturedProjects";
import { IntroSection } from "./IntroSection";

export default function Page() {
  return (
    <SmoothScroll>
      <div className="text-content bg-backdrop overflow-x-clip">
        <Header />

        <main className="mb-12 md:mb-24">
          <HeroSection />

          <IntroSection />

          <FeaturedProjects />

          <div className="p-10 md:p-16 xl:p-20">
            <figure className="bg-content h-[1px]" />
          </div>

          <FeaturedEngagments />

          <SpotlightSection />

          <FeaturedNews />
        </main>

        <Footer />
      </div>
    </SmoothScroll>
  );
}
