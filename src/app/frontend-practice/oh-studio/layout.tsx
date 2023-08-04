import localFont from "next/font/local";
import Link from "next/link";

const font = localFont({
  src: [
    {
      path: "./assets/NeueMontreal-Medium.otf",
      weight: "500",
      style: "medium",
    },
    {
      path: "./assets/NeueMontreal-Regular.otf",
      weight: "400",
      style: "regular",
    },
  ],
  variable: "--font-neue-montreal",
});

function NavBarItem(props: { text: string; href: string }) {
  return (
    <Link className="px-6 py-2.5" href={props.href}>
      {props.text}
    </Link>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main
      className={`flex min-h-screen flex-col items-center ${font.variable} font-sans`}
    >
      <nav className="fixed top-8 flex flex-row gap-2 rounded-full bg-stone-200 bg-opacity-50 p-1 text-sm backdrop-blur">
        <NavBarItem href={"/frontend-practice/oh-studio"} text="Home" />
        <NavBarItem
          href={"/frontend-practice/oh-studio/profile"}
          text="Profile"
        />
        <NavBarItem
          href={"/frontend-practice/oh-studio/contact"}
          text="Contact"
        />
      </nav>

      <div className="mt-24 grid w-full flex-grow place-items-center">
        {children}
      </div>

      <footer className="flex w-full flex-col justify-between p-5 text-sm md:flex-row md:p-10">
        <div className="flex flex-col items-center gap-2 md:flex-row">
          <div className="aspect-square w-6 rounded-full bg-black"></div>
          <a href="https://oh.studio/">{"Design by Oli Harris"}</a>
        </div>
        <div className="flex flex-row items-center justify-center gap-4">
          <a
            href="https://github.com/bryndsey"
            className="hover:text-neutral-500"
          >
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/bryan-c-lindsey/"
            className="hover:text-neutral-500"
          >
            LinkedIn
          </a>
          <a href="#" className="hover:text-neutral-500">
            Mail
          </a>
        </div>
      </footer>
    </main>
  );
}
