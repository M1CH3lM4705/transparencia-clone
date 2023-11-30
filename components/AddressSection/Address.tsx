import { MapPin, MousePointer, Phone } from "lucide-react";
import { DisplayType } from "../Display/DisplayType";
import { Section } from "../Section/SectionContainer";
import { MenuLink } from "../Menu/index";

export function Address() {
  return (
    <Section className="sm:md:lg:flex sm:md:lg:flex-col sm:md:lg:order-3 sm:md:lg:border-l sm:md:lg:drop-shadow sm:md:lg:px-[29px] text-center">
      <div className="sm:md:flex sm:md:lg:items-center sm:md:gap-1">
        <DisplayType type={'h6'} className="text-[11px] sm:md:lg:text-[12px] sm:md:lg:[&>*:nth-child(1)]:block [&>*:nth-child(1)]:hidden sm:md:gap-6 uppercase py-3 sm:md:lg:flex sm:md:lg:items-center sm:md:lg:text-transparencia">
          <MenuLink.Icon icon={MapPin} size={24} color="black" />
          Palácio Rio Madeira
        </DisplayType>

        <DisplayType type={'h6'} className="text-[11px] sm:md:lg:text-[12px] sm:md:lg:text-transparencia uppercase py-3">Avenida Farquar 2986, Bairro Pedrinhas</DisplayType>
      </div>

      <DisplayType type={'h6'} className="text-[11px] sm:md:text-[12px] sm:md:lg:[&>*:nth-child(1)]:block [&>*:nth-child(1)]:hidden gap-6 uppercase py-3 sm:md:flex sm:md:items-center">
        <MenuLink.Icon icon={Phone} size={24} />
        (69)3212-9412
      </DisplayType>

      <DisplayType type={'h6'} className="text-[11px] sm:md:text-[12px] sm:md:lg:[&>*:nth-child(1)]:block [&>*:nth-child(1)]:hidden gap-6 uppercase py-3 sm:md:flex sm:md:items-center">
        <MenuLink.Icon icon={MousePointer} size={24} />
        transparencia@contraladoria.ro.gov.br
      </DisplayType>
    </Section>
  )
}