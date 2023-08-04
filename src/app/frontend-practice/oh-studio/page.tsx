import Chip from "./components/Chip";
import ContactSection from "./components/ContactSection";

function ProjectGridItem(props: { text: string }) {
  return (
    <div className="aspect-[4/3] rounded-xl bg-gray-300">{props.text}</div>
  );
}

export default function Home() {
  return (
    <>
      <header className="flex min-h-[379px] flex-col items-center justify-evenly p-5 md:p-10">
        <h1 className="max-w-xl break-words text-center text-5xl font-medium leading-tight">
          A web and mobile developer working with clients globally
        </h1>
        <ul className="hidden flex-row items-center gap-2.5 text-sm md:inline-flex">
          {"Expertise"}
          <li>
            <Chip>React</Chip>
          </li>
          <li>
            <Chip>Next.js</Chip>
          </li>
          <li>
            <Chip>Three.js</Chip>
          </li>
        </ul>
      </header>

      <section className="grid w-full grid-cols-1 gap-x-4 gap-y-10 p-5 md:grid-cols-2 md:p-10">
        <ProjectGridItem text="Portfolio" />
        <ProjectGridItem text="Creative Developer" />
        <ProjectGridItem text="SongSpark" />
      </section>

      <ContactSection />
    </>
  );
}
