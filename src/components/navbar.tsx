"use client"

import Image from "next/image"
import Link from "next/link";
import { usePathname } from "next/navigation";

import Button from "./button";
import logo from "../../public/assets/logo.png"


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
      <section className="flex items-center justify-center gap-x-2">
        <Image
          src={logo}
          alt="logo img"
          height={125}
          width={125}
        />
        <div className="space-y-1 text-sky-500">
          <h1 className="text-3xl">CREDITSEA</h1>
          <p>TRUST.COMFORT.PROSPER</p>
        </div>
      </section>


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


      <section className="space-x-4">
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
