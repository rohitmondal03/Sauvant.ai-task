"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

import Logo from "./logo";
import Button from "./button";


type TNavLinks = {
  title: string;
  href: string;
}


const navLinks: TNavLinks[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "How it Works",
    href: "/how-it-works",
  },
  {
    title: "Why CREDITSEA",
    href: "/why-creditsia",
  },
  {
    title: "Blog",
    href: "/blog",
  }
]


export default function Navbar() {
  const pathName = usePathname();


  return (
    <nav className="py-5 px-10 flex items-center justify-around">
      <Logo textColor="text-primary-col" />


      <section className="flex items-center gap-x-7 text-lg">
        {navLinks.map(link => (
          <Link
            key={link.href}
            href={link.href}
            className={pathName === link.href ? "font-bold active-link" : ""}
          >
            {link.title}
          </Link>
        ))}
      </section>


      <section className="space-x-10">
        <Link
          href={"/"}
          className="font-bold text-primary-col"
        >
          Login/SignUp
        </Link>

        <Button
          type="primary"
          title="Get the App"
          isArrow={false}
        />
      </section>
    </nav>
  )
}
