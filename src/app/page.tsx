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
    <div className="flex w-full flex-col justify-between gap-8 overflow-clip rounded-xl border p-4 sm:flex-row">
      <Link href={useLink ? href : ""} className="hover:underline">
        <h2 className="text-xl font-bold">{name}</h2>
      </Link>
      <div className="flex flex-col items-end text-end">
        <a
          href={frontendPracticeUrl}
          className="text-sm text-gray-500 hover:underline"
        >
          Frontend Practice Prompt ↗
        </a>
        <a
          href={originalSiteUrl}
          className="text-sm text-gray-500 hover:underline"
        >
          Original Website ↗
        </a>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="mx-auto flex max-w-xl flex-col items-center px-4 py-8 md:px-8 md:py-12">
      <section className="">
        <h1 className="text-4xl font-bold">{"Bryan's Frontend Practice"}</h1>
        <p className="pt-8">
          {
            "I am developer. I am not a designer. These are sites I made by replicating other designs."
          }
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
  );
}
