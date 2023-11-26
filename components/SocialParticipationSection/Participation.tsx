import { Button } from "../Button";
import { DisplayType } from "../Display/DisplayType";
import { Section } from "../Section/SectionContainer";

export function Participation() {
  return (
    <Section className="flex items-center justify-center bg-fixed bg-parallax bg-cover min-h-[400px]">
      <div className="flex items-center flex-col gap-5">
        <DisplayType type={'h2'} className="text-white text-4xl font-bold">Participação Social</DisplayType>
        <Button className="bg-[#FAB533] rounded-full py-2 px-14 text-white shadow-md hover:shadow-[#FAB533]">
          Saiba mais
        </Button>
      </div>
    </Section>
  )
}