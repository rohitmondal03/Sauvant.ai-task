import React from 'react'

type TProps = {
  type: "primary" | "secondary";
  title: string;
  className?: string;
  isArrow: boolean;
}


export default function Button({ type, title, isArrow, className }: TProps) {
  return (
    <button className={`p-3 rounded-lg font-bold ${type === "primary" ? "text-primary-col bg-white border-primary-col border-2" : "text-white bg-primary-col"} ${className}`}>
      {title} {isArrow &&
        <span className='ml-3'>&#8594;</span>
      }
    </button>
  )
}
