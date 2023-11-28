import { Section } from "../Section/SectionContainer";
import { AreaAtuacao } from "./AreaAtuacao";
import { invetory } from "@/lib/AreaAtuacao/areasDeAtuacao";
import { DisplayType } from "../Display/DisplayType";

export function AreasAtuacao() {
  
  return (
    <Section className="flex flex-col px-10 gap-8 max-lg:px-0">
      <div className="flex-col self-center">
        <DisplayType type={'h3'} className="text-[#13528B] text-center font-bold text-2xl">
          <DisplayType type={'strong'} className="max-sm:text-[16px]">{'ÁREA DE ATUAÇÃO'}</DisplayType>
        </DisplayType>
        <DisplayType type={'p'} className="text-sm max-sm:text-[12px]">
          {'Gastos do governo no ano corrente por área de atuação'}
        </DisplayType>
      </div>
      <div className="flex justify-center w-full overflow-x-auto gap-5 sm:md:justify-between sm:md:gap-6 sm:md:overflow-hidden sm:md:relative">
        {(invetory.map(({ _id, icon, text, value, className }) => (

          <AreaAtuacao className={_id !== 5 ? className : ''} key={_id} icon={icon!} text={text} value={value} />

        )))}
        
      </div>

    </Section>
  )
}