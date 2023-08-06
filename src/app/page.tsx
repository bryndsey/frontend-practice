import Link from "next/link";

function ProjectItem({
  name,
  href,
  frontendPracticeUrl,
  originalSiteUrl,
}: {
  name: string;
  href: string;
  frontendPracticeUrl: string;
  originalSiteUrl: string;
}) {
  return (
    <li className="flex flex-col">
      <Link href={href} className="text-xl font-bold">
        {name}
      </Link>
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
    </li>
  );
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ul className="flex flex-col gap-48">
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
    </main>
  );
}
