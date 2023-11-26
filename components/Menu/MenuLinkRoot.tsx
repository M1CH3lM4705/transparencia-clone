import { Url } from "next/dist/shared/lib/router/router"
import Link, { LinkProps } from "next/link"
import { ReactNode } from "react"

type MenuLinkRootProps = LinkProps &{
    children: ReactNode,
}

export function MenuLinkRoot({children, href, ...rest}:MenuLinkRootProps) {
    return (
        <Link className="flex items-center" {...rest} href={`${href}`}>
           {children}
        </Link>
    )
}