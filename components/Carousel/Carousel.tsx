'use client'

import { ReactNode, useEffect } from "react"
import { useCarousel } from "./cauroselHook"
import { CarouselButtonMove } from "./CarouselButtonMove"
import { CarouselPill } from "./CarouselPill"

type CarouselProps = {
  slides: Array<ReactNode>
  autoSlide?:Boolean,
  autoSlideInterval?:number
}

export function Carousel({ slides, autoSlide=true, autoSlideInterval=5000 }: CarouselProps) {

  const {prev, next, curr } = useCarousel(slides)

  useEffect(() => {
    if(!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [])

  return (
    <div className="overflow-hidden relative">
      <div className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)`}}
      >
        {slides}
      </div>
      <CarouselButtonMove prev={prev} next={next} />
      <CarouselPill slides={slides} curr={curr} />
    </div>
  )
}