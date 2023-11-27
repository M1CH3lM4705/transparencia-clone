import { MapPin, MousePointer, Phone } from "lucide-react";
import { DisplayType } from "../Display/DisplayType";
import { Section } from "../Section/SectionContainer";
import { MenuLink } from "../Menu/index";

export function Address() {
  return (
    <Section className="sm:flex sm:flex-col sm:order-3 sm:border-l sm:drop-shadow sm:px-[29px] text-center">
      <div className="sm:flex sm:items-center sm:gap-1">
        <DisplayType type={'h6'} className="text-[11px] sm:text-[12px] sm:[&>*:nth-child(1)]:block [&>*:nth-child(1)]:hidden sm:gap-6 uppercase py-3 sm:flex sm:items-center sm:text-transparencia">
          <MenuLink.Icon icon={MapPin} size={24} color="black" />
          Palácio Rio Madeira
        </DisplayType>

        <DisplayType type={'h6'} className="text-[11px] sm:text-[12px] sm:text-transparencia uppercase py-3">Avenida Farquar 2986, Bairro Pedrinhas</DisplayType>
      </div>

      <DisplayType type={'h6'} className="text-[11px] sm:text-[12px] sm:[&>*:nth-child(1)]:block [&>*:nth-child(1)]:hidden gap-6 uppercase py-3 sm:flex sm:items-center">
        <MenuLink.Icon icon={Phone} size={24} />
        (69)3212-9412
      </DisplayType>

      <DisplayType type={'h6'} className="text-[11px] sm:text-[12px] sm:[&>*:nth-child(1)]:block [&>*:nth-child(1)]:hidden gap-6 uppercase py-3 sm:flex sm:items-center">
        <MenuLink.Icon icon={MousePointer} size={24} />
        transparencia@contraladoria.ro.gov.br
      </DisplayType>
    </Section>
  )
}