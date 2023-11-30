import { MenuPrimarioLinks } from './MenuPrimario.Link'
import { MenuToggle } from './MenuToggle'

export function MenuPrimario() {
  const imageIcon = 'https://transparencia.ro.gov.br/img/shared/logo-portal-transparencia.png'
  return (
    <nav className="bg-transparencia shadow-md" >
      <div className="sm:mx-auto flex items-center px-2 h-16 sm:px-6 lg:px-8 sm:flex sm:justify-center sm:max-[1105px]:items-center sm:max-[1105px]:justify-start">

        <div className="sm:md:relative sm:md:flex sm:md:items-center sm:md:justify-between hidden">

          <MenuPrimarioLinks />
        </div>
        <MenuToggle />
      </div>

    </nav>
  )
}