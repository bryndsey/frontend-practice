import Link from "next/link";

function NavBarItem(props: { text: string; href: string }) {
  return (
    <Link className="px-6 py-2" href={props.href}>
      {props.text}
    </Link>
  );
}

function ExpertiseListItem(props: { text: string }) {
  return (
    <li className="rounded-full bg-gray-200 bg-opacity-50 px-2 py-1">
      {props.text}
    </li>
  );
}

function ProjectGridItem(props: { text: string }) {
  return (
    <div className="aspect-video rounded-xl bg-gray-300">{props.text}</div>
  );
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <nav className="fixed top-8 flex flex-row gap-2 rounded-full bg-gray-200 bg-opacity-50 p-1 text-sm backdrop-blur">
        <NavBarItem href={"/frontend-practice/oh-studio"} text="Home" />
        <NavBarItem href={"/frontend-practice/oh-studio"} text="Profile" />
        <NavBarItem href={"/frontend-practice/oh-studio"} text="Contact" />
      </nav>

      <header className="mt-24 flex min-h-[379px] flex-col items-center justify-evenly p-5 md:p-10">
        <h1 className="max-w-md text-center text-5xl">
          A web and mobile developer working with clients globally
        </h1>
        <ul className="hidden flex-row items-center gap-2.5 text-sm md:inline-flex">
          {"Expertise"}
          <ExpertiseListItem text="React" />
          <ExpertiseListItem text="Next.js" />
          <ExpertiseListItem text="Three.js" />
        </ul>
      </header>

      <section className="grid w-full grid-cols-1 gap-4 p-5 md:grid-cols-2 md:p-10">
        <ProjectGridItem text="Portfolio" />
        <ProjectGridItem text="Creative Developer" />
        <ProjectGridItem text="SongSpark" />
      </section>

      <section className="my-8 flex flex-col items-center justify-center p-5 text-2xl md:p-10">
        {"Let's work together."}
        <a href="#">{"Get in touch."}</a>
      </section>

      <footer className="flex w-full flex-col justify-between p-5 text-sm md:flex-row md:p-10">
        <div className="flex flex-col items-center gap-2 md:flex-row">
          <div className="aspect-square w-6 rounded-full bg-green-500"></div>
          <a href="https://oh.studio/">{"Design by Oli Harris"}</a>
        </div>
        <div className="flex flex-row items-center justify-center gap-4">
          <a href="https://github.com/bryndsey">Github</a>
          <a href="https://www.linkedin.com/in/bryan-c-lindsey/">LinkedIn</a>
          <a href="#">Mail</a>
        </div>
      </footer>
    </main>
  );
}
