import Image from "next/image";
import { ArrowDownCircle, CheckSquare, SmartphoneNfc, Check } from "lucide-react";

import Separator from "./separator";
import Button from "./button";
import waveLeftImg from "../../public/assets/wave-left.png"
import waveRightImg from "../../public/assets/wave-right.png"


export default function LoanStepsSection() {
  return (
    <section className="bg-primary-col py-16 px-20 text-white text-center space-y-16 relative">
      <h1 className="font-bold text-2xl">
        Loan in 3 Simple Steps
      </h1>

      <section className="flex items-start justify-between">
        <div className="flex flex-col justify-between items-center gap-y-5">
          <div className="p-3 rounded-lg border-zinc-400 border scale-125">
            <ArrowDownCircle />
          </div>
          <p className="text-xl">
            Download the CreditSea <br /> app, complete your profile.
          </p>
        </div>

        <Separator className="h-40 bg-cyan-600 rounded-2xl" />

        <div className="flex flex-col justify-between items-center gap-y-5">
          <div className="p-3 rounded-lg border-zinc-400 border scale-125">
            <CheckSquare />
          </div>
          <p className="text-xl">
            Upload your KYC, set up <br /> automatic repayments from your <br /> bank account
          </p>
        </div>

        <Separator className="h-40 bg-cyan-600 rounded-2xl" />

        <div className="flex flex-col justify-between items-center gap-y-5">
          <div className="p-3 rounded-lg border-zinc-400 border scale-125">
            <SmartphoneNfc />
          </div>
          <p className="text-xl">
            User CreditSea to pay when <br /> making payments at 125,000 <br /> offline and 15,000
          </p>
        </div>

        <Image
          src={waveLeftImg}
          alt="wave"
          height={700}
          width={700}
          className="absolute bottom-0 left-0"
        />

        <Image
          src={waveRightImg}
          alt="wave"
          height={700}
          width={700}
          className="absolute bottom-0 right-0"
        />
      </section>

      <>
        <Button
          isArrow={true}
          title="Explore Now"
          type="primary"
          className="py-4 px-16 z-10"
        />
      </>
    </section>
  )
}
