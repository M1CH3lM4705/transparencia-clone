import { useContext } from "react";
import { MenuPrimarioLinks } from "./MenuPrimario.Link";
import { MenuToggleContext } from "@/contexts/MenuToggleContext";
import { cn } from "@/lib/utils";

export function MenuResponsive(){
    const { active } = useContext(MenuToggleContext)
    
    return(
        <aside className={cn(`fixed w-[50%] top-0 right-0 overflow-y-auto sm:md:translate-x-full opacity-0 sm:md:opacity-0
            transition duration-[300ms] ease-in-out`, `${active ? 'opacity-100 translate-x-0': 'translate-x-full' }`)}>
            <nav className="bg-white h-screen">
                <MenuPrimarioLinks />
            </nav>
        </aside>
    )
}