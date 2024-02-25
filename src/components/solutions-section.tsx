import Image from "next/image"

import mobileImg from "../../public/assets/mobile.png";
import tick from "../../public/assets/tick.png";


export default function SolutionsSection() {
  return (
    <section className="text-center my-10">
      <h1 className="font-bold text-3xl">
        Money for everything you need
      </h1>

      <p className="text-xl text-zinc-500 my-5">
        At CreditSea, we offer a range of hassle-free financial solutions tailored to your needs
      </p>

      <div className="flex items-center justify-around mt-10">
        <Image
          src={mobileImg}
          alt="img"
          height={600}
          width={600}
        />

        <div className="flex flex-col items-start justify-items-start gap-y-7">
          <div className="flex flex-row items-center justify-center gap-3">
            <Image src={tick} alt="img" height={40} width={40} />
            <p className="font-bold text-2xl">
              Offering personal loans, home loans, and credit lines
            </p>
          </div>

          <div className="flex flex-row items-center justify-center gap-3">
            <Image src={tick} alt="img" height={40} width={40} />
            <p className="font-bold text-2xl">
              Hassle free application approval
            </p>
          </div>

          <div className="flex flex-row items-center justify-center gap-3">
            <Image src={tick} alt="img" height={40} width={40} />
            <p className="font-bold text-2xl">
              Providing competitive interest rates
            </p>
          </div>

          <div className="flex flex-row items-center justify-center gap-3">
            <Image src={tick} alt="img" height={40} width={40} />
            <p className="font-bold text-2xl">
              Tailored repayment plans to suit individual needs
            </p>
          </div>

          <div className="flex flex-row items-center justify-center gap-3">
            <Image src={tick} alt="img" height={40} width={40} />
            <p className="font-bold text-2xl">
              Helping customers achieve their financial objective
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
