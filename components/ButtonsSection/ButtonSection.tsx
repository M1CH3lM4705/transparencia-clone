'use client'

import { Button } from "../Button";
import { MenuLink } from "../Menu";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

type ButtonSectionProps = {
  text:string,
  icon:LucideIcon
  className:string
}

export function ButtonSection({ text, icon, className }:ButtonSectionProps) {
  
  return (
    <div className="my-0 mx-10 w-[257px]">
      <Button className={cn("h-10 w-full py-2 px-8 flex justify-center items-center text-sm gap-2 uppercase text-white rounded-full transition ease-in-out delay-150 hover:scale-110", className)}>
        {text}
        {icon !== undefined && <MenuLink.Icon icon={icon} size={14} color="white" />}
      </Button>
    </div>
  )
}