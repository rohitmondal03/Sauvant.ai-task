import Image from "next/image"
import Link from "next/link"

import Logo from "./logo"
import gPlayStore from "../../public/assets/g-play-store.png"
import appleImg from "../../public/assets/apple-img.png"


const services = new Array(3).fill("Lorem Ipsum");
const otherLinks = ["About us", "Case study", "Career"];


export default function Footer() {
  return (
    <footer className="bg-primary-col py-16 px-16 flex flex-row items-start justify-between text-white relative">
      <Logo textColor="text-zinc-200" />


      <div className="space-y-4 flex flex-col items-start justify-center">
        <h1 className="font-bold text-xl">Services</h1>
        {services.map((ser, idx) => (
          <Link
            key={idx}
            href={"/"}
            className="text-zinc-300"
          >
            {ser}
          </Link>
        ))}
      </div>


      <div className="space-y-4 flex flex-col items-start justify-center">
        <h1 className="font-bold text-xl">Other Links</h1>
        {otherLinks.map((link, idx) => (
          <Link
            key={idx}
            href={"/"}
            className="text-zinc-300"
          >
            {link}
          </Link>
        ))}
      </div>


      <div className="space-y-4 flex flex-col items-start justify-center">
        <h1 className="font-bold text-xl">Contact Us</h1>
        <Link href={"/"} className="text-zinc-300">
          Creditsea Technologies <br />
          4th Floor, D-39, Sector 2, Rohini <br />
          New Delhi - 201301
        </Link>
        <Link href={"/"} className="text-zinc-300">Customercare@creditsea.com</Link>
        <Link href={"/"} className="text-zinc-300">01140848286</Link>
      </div>


      <div className="space-y-4 flex flex-col items-start justify-center z-10">
        <h1 className="font-bold text-xl">App Store Links</h1>

        <button className="border border-primary-col rounded-xl text-black bg-white py-2 px-8 flex flex-row items-center justify-center gap-4">
          <Image
            src={gPlayStore}
            alt="img"
            height={40}
            width={40}
          />
          <div className="flex flex-col items-start">
            <p>Get it on</p>
            <p className="font-bold text-2xl">Google Play</p>
          </div>
        </button>

        <button className="border border-primary-col rounded-xl text-black bg-white py-2 px-8 flex flex-row items-center justify-center gap-3">
          <Image
            src={appleImg}
            alt="img"
            width={50}
            height={50}
          />
          <div>
            <p>Download on the</p>
            <p className="font-bold text-2xl">Apple Store</p>
          </div>
        </button>
      </div>
    </footer>
  )
}
