import Image from "next/image";


import rblbank from "../../public/assets/rblbank.png";
import ackoImg from "../../public/assets/acko.png";
import incredfinanceImg from "../../public/assets/incredfinance.png";
import zypeImg from "../../public/assets/zype.png";
import cholaImg from "../../public/assets/chola.png";



export default function PartnersSection() {
  return (
    <section className="text-center py-16 px-10 space-y-4">
        <h1 className="font-bold text-3xl">
          Our Partners
        </h1>

        <p className="text-xl text-zinc-500">
          Backed by <span className="font-bold">most trusted</span> names in the industry
        </p>

        <div className="flex items-center justify-around">
          <Image
            src={rblbank}
            alt="img"
            height={125}
            width={125}
            loading="lazy"
            />

          <Image
            src={zypeImg}
            alt="img"
            height={125}
            width={125}
            loading="lazy"
            />

          <Image
            src={ackoImg}
            alt="img"
            height={125}
            width={125}
            loading="lazy"
            />

          <Image
            src={incredfinanceImg}
            alt="img"
            height={125}
            width={125}
            loading="lazy"
            />

          <Image
            src={cholaImg}
            alt="img"
            height={125}
            width={125}
            loading="lazy"
            />
        </div>
      </section>
  )
}