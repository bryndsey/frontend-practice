import Link from "next/link";
import Chip from "./components/Chip";
import ContactSection from "./components/ContactSection";
import { ProjectGridItem } from "./ProjectGridItem";
import RevealOnceVisible from "./components/RevealOnceVisible";

export default function Home() {
  return (
    <>
      <header className="flex min-h-[379px] flex-col items-center justify-evenly p-5 md:p-10">
        <RevealOnceVisible>
          <h1 className="max-w-xl break-words text-center text-5xl font-medium leading-tight">
            A web and mobile developer working with clients globally
          </h1>
        </RevealOnceVisible>
        <RevealOnceVisible transition={{ delay: 0.25 }}>
          <div className="hidden flex-row items-center gap-2.5 text-sm md:inline-flex">
            {"Expertise"}
            <ul className="flex flex-row items-center gap-2.5">
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
          </div>
        </RevealOnceVisible>
      </header>

      <RevealOnceVisible transition={{ delay: 0.5 }} className="w-full">
        <section className="grid w-full grid-cols-1 gap-x-4 gap-y-10 p-5 md:grid-cols-2 md:p-10">
          <ProjectGridItem text="Portfolio" />
          <ProjectGridItem text="Creative Developer" />
          <ProjectGridItem text="SongSpark" />
        </section>
      </RevealOnceVisible>

      <RevealOnceVisible
        transition={{ delay: 0.75 }}
        className="fixed bottom-10"
      >
        <Link
          href="/"
          className="mx-auto rounded-full bg-black px-6 py-3 text-sm text-white"
        >
          Back
        </Link>
      </RevealOnceVisible>

      <ContactSection />
    </>
  );
}
