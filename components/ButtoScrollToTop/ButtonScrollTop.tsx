'use client'

import { Button } from "../Button";
import { MenuLink } from "../Menu";
import { ArrowUp } from "lucide-react";
import { useButtonScroll } from "@/hooks/ButtonScroll/useButtonScroll";

export function ButtonScrollTop() {
  const {showBtn, goToTop} = useButtonScroll();

  return (showBtn ?
    <Button onClick={goToTop} className="w-[41px] h-[41px] rounded-full bg-secondary fixed bottom-[25px] right-[25px]">
      <MenuLink.Icon icon={ArrowUp} size={40} color="white" />
    </Button> : null
  )
}