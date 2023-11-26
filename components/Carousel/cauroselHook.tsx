import { ReactNode, useState } from "react"

  

export const useCarousel = (slides:Array<ReactNode>) => {
    const [curr, setCurr ] = useState(0);

    const prev = () =>
        setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));

    const next = () => 
        setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1))

     return {
        prev,
        next,
        curr
     }   
}