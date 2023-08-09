import { FeaturedEngagments } from "./FeaturedEngagments";
import { FeaturedNews } from "./FeaturedNews";
import { Footer } from "./Footer";
import { LinkButton } from "./components/LinkButton";
import { SmoothScroll } from "./SmoothScroll";
import { Header } from "./Header";

function FeaturedProjectItem() {
  return (
    <a href="#" className="w-[75vw] sm:w-[40vw]">
      <div className="aspect-[3/4] w-full bg-blue-400"></div>
      <h3 className="pt-2 text-lg font-bold">PROJECT NAME</h3>
      <p className="max-w-[40%] pt-2 text-xs sm:max-w-[60%]">
        SHORT DESCRIPTION OF THE PROJECT
      </p>
    </a>
  );
}

export default function Page() {
  return (
    <SmoothScroll>
      <div className="bg-neutral-100 text-stone-800">
        <Header />

        <main className="mb-12 sm:mb-24">
          <section className="h-screen w-full bg-green-500"></section>

          <section className="grid grid-cols-1 gap-8 p-16 xl:grid-cols-2">
            <div className="flex w-1/2 flex-col items-start gap-6">
              <p>{"BRYAN/LINZ® is a person building things."}</p>
              <LinkButton>SEE THE WORK</LinkButton>
            </div>
            <p className="text-end text-9xl font-extrabold">B/L®</p>
          </section>

          <ul className="flex flex-row gap-4 overflow-x-scroll p-8">
            <li className="w-[75vw] flex-shrink-0 sm:w-[40vw]">
              <FeaturedProjectItem />
            </li>
            <li className="w-[75vw] flex-shrink-0 sm:w-[40vw]">
              <FeaturedProjectItem />
            </li>
            <li className="w-[75vw] flex-shrink-0 sm:w-[40vw]">
              <FeaturedProjectItem />
            </li>
          </ul>

          <div className="p-11">
            <figure className="h-[1px] bg-slate-800" />
          </div>

          <FeaturedEngagments />

          <section className="flex flex-col-reverse gap-2 p-10 sm:grid sm:grid-cols-2">
            {/* TODO: Make this bit sticky once I have more content for scrolling below */}
            <div className="flex flex-col items-start gap-6">
              <q className="text-6xl font-bold">SOME TEXT HERE</q>
              <p>MORE CONTENT</p>
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
