import { Facebook, Instagram, SmilePlus } from "lucide-react";
import { Section } from "../Section/SectionContainer";

export function SocialMedia() {
  return (
      <Section className="sm:md:flex sm:md:flex-col sm:md:order-2 sm:md:gap-5 sm:md:mt-0 mt-4 flex gap-4 justify-center">
        <div className="w-[41px] h-[41px] bg-[#999] flex items-center justify-center rounded-full text-white transition ease-in-out duration-[300ms] hover:scale-110 hover:shadow-sm">
          <Facebook />
        </div>
        <div className="w-[41px] h-[41px] bg-[#999] flex items-center justify-center rounded-full text-white transition ease-in-out duration-[300ms] hover:scale-110 hover:shadow-sm">
          <Instagram />
        </div>
        <div className="w-[41px] h-[41px] bg-[#999] flex items-center justify-center rounded-full text-white transition ease-in-out duration-[300ms] hover:scale-110 hover:shadow-sm">
          <SmilePlus />
        </div>
      </Section>
    )
}