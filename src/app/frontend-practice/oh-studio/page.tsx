import Image from "next/image";
import Chip from "./components/Chip";
import ContactSection from "./components/ContactSection";
import PlaceholderImage from "./pexels-emilio-gonzález-17781404.jpg";

function ProjectGridItem(props: { text: string }) {
  return (
    <a href="#" className="relative flex flex-col gap-2">
      <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
        <Image
          className="h-full object-cover"
          src={PlaceholderImage}
          alt="placeholder image"
        />
      </div>
      <p className="text-sm md:absolute md:inset-4 md:text-white">
        {props.text}
      </p>
    </a>
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
