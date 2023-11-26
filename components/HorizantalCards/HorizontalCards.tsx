import { Section } from "../Section/SectionContainer";
import { HorizontalCard } from "./HorizontalCard";
import { horizontalInventory } from "@/lib/HorizontalSection/horizontalInventory";

export function HorizontalCards() {
  return (
    <Section className="bg-transparencia grid grid-cols-6 gap-8 mt-16 p-7">
      {(horizontalInventory.map((props)=>(
        <HorizontalCard key={props._id} {...props} />
      )))}
    </Section>
  )
}