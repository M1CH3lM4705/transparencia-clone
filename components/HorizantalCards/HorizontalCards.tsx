import { Section } from "../Section/SectionContainer";
import { HorizontalCard } from "./HorizontalCard";
import { horizontalInventory } from "@/lib/HorizontalSection/horizontalInventory";

export function HorizontalCards() {
  return (
    <Section className="bg-transparencia grid grid-cols-6 gap-8 mt-16 p-7 max-[1300px]:grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
      {(horizontalInventory.map((props)=>(
        <HorizontalCard key={props._id} {...props} />
      )))}
    </Section>
  )
}