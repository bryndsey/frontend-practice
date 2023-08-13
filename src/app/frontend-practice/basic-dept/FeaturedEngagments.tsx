export function FeaturedEngagments() {
  return (
    <section className="overflow-visible p-11 xl:p-20">
      <h2>FEATURED ENGAGMENTS</h2>

      <ul className="no-scrollbar relative -inset-x-11 flex w-screen flex-row gap-4 overflow-x-auto px-11 pt-16 xl:-inset-x-20">
        <EngagementItem />
        <EngagementItem />
        <EngagementItem />
        <EngagementItem />
        <EngagementItem />
        <EngagementItem />
      </ul>
    </section>
  );
}

function EngagementItem() {
  return (
    <li className="w-[75vw] flex-shrink-0 md:w-[40vw] lg:w-[30vw]">
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
