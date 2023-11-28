'use client'

import ReactPlayer from "react-player";
import { Section } from "../Section/SectionContainer";
import { useEffect, useState } from "react";

export function VideoInfo() {
  const [isClient, setIsClient] = useState(false)
  const [widhtVideo, setWidthVide] = useState(420)
  useEffect(() => {
    setIsClient(true)

    if(window.screenX < 420)
      setWidthVide(360)
  }, [])

  return (isClient ?
    <Section suppressHydrationWarning={true} className="flex justify-center order-1">
      <div className="sm:shadow-2xl">
        <ReactPlayer
          url='https://transparencia.ro.gov.br/video/transparencia_tutorial.mp4'
          width={widhtVideo}
          height={240}
          controls
        />
      </div>
    </Section> : null
  )
}