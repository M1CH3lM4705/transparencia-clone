'use client'

import { createContext, useState } from "react"

type MenuToogleType = {
  active:boolean,
  toggleMenu: () => void
}

export const MenuToggleContext = createContext({} as MenuToogleType);

export function MenuToggleProvider({children}: {children: React.ReactNode}) {
  const [active, setActive] = useState(false)

  const toggleMenu = () => {
    setActive(state => !state)
  }

  return (
    <MenuToggleContext.Provider value={{ active, toggleMenu }}>
      {children}
    </MenuToggleContext.Provider>
  )
}