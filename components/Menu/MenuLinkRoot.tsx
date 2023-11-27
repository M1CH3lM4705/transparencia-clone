import { cn } from "@/lib/utils"
import Link, { LinkProps } from "next/link"
import { HtmlHTMLAttributes, ReactNode } from "react"

type MenuLinkRootProps = HtmlHTMLAttributes<HTMLElement> & LinkProps &{
    children: ReactNode,
}

export function MenuLinkRoot({children, href, ...rest}:MenuLinkRootProps) {
    return (
        <Link className={cn("flex items-center", rest.className)} {...rest} href={`${href}`}>
           {children}
        </Link>
    )
}