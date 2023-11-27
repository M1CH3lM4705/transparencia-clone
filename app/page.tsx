import { AcessoInformacao } from "@/components/AccessInfomationSection/AcessoInformacao";
import { AreasAtuacao } from "@/components/Atuacao/AreasAtuacao";
import { Banner } from "@/components/Banner";
import { ButtonsSection } from "@/components/ButtonsSection/ButtonsSection";
import { SectionCards } from "@/components/CardSection/SectionCards";
import { Contact } from "@/components/Contact/Contact";
import { HorizontalCards } from "@/components/HorizantalCards/HorizontalCards";
import { SearchAll } from "@/components/SearchAll";

import { Participation } from "@/components/SocialParticipationSection/Participation";



export default function Home() {
  return (
    <main className="" suppressHydrationWarning={true}>
      <SearchAll />
      <Banner />
      <AreasAtuacao />
      <HorizontalCards />
      <ButtonsSection />
      <SectionCards />
      <Participation />
      <AcessoInformacao />
      <Contact />
    </main>
  )
}
