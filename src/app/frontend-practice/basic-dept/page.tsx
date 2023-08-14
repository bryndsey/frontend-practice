import { FeaturedEngagments } from "./FeaturedEngagments";
import { FeaturedNews } from "./FeaturedNews";
import { Footer } from "./Footer";
import { LinkButton } from "./components/LinkButton";
import { SmoothScroll } from "./SmoothScroll";
import { Header } from "./Header";
import { HeroSection } from "./HeroSection";
import "./main.css";
import { SpotlightSection } from "./SpotlightSection";
import { FeaturedProjects } from "./FeaturedProjects";

export default function Page() {
  return (
    <SmoothScroll>
      <div className="text-content bg-backdrop overflow-x-clip">
        <Header />

        <main className="mb-12 md:mb-24">
          <HeroSection />

          <section className="grid grid-cols-1 gap-8 p-10 md:p-16 xl:grid-cols-2 xl:p-20">
            <div className="flex w-4/5 flex-col items-start gap-6 [text-wrap:balance] md:w-1/2 xl:w-full">
              <p className="text-2xl xl:text-4xl">
                {
                  "BRYAN/LINZ® is a frontend developer building products and experiences that turn cultural values into company values."
                }
              </p>
              <LinkButton>SEE THE WORK</LinkButton>
            </div>
            <figure className="w-3/4 place-self-end text-end md:w-1/2 xl:w-full">
              <svg viewBox="0 0 40 22">
                <text x="5" y="17" fontWeight="bold" textAnchor="start">
                  B/L®
                </text>
              </svg>
            </figure>
          </section>

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
