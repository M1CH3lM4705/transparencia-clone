import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../Button";
import { MenuLink } from "../Menu/index";

type CarouselButtonMoveProps = {
  prev(): void,
  next(): void
}

export function CarouselButtonMove({ prev, next }: CarouselButtonMoveProps) {
  return (
    <div className="absolute inset-0 flex items-center justify-between p-4">
      <Button onClick={() => prev()} className="p-1 rounded-full shadow bg-white-80 text-gray-800 hover:bg-white">
        <MenuLink.Icon icon={ChevronLeft} size={40} />
      </Button>
      <Button onClick={() => next()} className="p-1 rounded-full shadow bg-white-80 text-gray-800 hover:bg-white">
        <MenuLink.Icon icon={ChevronRight} size={40} />
      </Button>
    </div>
  )
}