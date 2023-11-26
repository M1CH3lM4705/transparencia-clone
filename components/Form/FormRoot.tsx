import { ReactNode } from "react"
import { twMerge } from 'tailwind-merge'

type FormRootProps = {
    children?: ReactNode,
    className?:string
}

export function FormRoot({ children, className }:FormRootProps) {
    return (
        <form className={twMerge("flex items-center justify-center", className)}>
           {children}
        </form>
    )
}