import Image from 'next/image'
import {BookText, HelpCircle, Home, Landmark, List, User} from 'lucide-react'
import { MenuLinkRoot } from './MenuLinkRoot'

export function MenuPrimario() {
    const imageIcon = 'https://transparencia.ro.gov.br/img/shared/logo-portal-transparencia.png'
    return (
        <nav className="bg-transparencia shadow-md sticky" style={{ marginBottom: "0px", zIndex: "1" }}>
            <div className="mx-auto mas-w-7x1 px-2 sm:px-6 lg:px-8 flex justify-center">

                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-white-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                            <span className="absolute -inset-0.5"></span>
                            <span className="sr-only">Open main menu</span>

                            
                        </button>
                    </div>

                    <div className="" id="navbarNavDropdown">
                        <ul className="flex flex-shrink-0 items-center">

                            <MenuLinkRoot href="/">
                                <Image
                                src='https://transparencia.ro.gov.br/img/shared/logo-portal-transparencia.png'
                                width={191}
                                height={50}
                                alt=''
                                />
                            </MenuLinkRoot>

                            <li className="nav-item dropdown text-center hover:ease-in hover:-translate-y-1 hover:animate-bounce">
                                <a className="nav-link  hvr-bob  text-white flex p-3 gap-1" href="/">
                                    <Home />
                                    Início
                                </a>
                            </li>

                            <li className="nav-item dropdown text-center menu_horizontal--lista hover:ease-in hover:-translate-y-1 hover:animate-bounce">
                                <a className="nav-link dropdown-toggle hvr-bob text-white flex p-3 gap-1" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <Landmark />
                                    Institucional
                                </a>
                                {/* <div className="dropdown-menu text-center" aria-labelledby="nav-4">
                                    <a className="dropdown-item" href="/institucional/orgao">Órgãos e Unidades Gestoras</a>
                                    <a className="dropdown-item" href="/institucional/estrutura-organizacional">Estrutura Organizacional</a>
                                    <a className="dropdown-item" href="/institucional/legislacao/index">Legislação</a>
                                    <a className="dropdown-item" href="/institucional/sobre">Sobre o Portal da Transparência</a>
                                </div> */}
                            </li>

                            <li className="nav-item dropdown text-center hover:ease-in hover:-translate-y-1 hover:animate-bounce">
                                <a href="/Institucional/Legislacao/LegislacaoPortal" className="nav-link  hvr-bob text-white flex p-3 gap-1">
                                    <BookText />
                                    Legislação
                                </a>
                            </li>

                            <li className="nav-item dropdown text-center hover:ease-in hover:-translate-y-1 hover:animate-bounce">
                                <a target="_self" className="nav-link  hvr-bob text-white flex p-3 gap-1" href="#">
                                    <HelpCircle />
                                    Perguntas
                                </a>
                            </li>

                            <li className="nav-item dropdown text-center hover:ease-in hover:-translate-y-1 hover:animate-bounce">
                                <a target="_self" className="nav-link  hvr-bob text-white flex p-3 gap-1" href="#">
                                    <List />
                                    Glossário
                                </a>
                            </li>

                            <li className="nav-item dropdown text-center hover:ease-in hover:-translate-y-1 hover:animate-bounce">
                                <a className="nav-link  hvr-bob text-white flex p-3 gap-1" href="#">
                                    <HelpCircle />
                                    Sobre
                                </a>
                            </li>

                            <li className="nav-item dropdown text-center hover:ease-in hover:-translate-y-1 hover:animate-bounce">
                                <a href="https://rondonia.ro.gov.br/lgpd/" rel="noopener" className="nav-link  hvr-bob text-white flex p-3 gap-1" target="_blank">
                                    <List />
                                    LGPD
                                </a>
                            </li>



                            <li className="nav-item dropdown text-center text-white hover:ease-in hover:-translate-y-1 hover:animate-bounce">

                                <a className="nav-link  hvr-bob flex p-3 gap-1" href="#">
                                    <User />
                                    Entrar
                                </a>

                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}