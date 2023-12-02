import { MenuLinkRoot } from "./MenuLinkRoot";
import { BookText, HelpCircle, Home, Landmark, List, User } from 'lucide-react'
import Image from 'next/image'

export function MenuPrimarioLinks() {
  return (

    <ul className="sm:md:h-auto sm:md:py-10 sm:md:flex sm:md:justify-center sm:md:items-center">

      <MenuLinkRoot className="bg-transparencia" href="/">
        <Image
          src='https://transparencia.ro.gov.br/img/shared/logo-portal-transparencia.png'
          width={191}
          height={50}
          alt=''
        />
      </MenuLinkRoot>

      <li className="text-center transition duration-[3000ms] hover:ease-in-out hover:-translate-y-1 hover:animate-bounce">
        <MenuLinkRoot className="text-zinc-500 sm:text-white p-3 gap-6 sm:md:lg:gap-1" href="/">
          <Home />
          Início
        </MenuLinkRoot>
      </li>

      <li className="relative group/dropdown">
        <div className="text-center transition duration-[3000ms] hover:ease-in-out hover:-translate-y-1 hover:animate-bounce">
          <MenuLinkRoot className="text-zinc-500 sm:text-white p-3 gap-6 sm:md:lg:gap-1" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <Landmark />
            Institucional
          </MenuLinkRoot>

        </div>
        <div className="group/dropdownlink invisible text-gray rounded border-gray-300 bg-white absolute top-[50px] w-[300px] shadow-md
            group-hover/dropdown:visible p-2" aria-labelledby="nav-4">
          <MenuLinkRoot className="p-3 hover:bg-transparencia hover:text-white" href="/institucional/orgao">Órgãos e Unidades Gestoras</MenuLinkRoot>
          <MenuLinkRoot className="p-3 hover:bg-transparencia hover:text-white" href="/institucional/estrutura-organizacional">Estrutura Organizacional</MenuLinkRoot>
          <MenuLinkRoot className="p-3 hover:bg-transparencia hover:text-white" href="/institucional/legislacao/index">Legislação</MenuLinkRoot>
          <MenuLinkRoot className="p-3 hover:bg-transparencia hover:text-white" href="/institucional/sobre">Sobre o Portal da Transparência</MenuLinkRoot>
        </div>
      </li>

      <li className="text-center transition duration-[3000ms] hover:ease-in-out hover:-translate-y-1 hover:animate-bounce">
        <MenuLinkRoot href="#" className="text-zinc-500 sm:text-white p-3 gap-6 sm:md:lg:gap-1">
          <BookText />
          Legislação
        </MenuLinkRoot>
      </li>

      <li className="text-center transition duration-[3000ms] hover:ease-in-out hover:-translate-y-1 hover:animate-bounce">
        <MenuLinkRoot className="text-zinc-500 sm:text-white p-3 gap-6 sm:md:lg:gap-1" href="#">
          <HelpCircle />
          Perguntas
        </MenuLinkRoot>
      </li>

      <li className="text-center transition duration-[3000ms] hover:ease-in-out hover:-translate-y-1 hover:animate-bounce">
        <MenuLinkRoot className="text-zinc-500 sm:text-white p-3 gap-6 sm:md:lg:gap-1" href="#">
          <List />
          Glossário
        </MenuLinkRoot>
      </li>

      <li className="text-center transition duration-[3000ms] hover:ease-in-out hover:-translate-y-1 hover:animate-bounce">
        <MenuLinkRoot className="text-zinc-500 sm:text-white p-3 gap-6 sm:md:lg:gap-1" href="#">
          <HelpCircle />
          Sobre
        </MenuLinkRoot>
      </li>

      <li className="text-center transition duration-[3000ms] hover:ease-in-out hover:-translate-y-1 hover:animate-bounce">
        <MenuLinkRoot href="#" rel="noopener" className="text-zinc-500 sm:text-white p-3 gap-6 sm:md:lg:gap-1" >
          <List />
          LGPD
        </MenuLinkRoot>
      </li>
      <li className="text-center transition duration-[3000ms] hover:ease-in-out hover:-translate-y-1 hover:animate-bounce">

        <MenuLinkRoot className="text-zinc-500 sm:text-white p-3 gap-6 sm:md:lg:gap-1" href="#">
          <User />
          Entrar
        </MenuLinkRoot>

      </li>
    </ul>
  )
}