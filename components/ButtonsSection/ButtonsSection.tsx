'use client'

import { Section } from "../Section/SectionContainer";
import { ButtonSection } from "./ButtonSection";
import { ExternalLink } from "lucide-react";

export function ButtonsSection() {
  return (
    <Section className="bg-white h-64 max-[1091px]:h-auto max-[1091px]:py-10 flex justify-center items-center">
      <div className="flex flex-wrap w-5/5 justify-center gap-10">
        {/* {(
          invetoryButtonSection.map(({_id, text, icon, className}) => (
            <ButtonSection key={_id} text={text} icon={icon!} className={className} />
          ))
        )} */}
        <ButtonSection text="Agenda de Autoridades" icon={ExternalLink} className="bg-primary" />
        <ButtonSection text="Comitê de Transparência" icon={undefined!} className="bg-secondary" />
        <ButtonSection text="Compras Covida" icon={undefined!} className="bg-secondary-foreground" />
        <ButtonSection text="Organograma Estadual" icon={undefined!} className="bg-primary" />
        <ButtonSection text="Dados Abertos e APIS" icon={ExternalLink} className="bg-secondary-foreground" />
        <ButtonSection text="Site do Governo" icon={ExternalLink} className="bg-primary" />
        <ButtonSection text="Programa de Integridade" icon={undefined!} className="bg-secondary" />
      </div>
    </Section>
  )
}