import { Facebook, Instagram, SmilePlus } from "lucide-react";
import { Section } from "../Section/SectionContainer";

export function SocialMedia() {
  return (
      <Section className="flex justify-center my-5 gap-4">
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