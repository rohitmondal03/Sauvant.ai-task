type TProps = {
  className: string;
}


export default function Separator({ className }: TProps) {
  return (
    <div className={`${className} w-[2px]`} />
  )
}
