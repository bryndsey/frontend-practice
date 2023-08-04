import Link from "next/link";

function NavBarItem(props: { text: string; href: string }) {
  return (
    <Link className="px-6 py-2" href={props.href}>
      {props.text}
    </Link>
  );
}

function ExpertiseListItem(props: { text: string }) {
  return <li className="rounded-full bg-gray-500 px-2 py-1">{props.text}</li>;
}

function ProjectGridItem(props: { text: string }) {
  return (
    <div className="aspect-video rounded-xl bg-gray-300">{props.text}</div>
  );
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <nav className="fixed top-8 flex flex-row gap-2 rounded-full bg-gray-700 bg-opacity-50 p-1 backdrop-blur">
        <NavBarItem href={"/frontend-practice/oh-studio"} text="Home" />
        <NavBarItem href={"/frontend-practice/oh-studio"} text="Profile" />
        <NavBarItem href={"/frontend-practice/oh-studio"} text="Contact" />
      </nav>

      <header className="mt-24 flex min-h-[379px] flex-col items-center justify-evenly p-10">
        <h1 className="max-w-md text-center text-5xl">
          A web and mobile developer working with clients globally
        </h1>
        <ul className="flex flex-row items-center gap-2 text-sm">
          {"Expertise"}
          <ExpertiseListItem text="React" />
          <ExpertiseListItem text="Next.js" />
          <ExpertiseListItem text="Three.js" />
        </ul>
      </header>

      <section className="grid w-full grid-cols-1 gap-4 p-10 md:grid-cols-2">
        <ProjectGridItem text="Portfolio" />
        <ProjectGridItem text="Creative Developer" />
        <ProjectGridItem text="SongSpark" />
      </section>

      <section className="my-8 flex flex-col items-center justify-center p-10 text-2xl">
        {"Let's work together."}
        <a href="#">{"Get in touch."}</a>
      </section>

      <footer className="flex w-full flex-row justify-between p-10 text-sm">
        <div className="flex flex-row items-center gap-2">
          <div className="aspect-square w-6 rounded-full bg-green-500"></div>
          {"© Bryan Lindsey 2023 - Copied from Oli Harris"}
        </div>
        <div className="flex flex-row items-center gap-4">
          <a href="https://github.com/bryndsey">Github</a>
          <a href="https://www.linkedin.com/in/bryan-c-lindsey/">LinkedIn</a>
          <a href="#">Mail</a>
        </div>
      </footer>
    </main>
  );
}
