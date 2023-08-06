function EngagementItem() {
  return (
    <li className="w-[75vw] flex-shrink-0 sm:w-[40vw] md:w-[30vw]">
      <div className="h-10 w-10 rounded-full bg-slate-800"></div>
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

export default function Page() {
  return (
    <main className="bg-neutral-100 text-stone-800">
      <section className="h-screen w-full bg-green-500"></section>

      <section className="grid grid-cols-1 gap-8 p-16 xl:grid-cols-2">
        <div className="flex w-1/2 flex-col items-start gap-6">
          <p>{"BRYAN/LINZ® is a person building things."}</p>
          <button className="rounded-full border px-4 py-2">
            SEE THE WORK
          </button>
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
        <div className="flex flex-col items-start gap-6">
          <q className="text-6xl font-bold">SOME TEXT HERE</q>
          <p>MORE CONTENT</p>
          <a href="#" className="rounded-full border px-4 py-2">
            ABOUT US
          </a>
        </div>
        <div className="aspect-[3/4] w-full bg-purple-400"></div>
      </section>
    </main>
  );
}
