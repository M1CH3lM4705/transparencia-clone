import { HtmlHTMLAttributes, ReactNode } from "react"
import { twMerge } from 'tailwind-merge'

type SectionProps = HtmlHTMLAttributes<HTMLElement> & {
    children:ReactNode,
    className?:string
}
export function Section({ children, className }: SectionProps){
    return(
        <section className={twMerge("", className)}>
            {children}
        </section>
    )
}