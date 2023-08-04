"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function NavBarItem(props: { text: string; href: string; isActive: boolean }) {
  return (
    <Link
      className={`rounded-full px-6 py-2.5 ${
        props.isActive ? "bg-white" : "bg-none"
      }`}
      href={props.href}
    >
      {props.text}
    </Link>
  );
}

type NavLink = {
  pathname: string;
  text: string;
};

const navLinks: NavLink[] = [
  { pathname: "/frontend-practice/oh-studio", text: "Home" },
  { pathname: "/frontend-practice/oh-studio/profile", text: "Profile" },
  { pathname: "/frontend-practice/oh-studio/contact", text: "Contact" },
];

export default function NavBar() {
  const currentPathname = usePathname();

  return (
    <nav className="fixed top-8 flex flex-row gap-2 rounded-full bg-stone-200 bg-opacity-50 p-1 text-sm backdrop-blur">
      {navLinks.map((link) => (
        <NavBarItem
          key={link.text}
          href={link.pathname}
          text={link.text}
          isActive={link.pathname === currentPathname}
        />
      ))}
    </nav>
  );
}
