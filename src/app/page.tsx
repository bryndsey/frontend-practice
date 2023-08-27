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
    <div className="flex w-full flex-col justify-between gap-8 overflow-clip rounded-xl border p-4 sm:flex-row">
      <Link href={useLink ? href : ""} className="hover:underline">
        <h2 className="text-xl font-bold">{name}</h2>
      </Link>
      <div className="flex flex-col items-end text-end">
        <a
          href={frontendPracticeUrl}
          className="text-sm text-stone-400 hover:underline"
        >
          Frontend Practice Prompt ↗
        </a>
        <a
          href={originalSiteUrl}
          className="text-sm text-stone-400 hover:underline"
        >
          Original Website ↗
        </a>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col justify-between">
      <main className="mx-auto flex max-w-xl flex-col items-center px-4 py-8 text-stone-700 sm:px-8 sm:py-12">
        <section>
          <h1 className="text-4xl font-bold">{"Bryan's Frontend Practice"}</h1>
          <a
            href="https://github.com/bryndsey/frontend-practice"
            className="text-stone-400 hover:underline"
          >
            View on GitHub ↗
          </a>
          <p className="pt-8">
            {"A collection of sites I made by replicating other designs."}
          </p>
        </section>
        <section className="w-full pt-12">
          <ul className="flex w-full flex-col items-center gap-6">
            <li className="w-full">
              <ProjectItem
                name="Oh.Studio Practice"
                href="/frontend-practice/oh-studio"
                frontendPracticeUrl="https://www.frontendpractice.com/projects/oh-studio"
                originalSiteUrl="https://oh.studio/"
              />
            </li>
            <li className="w-full">
              <ProjectItem
                name="BASIC/DEPT Practice"
                href="/frontend-practice/basic-dept"
                frontendPracticeUrl="https://www.frontendpractice.com/projects/basic"
                originalSiteUrl="https://www.basicagency.com/"
              />
            </li>
          </ul>
        </section>
      </main>
      <footer className="flex w-full flex-col flex-wrap items-center justify-between gap-x-8 bg-stone-700 p-4 text-sm text-stone-500 sm:flex-row">
        {"©2023 Bryan Lindsey"}
        <div className="flex flex-col gap-x-4 text-center sm:flex-row sm:text-end">
          <a href="https://github.com/bryndsey" className="hover:underline">
            Github ↗
          </a>
          <a
            href="https://www.linkedin.com/in/bryan-c-lindsey/"
            className="hover:underline"
          >
            LinkedIn ↗
          </a>
        </div>
      </footer>
    </div>
  );
}
