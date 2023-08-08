import { FeaturedEngagments } from "./FeaturedEngagments";
import { FeaturedNews } from "./FeaturedNews";
import { LinkButton } from "./components/LinkButton";

export default function Page() {
  return (
    <div className="bg-neutral-100 text-stone-800">
      <header className="fixed left-0 right-0 top-0 flex flex-row justify-between px-14 py-10">
        <span className="font-extrabold">{"BRYAN/LINZ®"}</span>
        <button>{"MENU"}</button>
      </header>

      <main>
        <section className="h-screen w-full bg-green-500"></section>

        <section className="grid grid-cols-1 gap-8 p-16 xl:grid-cols-2">
          <div className="flex w-1/2 flex-col items-start gap-6">
            <p>{"BRYAN/LINZ® is a person building things."}</p>
            <LinkButton>SEE THE WORK</LinkButton>
          </div>
          <p className="text-end text-9xl font-extrabold">B/L®</p>
        </section>

        <ul className="flex flex-row gap-4 overflow-x-scroll p-8">
          <li className="aspect-[3/4] w-[75vw] flex-shrink-0 bg-blue-400 sm:w-[40vw]"></li>
          <li className="aspect-[3/4] w-[75vw] flex-shrink-0 bg-red-400 sm:w-[40vw]"></li>
          <li className="aspect-[3/4] w-[75vw] flex-shrink-0 bg-yellow-400 sm:w-[40vw]"></li>
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
  );
}

function Footer() {
  return (
    <footer className="bg-stone-800 text-neutral-100">
      <div className="grid grid-cols-1 gap-3 p-10 xl:grid-cols-2">
        <h3>B/L®</h3>
        <p>
          {"I collaborate with ambitious brands and people. Let's build. "}
          <a href="#">foo@bar.baz</a>
        </p>

        <div>
          <h4>STAY IN THE KNOW</h4>
          <input></input>
        </div>

        <div className="grid grid-cols-1 gap-3 xl:grid-cols-3">
          <div>
            {"SOCIAL"}
            <ul>
              <li>Github</li>
              <li>LinkedIn</li>
              <li>Twitter</li>
            </ul>
          </div>
          <div>
            {"INITIATIVES"}
            <ul>
              <li>Thing 1</li>
              <li>Thing 2</li>
              <li>Thing 3</li>
            </ul>
          </div>
          <div>
            {"OFFICES"}
            <ul>
              <li>Spring Hill - TN</li>
              <li>{"It's just the one"}</li>
              <li>{"Seriously, that's all I have"}</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 justify-between justify-items-center bg-neutral-900 p-5 text-xs text-neutral-600 xl:grid-cols-3 xl:place-content-between">
        <a href="https://www.basicagency.com/">{"DESIGNED BY BASIC/DEPT"}</a>
        <span>{"IMPLEMENTED BY BRYAN LINDSEY, 2023"}</span>
        <a href="https://www.frontendpractice.com/projects/basic">
          {"FRONTEND PRACTICE"}
        </a>
      </div>
    </footer>
  );
}
