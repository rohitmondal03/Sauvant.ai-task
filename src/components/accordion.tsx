"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react";


type TProps = {
  ques: string;
  answer: string;
}


export default function Accordion({ ques, answer }: TProps) {
  const [isActive, setActive] = useState(false);

  return (
    <section className={`space-y-5 px-5 py-8 rounded-2xl transition-all duration-300 ease-out shadow-[0_0_20px] shadow-zinc-200 ${isActive ? "bg-cyan-100" : null}`}>
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={() => setActive(isActive ? false : true)}
      >
        <p className="font-bold text-2xl">
          {ques}
        </p>
        {isActive ? <Minus className="scale-150" /> : <Plus className="scale-150" />}
      </div>

      {isActive &&
        <div>
          {answer}
        </div>
      }
    </section>
  )
}
