import { Menu } from "lucide-react";
import { MenuLink } from "./index";

export function MenuToggle(){
    return(
        <MenuLink.Root className="min-[1105px]:hidden" href='/'>
            <MenuLink.Icon icon={Menu} color='white' />
        </MenuLink.Root>
    )
}