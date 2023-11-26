import { AcessoInformacao } from "@/components/AccessInfomationSection/AcessoInformacao";
import { Address } from "@/components/AddressSection/Address";
import { AreasAtuacao } from "@/components/Atuacao/AreasAtuacao";
import { Banner } from "@/components/Banner";
import { ButtonsSection } from "@/components/ButtonsSection/ButtonsSection";
import { SectionCards } from "@/components/CardSection/SectionCards";
import { HorizontalCards } from "@/components/HorizantalCards/HorizontalCards";
import { SearchAll } from "@/components/SearchAll";
import { SocialMedia } from "@/components/SocialMedia/SocialMedia";
import { Participation } from "@/components/SocialParticipationSection/Participation";
import { VideoInfo } from "@/components/VideoTransp/VideoInfo";


export default function Home() {
  return (
    <main suppressHydrationWarning={true}>
      <SearchAll />
      <Banner />
      <AreasAtuacao />
      <HorizontalCards />
      <ButtonsSection />
      <SectionCards />
      <Participation />
      <AcessoInformacao />
      <Address />
      <VideoInfo />
      <SocialMedia />
    </main>
  )
}
