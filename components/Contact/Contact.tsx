import { Address } from "../AddressSection/Address";
import { Section } from "../Section/SectionContainer";
import { SocialMedia } from "../SocialMedia/SocialMedia";
import { VideoInfo } from "../VideoTransp/VideoInfo";

export function Contact() {
  return (
    <Section className="sm:flex sm:justify-center sm:gap-32 sm:items-center sm:mt-[100px] sm:mb-[60px] mb-[60px]">
      <Address />
      <VideoInfo />
      <SocialMedia />
    </Section>
  )
}