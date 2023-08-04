import Link from "next/link";

function NavBarItem(props: { text: string; href: string }) {
  return (
    <Link className="px-6 py-2" href={props.href}>
      {props.text}
    </Link>
  );
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4">
      <nav className="fixed top-8 flex flex-row gap-2 rounded-full bg-gray-700 bg-opacity-50 backdrop-blur p-1">
        <NavBarItem href={"/frontend-practice/oh-studio"} text="Home" />
        <NavBarItem href={"/frontend-practice/oh-studio"} text="Profile" />
        <NavBarItem href={"/frontend-practice/oh-studio"} text="Contact" />
      </nav>
      <h1 className="text-5xl text-center max-w-md">
        A web and mobile developer working with clients globally
      </h1>
    </main>
  );
}