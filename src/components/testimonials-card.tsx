import { Star, Stars } from "lucide-react"
import Image from "next/image";


type TProps = {
  desc: string;
  imgSrc: string;
  name: string;
  stars: number;
}


export default function TestimonialsCard({ desc, imgSrc, name, stars }: TProps) {
  return (
    <section className="space-y-5 p-8 rounded-2xl shadow-[0_0_20px] shadow-zinc-100 w-[25vw] h-fit">
      <p className="text-">
        {desc}
      </p>

      <div className="flex gap-4">
        <Image
          src={imgSrc}
          alt="img"
          height={55}
          width={55}
          className="rounded-full"
          loading="lazy"
        />

        <div className="flex flex-col">
          <p className="text-lg font-bold">
            {name}
          </p>

          <div className="flex">
            <Star fill="#01A12E" />
            <p className="ml-3">{stars}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
