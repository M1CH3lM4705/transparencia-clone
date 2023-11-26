import { ElementType } from "react"

type MenuLinkProps = {
    icon:ElementType
    size?:Number,
    color?:string
}

export function MenuLinkIcon({icon:Icon, size, color}:MenuLinkProps){
    return(
        <Icon size={size} color={color}/>
    )
}