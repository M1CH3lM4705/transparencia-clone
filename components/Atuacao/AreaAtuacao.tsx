import { LucideIcon } from "lucide-react";
import { MenuLink } from "../Menu";
import { DisplayType } from "../Display/DisplayType";
import { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type AreaAtuacaoProps = HTMLAttributes<HTMLElement> &{
  icon:LucideIcon,
  text:string,
  value:string
}

export function AreaAtuacao({icon, text, value, ...rest}: AreaAtuacaoProps) {
  
  return (
      <div 
        className=
        {cn("dashed-area", rest.className)}>
        <MenuLink.Icon icon={icon} size={70} color="#059DC6" />
        <DisplayType type={'h5'}>
          <DisplayType type={'strong'} className="text-[#13528B]">{text}</DisplayType>
        </DisplayType>
        <DisplayType type={'p'} className="text-sm">Valor empenhado</DisplayType>
        <DisplayType type={'span'} className="text-[#059DC6]">{value}</DisplayType>
      </div>
    )
}