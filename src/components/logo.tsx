import Image from "next/image"
import { Playfair, } from "next/font/google";

import logo from "../../public/assets/logo.png"


const playfairFont = Playfair({
  subsets: ["latin-ext"],
  weight: ["400", "500"],
})


type TProps = {
  textColor: string;
}

export default function Logo({ textColor }: TProps) {
  return (
    <section className="flex items-center justify-center gap-x-2">
      <Image
        src={logo}
        alt="logo img"
        height={125}
        width={125}
        loading="lazy"
      />
      <div className={`${textColor} ${playfairFont.className}`}>
        <h1 className="text-4xl">CREDITSEA</h1>
        <p>TRUST.COMFORT.PROSPER</p>
      </div>
    </section>
  )
}
