import { DisplayType } from "../Display/DisplayType";
import { Section } from "../Section/SectionContainer";

export function Address() {
  return (
    <Section className="flex flex-col items-center mt-[22px]">
      <DisplayType type={'h6'} className="text-[11px] uppercase py-3">Palácio Rio Madeira</DisplayType>
      <DisplayType type={'h6'} className="text-[11px] uppercase py-3">Avenida Farquar 2986, Bairro Pedrinhas</DisplayType>
      <DisplayType type={'h6'} className="text-[11px] uppercase py-3">(69)3212-9412</DisplayType>
      <DisplayType type={'h6'} className="text-[11px] uppercase py-3">transparencia@contraladoria.ro.gov.br</DisplayType>
    </Section>
  )
}