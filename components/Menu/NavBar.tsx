'use client'
import { MenuToggleProvider } from "@/contexts/MenuToggleContext";
import { MenuAcessibilidade } from "./MenuAcessibilidade";
import { MenuPrimario } from "./MenuPrimario";
import { MenuResponsive } from "./MenuResponsive";

export function NavBar() {

  
  return (
    <div className="sticky top-0 z-40 bg-[#f1f5f9]">
      <MenuAcessibilidade />
      <MenuToggleProvider>
        <MenuPrimario />
        <MenuResponsive />
      </MenuToggleProvider>
    </div>
  )
}