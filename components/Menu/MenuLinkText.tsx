import { cn } from "@/lib/utils"
import { HtmlHTMLAttributes, ReactNode } from "react"

type MenuLinkTextProps = HtmlHTMLAttributes<HTMLSpanElement> &{
    text:string,
    children?:ReactNode
}
export function MenuLinkText({text, children, ...rest}:MenuLinkTextProps) {
    return (
        <span className={cn("flex items-center", rest.className)} {...rest}>
            {text} {children}
        </span>
    )
}