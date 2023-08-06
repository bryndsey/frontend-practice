import Link from "next/link";

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
    <li className="flex flex-row justify-between">
      <div className="flex flex-col">
        <h2 className="text-xl font-bold">{name}</h2>
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
      {useLink ? <Link href={href}>VIEW</Link> : <p>Coming soon!</p>}
    </li>
  );
}

export default function Home() {
  return (
    <main className="flex flex-col overflow-hidden sm:h-screen sm:flex-row">
      <section className="flex flex-col justify-between gap-6 bg-rose-300 p-10 sm:w-1/2 lg:p-20">
        <h1 className="text-xl font-bold sm:text-4xl">
          {"Bryan's Frontend Practice"}
        </h1>
        <p className="text-sm sm:text-base">
          {
            "I am developer. I am not a designer. These are sites I made copying other designs."
          }
        </p>
      </section>
      <section className="flex-1 overflow-y-scroll p-10 lg:p-20">
        <ul className="flex w-full flex-col gap-8">
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
            isInProgress
          />
        </ul>
      </section>
    </main>
  );
}
