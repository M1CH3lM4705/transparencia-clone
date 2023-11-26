'use client'

import ReactPlayer from "react-player";
import { Section } from "../Section/SectionContainer";
import { useEffect, useState } from "react";

export function VideoInfo() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  },[])

  return (isClient ?
    <Section suppressHydrationWarning={true} className="flex justify-center">
      <ReactPlayer 
        url='https://transparencia.ro.gov.br/video/transparencia_tutorial.mp4'
        width={420}
        height={240}
        controls
      />
    </Section> : null
  )
}