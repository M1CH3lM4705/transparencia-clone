import { Address } from "../AddressSection/Address";
import { Section } from "../Section/SectionContainer";
import { SocialMedia } from "../SocialMedia/SocialMedia";
import { VideoInfo } from "../VideoTransp/VideoInfo";

export function Contact() {
  return (
    <Section className="sm:md:flex sm:md:justify-center sm:md:gap-32 sm:md:items-center sm:md:mt-[100px] sm:md:mb-[60px] mb-[60px]">
      <Address />
      <VideoInfo />
      <SocialMedia />
    </Section>
  )
}