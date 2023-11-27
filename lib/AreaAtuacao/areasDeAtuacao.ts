import { BookOpenText, HeartPulse, Leaf, LockKeyhole, LucideIcon, Tractor } from "lucide-react"

export type ModelDefault = {
    _id:number,
    icon?:LucideIcon,
    text:string,
}

type AreasDeAtuacao = ModelDefault &{
    value:string,
    className:string
}

export const invetory: Array<AreasDeAtuacao> = [
    {
        _id:1,
        icon:BookOpenText,
        text:'EDUCAÇÃO',
        value:'R$ 1.898.323.559,37',
        className:''
    },
    {
        _id:2,
        icon:Leaf,
        text:'GESTÃO AMBIENTAL',
        value:'R$ 69.573.568,26',
        className:'after:left-a3'
    },
    {
        _id:3,
        icon:HeartPulse,
        text:'SAÚDE',
        value:'R$ 1.876.126.780,41',
        className:'after:left-a4'
    },
    {
        _id:4,
        icon:LockKeyhole,
        text:'SEGURANÇA PÚBLICA',
        value:'R$ 1.445.106.695,93',
        className:'after:left-a5'
    },
    {
        _id:5,
        icon:Tractor,
        text:'AGRICULTURA',
        value:'R$ 295.814.037,24',
        className:'after:content-none'
    },
   
]
