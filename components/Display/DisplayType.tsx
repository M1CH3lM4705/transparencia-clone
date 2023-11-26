import { ElementType, HTMLAttributes, ReactNode } from "react"

type DisplayTypeProps = HTMLAttributes<HTMLElement> &{
    type:ElementType,
    children?:ReactNode
}

export function DisplayType({type: Type, children, ...rest}:DisplayTypeProps){
    return(
        <Type {...rest} >
            {children}
        </Type>
    )
}