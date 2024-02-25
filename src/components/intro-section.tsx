import Image from "next/image";
import { Zap, Banknote, Timer } from "lucide-react";

import Separator from "./separator";
import Button from "./button";
import girlImg from "../../public/assets/pexels.png";
import dottedImg from "../../public/assets/dotted.png"
import bigElipse from "../../public/assets/big-ellipse.png"
import smallElipse from "../../public/assets/small-elipse.png"


export default function IntroSection() {
  return (
    <section className="flex justify-between">
      <div className="pt-24 pb-10 px-16">
        <div className="space-y-7">
          <h1 className="capitalize text-4xl font-bold">
            Simplify your Finances, amplify your life
          </h1>

          <p className="text-xl text-zinc-500 leading-7">
            Embark on your financial journey with CreditSea. We're here to <br /> support your need & needs.
          </p>
        </div>

        <div className="my-10 flex justify-start items-center gap-16">
          <div className="flex items-center justify-center gap-4">
            <div className="rounded-full p-3 text-orange-500 bg-orange-100" >
              <Zap />
            </div>
            <p className="font-bold">
              Transfer to <br /> bank in seconds
            </p>
          </div>

          <div className="flex items-center justify-center gap-4">
            <div className="rounded-full p-3 text-orange-500 bg-orange-100" >
              <Banknote />
            </div>
            <p className="font-bold">
              Cash without <br /> collateral
            </p>
          </div>

          <div className="flex items-center justify-center gap-4">
            <div className="rounded-full p-3 text-orange-500 bg-orange-100" >
              <Timer />
            </div>
            <p className="font-bold">
              Repay in <br /> 3-36 months
            </p>
          </div>
        </div>

        <>
          <Button
            title="Get Started Now"
            type="secondary"
            isArrow={true}
            className="py-5 px-12 my-10"
          />
        </>

        <div className="mt-10 flex justify-start items-center gap-x-10">
          <div className="text-zinc-500">
            <p className="text-2xl font-bold">
              500k +
            </p>

            <p>
              Active Users
            </p>
          </div>

          <Separator className="h-16 bg-zinc-400" />

          <div className="space-y-2">
            <div className="flex">
              <Image
                src={"https://avatars.githubusercontent.com/u/124599?v=4"}
                alt="img"
                height={40}
                width={40}
                className="rounded-full"
              />
              <Image
                src={"https://avatars.githubusercontent.com/u/107113353?v=4"}
                alt="img"
                height={40}
                width={40}
                className="rounded-full -ml-3"
              />
              <Image
                src={"https://avatars.githubusercontent.com/u/124599?v=4"}
                alt="img"
                height={40}
                width={40}
                className="rounded-full -ml-3"
              />
              <Image
                src={"https://avatars.githubusercontent.com/u/107113353?v=4"}
                alt="img"
                height={40}
                width={40}
                className="rounded-full -ml-3"
              />
            </div>

            <p className="text-zinc-500">
              Used our services
            </p>
          </div>

          <Separator className="h-16 bg-zinc-400" />

          <div className="text-primary-col space-y-1">
            <h1 className="font-bold text-3xl">
              FAQ <span className='ml-3'>&#8594;</span>
            </h1>

            <p>
              Get Answers Here!
            </p>
          </div>
        </div>
      </div>


      <div className="relative">
        <Image
          src={girlImg}
          alt="gitl img"
          height={0}
          width={600}
        />

        <Image
          src={dottedImg}
          alt="img"
          height={150}
          width={200}
          className="absolute top-[55%] left-[15%]"
        />

        <Image
          src={bigElipse}
          alt="elipse"
          height={1000}
          width={1000}
          className="absolute top-80 right-20 -z-10"
        />

        <Image
          src={smallElipse}
          alt="elipse"
          height={500}
          width={500}
          className="absolute top-96 right-28 -z-10"
        />


        <div className="absolute top-[42%] left-[1%] shadow-[0px_0px_20px] shadow-zinc-300 rounded-2xl bg-white px-8 py-5">
          <p className="text-green-500 text-xl font-bold">
            &#8377; 1,00,000
          </p>
          <p className="font-bold text-zinc-500">
            Credit Received
          </p>
        </div>
      </div>
    </section>
  )
}
