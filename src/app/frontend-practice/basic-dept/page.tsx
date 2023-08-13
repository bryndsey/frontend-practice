import { FeaturedEngagments } from "./FeaturedEngagments";
import { FeaturedNews } from "./FeaturedNews";
import { Footer } from "./Footer";
import { LinkButton } from "./components/LinkButton";
import { SmoothScroll } from "./SmoothScroll";
import { Header } from "./Header";
import { HeroSection } from "./HeroSection";
import "./main.css";

function FeaturedProjectItem() {
  return (
    <a href="#" className="group w-[75vw] md:w-[40vw]">
      <div className="aspect-[3/4] w-full bg-blue-400"></div>
      <h3 className="pt-2 text-lg font-bold group-hover:underline">
        PROJECT NAME
      </h3>
      <p className="max-w-[40%] pt-2 text-xs md:max-w-[60%]">
        SHORT DESCRIPTION OF THE PROJECT
      </p>
    </a>
  );
}

export default function Page() {
  return (
    <SmoothScroll>
      <div className="text-content bg-backdrop">
        <Header />

        <main className="mb-12 md:mb-24">
          <HeroSection />

          <section className="grid grid-cols-1 gap-8 p-16 xl:grid-cols-2 xl:p-20">
            <div className="flex w-1/2 flex-col items-start gap-6 [text-wrap:balance] xl:w-full">
              <p className="text-2xl xl:text-4xl">
                {
                  "BRYAN/LINZ® is a frontend developer building products and experiences that turn cultural values into company values."
                }
              </p>
              <LinkButton>SEE THE WORK</LinkButton>
            </div>
            <p className="text-end text-[16rem] font-extrabold leading-none">
              B/L®
            </p>
          </section>

          <ul className="no-scrollbar flex flex-row gap-4 overflow-x-scroll p-8 xl:p-20">
            <li className="w-[75vw] flex-shrink-0 md:w-[40vw] xl:w-[29vw]">
              <FeaturedProjectItem />
            </li>
            <li className="w-[75vw] flex-shrink-0 md:w-[40vw] xl:w-[29vw]">
              <FeaturedProjectItem />
            </li>
            <li className="w-[75vw] flex-shrink-0 md:w-[40vw] xl:w-[29vw]">
              <FeaturedProjectItem />
            </li>
          </ul>

          <div className="p-11 xl:p-20">
            <figure className="bg-content h-[1px]" />
          </div>

          <FeaturedEngagments />

          <section className="flex flex-col-reverse items-start gap-2 p-10 md:grid md:grid-cols-2 xl:gap-16 xl:p-20">
            {/* TODO: Make this bit sticky once I have more content for scrolling below */}
            <div className="sticky top-28 flex flex-col items-start gap-6">
              <q className="text-5xl font-bold xl:text-7xl">
                BRYAN/LINZ® HELPS BRANDS ● CONNECT W/ CULTURE
              </q>
              <p>
                NOBODY <b>SAID THAT</b>
              </p>
              <LinkButton>ABOUT US</LinkButton>
            </div>
            <div className="aspect-[3/4] w-full bg-purple-400"></div>
          </section>

          <FeaturedNews />
        </main>

        <Footer />
      </div>
    </SmoothScroll>
  );
}
