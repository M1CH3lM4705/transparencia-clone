'use client'

import { Menu, X } from "lucide-react";
import { MenuLink } from "./index";

import { useContext } from "react";
import { MenuToggleContext } from "@/contexts/MenuToggleContext";

export function MenuToggle() {
  const { active, toggleMenu } = useContext(MenuToggleContext)

  return (
    <MenuLink.Root onClick={toggleMenu} className="min-[1105px]:hidden" href='/'>
      {(active 
        ? <MenuLink.Icon icon={X} color='white' />    
        : <MenuLink.Icon icon={Menu} color='white' />)}
    </MenuLink.Root>
  )
}