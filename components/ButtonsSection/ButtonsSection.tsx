'use client'

import { Section } from "../Section/SectionContainer";
import { ButtonSection } from "./ButtonSection";
import { ExternalLink } from "lucide-react";

export function ButtonsSection() {
  return (
    <Section className="bg-white flex justify-center sm:flex sm:items-center sm:justify-center py-10 sm:h-auto h-[670px]">
      <div className="sm:flex sm:flex-wrap sm:w-4/5 sm:justify-center sm:items-center sm:gap-10 flex flex-wrap justify-center">
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