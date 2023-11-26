import { ReactNode } from "react"

type CarouselPillProps = {
    slides:Array<ReactNode>,
    curr:number
}

export function CarouselPill({slides, curr}:CarouselPillProps) {
    return (
        <div className="absolute bottom-4 right-0 left-0">
            <div className="flex items-center justify-center gap-2">
                {slides.map((_, i) => (
                    <div key={i} className={`
              transition-all w-3 h-3 bg-white rounded
              ${curr === i ? "p-2" : "bg-opacity-50"}
            `}
                    />
                ))}
            </div>
        </div>
    )
}