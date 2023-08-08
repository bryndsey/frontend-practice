import { LinkButton } from "./components/LinkButton";

function EngagementItem() {
  return (
    <li className="w-[75vw] flex-shrink-0 sm:w-[40vw] md:w-[30vw]">
      <div className="h-10 w-10 rounded-full bg-stone-800"></div>
      <h3 className="relative mt-8 pt-12 font-bold before:absolute before:top-0 before:block before:h-[2px] before:w-5 before:bg-slate-800">
        CLIENT NAME
      </h3>
      <p className="mt-5 text-sm">
        This is some text about this client. It explains who they are and what I
        did for them.
      </p>
    </li>
  );
}

function NewsPreviewItem() {
  return (
    <a
      href="#"
      className="relative flex w-full flex-col gap-2 pt-5 before:absolute before:left-0 before:right-0 before:top-0 before:h-[1px] before:bg-stone-800 sm:flex-row"
    >
      <div className="aspect-[4/3] w-full bg-orange-800 sm:w-1/3"></div>
      <div className="relative flex flex-1 flex-col justify-between gap-8">
        <h3 className="max-w-[75%] text-2xl">
          THIS IS THE TITLE OF THE ARTICLE. PLEASE READ ME.
        </h3>
        <figure className="absolute bottom-0 right-0 box-content h-7 w-7 text-2xl sm:top-0">
          {"->"}
        </figure>
        <span className="text-xs">
          <b>PRESS</b> 8.7.23
        </span>
      </div>
    </a>
  );
}

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

        <section className="overflow-visible p-11">
          <h2>FEATURED ENGAGMENTS</h2>

          <ul className="flex flex-row gap-4 overflow-x-scroll pt-16">
            <EngagementItem />
            <EngagementItem />
            <EngagementItem />
            <EngagementItem />
            <EngagementItem />
            <EngagementItem />
          </ul>
        </section>

        <section className="flex flex-col-reverse gap-2 p-10 sm:grid sm:grid-cols-2">
          {/* TODO: Make this bit sticky once I have more content for scrolling below */}
          <div className="flex flex-col items-start gap-6">
            <q className="text-6xl font-bold">SOME TEXT HERE</q>
            <p>MORE CONTENT</p>
            <LinkButton>ABOUT US</LinkButton>
          </div>
          <div className="aspect-[3/4] w-full bg-purple-400"></div>
        </section>

        <section className="p-10">
          <div className="flex flex-row justify-between">
            <h2>FEATURED NEWS</h2>
            <LinkButton>VIEW ALL</LinkButton>
          </div>

          <ul className="mt-8 flex flex-col gap-5 sm:gap-10">
            <li>
              <NewsPreviewItem />
            </li>
            <li>
              <NewsPreviewItem />
            </li>
            <li>
              <NewsPreviewItem />
            </li>
            <li>
              <NewsPreviewItem />
            </li>
            <li>
              <NewsPreviewItem />
            </li>
            <li>
              <NewsPreviewItem />
            </li>
          </ul>
        </section>
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
