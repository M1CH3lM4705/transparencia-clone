import { cn } from "@/lib/utils"
import Image from "next/image"
import { HtmlHTMLAttributes } from "react"

type CardProps = HtmlHTMLAttributes<HTMLElement> &{
  imageUrl: string,
  children:React.ReactNode
  width?:number,
  heigth?:number
}

export function Card({ imageUrl, children, width=167, heigth=122, ...rest }: CardProps) {

  return (
    <div className={cn("flex flex-col rounded-[10px] transition hover:scale-110 hover:shadow-2xl", rest.className)}>
      <Image
        src={imageUrl}
        alt=''
        width={width}
        height={heigth}
      />
      {children}
    </div>
  )
}