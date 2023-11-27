import { Plus, Equal, Minus, Network, Phone, Hand, Accessibility } from 'lucide-react'
import { MenuLink } from './index'

export function MenuAcessibilidade() {
    return (
        <div className="h-12 flex items-center justify-end px-2">
            <nav className="flex items-center justify-end gap-5">

                <MenuLink.Root href={'#'}>
                    <MenuLink.Icon icon={Network} size={14} />
                    <MenuLink.Text className='text-[11px] max-md:hidden' text={'MAPA DO SITE'} />
                </MenuLink.Root>

                <MenuLink.Root href={'#'}>
                    <MenuLink.Icon icon={Phone} size={14} />
                    <MenuLink.Text className='text-[11px] max-md:hidden' text={'CONTATOS'} />
                </MenuLink.Root>


                <MenuLink.Root href={'#'}>
                    <MenuLink.Icon icon={Accessibility} size={14} />
                    <MenuLink.Text className='text-[11px] max-md:hidden' text={'ACESSIBILIDADE'} />
                </MenuLink.Root>

                <MenuLink.Root href={'#'}>
                    <MenuLink.Text className='sm:text-[11px] text-[16px]' text={'A'}>
                    </MenuLink.Text>
                    <MenuLink.Icon icon={Equal} size={14} />
                </MenuLink.Root>

                <MenuLink.Root href={'#'}>
                    <MenuLink.Text className='sm:text-[11px] text-[16px]' text={'A'}>
                    </MenuLink.Text>
                    <MenuLink.Icon icon={Plus} size={14} />
                </MenuLink.Root>

                <MenuLink.Root href={'#'}>
                    <MenuLink.Text className='sm:text-[11px] text-[16px]' text={'A'}>
                    </MenuLink.Text>
                    <MenuLink.Icon icon={Minus} size={14} />
                </MenuLink.Root>

                <MenuLink.Root href={'#'}>
                    <MenuLink.Icon icon={Phone} size={14} />
                    <MenuLink.Text className='text-[11px] max-md:hidden' text={'ALTRO CONTRASTE'} />
                </MenuLink.Root>

                <MenuLink.Root href={'#'}>
                    <MenuLink.Icon icon={Hand} size={14} />
                    <MenuLink.Text className='text-[11px] max-md:hidden' text={'LIBRAS'} />
                </MenuLink.Root>
            </nav>
        </div>
    )
}