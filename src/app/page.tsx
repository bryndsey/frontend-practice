import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ul className="flex flex-col gap-48">
        <li className="flex flex-col">
          <Link
            href="/frontend-practice/oh-studio"
            className="text-xl font-bold"
          >
            Oh.Studio Practice
          </Link>
          <a
            href="https://www.frontendpractice.com/projects/oh-studio"
            className="text-sm text-gray-500 hover:text-gray-400"
          >
            Frontend Practice Prompt
          </a>
          <a
            href="https://oh.studio/"
            className="text-sm  text-gray-500 hover:text-gray-400"
          >
            Original Website
          </a>
        </li>

        <li className="flex flex-col">
          <Link
            href="/frontend-practice/basic-dept"
            className="text-xl font-bold"
          >
            BASIC/DEPT Practice
          </Link>
          <a
            href="https://www.frontendpractice.com/projects/basic"
            className="text-sm text-gray-500 hover:text-gray-400"
          >
            Frontend Practice Prompt
          </a>
          <a
            href="https://www.basicagency.com/"
            className="text-sm  text-gray-500 hover:text-gray-400"
          >
            Original Website
          </a>
        </li>
      </ul>
    </main>
  );
}
