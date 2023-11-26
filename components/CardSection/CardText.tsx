import { cn } from "@/lib/utils"
import { HtmlHTMLAttributes } from "react"

type CardTextProps = HtmlHTMLAttributes<HTMLElement> &{
  children:React.ReactNode
}

export function CardText({ children, ...rest }:CardTextProps) {
  return (
    <div className={cn("h-full flex items-center justify-center bg-white text-sm text-center", rest.className)} >
      {children}
    </div>
  )
}