import { DisplayType } from "./Display/DisplayType";

export function Footer(){
    return(
        <footer className="bg-transparencia min-h-[57px] flex justify-center text-white items-center">
            <DisplayType type={'p'}>Diretoria de Transparência e Governo Aberto | CGE-RO</DisplayType>
        </footer>
    )
}