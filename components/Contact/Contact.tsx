import { Address } from "../AddressSection/Address";
import { Section } from "../Section/SectionContainer";
import { SocialMedia } from "../SocialMedia/SocialMedia";
import { VideoInfo } from "../VideoTransp/VideoInfo";

export function Contact() {
  return (
    <Section className="sm:md:lg:flex sm:md:lg:justify-center sm:md:lg:gap-32 sm:md:lg:items-center sm:md:lg:mt-[100px] sm:md:lg:mb-[60px] mb-[60px]">
      <Address />
      <VideoInfo />
      <SocialMedia />
    </Section>
  )
}