function ExpertiseListItem(props: { text: string }) {
  return (
    <li className="rounded-full bg-stone-200 bg-opacity-50 px-2.5 py-1.5">
      {props.text}
    </li>
  );
}

function ProjectGridItem(props: { text: string }) {
  return (
    <div className="aspect-[4/3] rounded-xl bg-gray-300">{props.text}</div>
  );
}

export default function Home() {
  return (
    <>
      <header className="mt-24 flex min-h-[379px] flex-col items-center justify-evenly p-5 md:p-10">
        <h1 className="max-w-xl break-words text-center text-5xl font-medium leading-tight">
          A web and mobile developer working with clients globally
        </h1>
        <ul className="hidden flex-row items-center gap-2.5 text-sm md:inline-flex">
          {"Expertise"}
          <ExpertiseListItem text="React" />
          <ExpertiseListItem text="Next.js" />
          <ExpertiseListItem text="Three.js" />
        </ul>
      </header>

      <section className="grid w-full grid-cols-1 gap-x-4 gap-y-10 p-5 md:grid-cols-2 md:p-10">
        <ProjectGridItem text="Portfolio" />
        <ProjectGridItem text="Creative Developer" />
        <ProjectGridItem text="SongSpark" />
      </section>

      <section className="my-8 flex flex-col items-center justify-center p-5 text-4xl font-medium leading-tight md:p-10">
        {"Let's work together."}
        <a href="#" className="text-neutral-500 hover:text-neutral-400">
          {"Get in touch."}
        </a>
      </section>
    </>
  );
}
