import { MenuAcessibilidade } from "./MenuAcessibilidade";
import { MenuPrimario } from "./MenuPrimario";

export function NavBar() {
  return (
    <div className="sticky top-0 z-40 bg-[#f1f5f9]">
      <MenuAcessibilidade />
      <MenuPrimario />
    </div>
  )
}