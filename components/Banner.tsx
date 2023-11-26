'use client'


import { Carousel } from "./Carousel/Carousel";
import { Section } from "./Section/SectionContainer";

const slides = [
  'https://transparencia.ro.gov.br/img/Home/Index/banner/banner-slider-qualidade-em-transparencia.png',
  'https://transparencia.ro.gov.br/img/Home/Index/banner/banner-slider-qualidade-informacao-fiscal-contabil-nota-a.png',
  'https://transparencia.ro.gov.br/img/Home/Index/banner/banner-slider-e-sic-informacao.png',
  'https://transparencia.ro.gov.br/img/Home/Index/banner/banner-slider-portal-do-cidadao.png',
  'https://transparencia.ro.gov.br/img/Home/Index/banner/banner-portal-slider-observat%C3%B3rio.png',
  'https://transparencia.ro.gov.br/img/Home/Index/banner/banner-slider-conheca-o-proin.png'
]

export function Banner() {


  return (

      <Section className="flex justify-center">
        <div className="w-2/3 rounded py-4 my-3">

         <Carousel slides={slides.map((s, i) => (
            <img key={i} src={s} />
          ))}/>

        </div>
      </Section>
    
  )
}