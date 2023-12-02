import { cn } from "@/lib/utils"
import Link, { LinkProps } from "next/link"
import { AnchorHTMLAttributes, HtmlHTMLAttributes, ReactNode } from "react"

type MenuLinkRootProps = AnchorHTMLAttributes<HTMLElement> & LinkProps &{
    children: ReactNode,
    className?:string
}

export function MenuLinkRoot({children, href, className, ...rest}:MenuLinkRootProps) {
    console.log(href)
    return (
        <Link className={cn("flex items-center", className)} {...rest} href={`${href}`}>
           {children}
        </Link>
    )
}