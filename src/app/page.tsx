import Link from "next/link";
import "./main.css";

function ProjectItem({
  name,
  href,
  frontendPracticeUrl,
  originalSiteUrl,
  isInProgress,
}: {
  name: string;
  href: string;
  frontendPracticeUrl: string;
  originalSiteUrl: string;
  isInProgress?: boolean;
}) {
  const useLink = !isInProgress || process.env.NODE_ENV === "development";

  return (
    <li className="flex w-full max-w-xl flex-row flex-wrap items-start justify-between gap-4 rounded-xl border p-4">
      <div className="flex flex-col">
        <h2 className="pb-4 text-xl font-bold">{name}</h2>
        <a
          href={frontendPracticeUrl}
          className="text-sm text-gray-500 hover:text-gray-400"
        >
          Frontend Practice Prompt
        </a>
        <a
          href={originalSiteUrl}
          className="text-sm  text-gray-500 hover:text-gray-400"
        >
          Original Website
        </a>
      </div>
      {useLink ? (
        <Link
          href={href}
          className="rounded-lg bg-rose-600 px-4 py-2 text-white transition-colors hover:-translate-y-0.5 hover:bg-rose-500 active:translate-y-0.5 active:bg-rose-700"
        >
          VIEW
        </Link>
      ) : (
        <p>Coming soon!</p>
      )}
    </li>
  );
}

export default function Home() {
  return (
    <main className="flex flex-col overflow-hidden md:h-screen md:flex-row">
      <section className="flex flex-col justify-between gap-6 bg-rose-300 p-10 md:w-1/2 md:max-w-sm lg:max-w-md lg:p-20">
        <h1 className="text-xl font-bold md:text-4xl">
          {"Bryan's Frontend Practice"}
        </h1>
        <p className="text-sm sm:text-base">
          {
            "I am developer. I am not a designer. These are sites I made by replicating other designs."
          }
        </p>
      </section>
      <section className="flex-1 overflow-y-scroll p-10 lg:p-20">
        <ul className="flex w-full flex-col items-center gap-6 md:items-start">
          <ProjectItem
            name="Oh.Studio Practice"
            href="/frontend-practice/oh-studio"
            frontendPracticeUrl="https://www.frontendpractice.com/projects/oh-studio"
            originalSiteUrl="https://oh.studio/"
          />
          <ProjectItem
            name="BASIC/DEPT Practice"
            href="/frontend-practice/basic-dept"
            frontendPracticeUrl="https://www.frontendpractice.com/projects/basic"
            originalSiteUrl="https://www.basicagency.com/"
          />
        </ul>
      </section>
    </main>
  );
}
