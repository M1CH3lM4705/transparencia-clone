import { ModelDefault } from "../AreaAtuacao/areasDeAtuacao";
import { ExternalLink } from "lucide-react";

type ButtonSectionProps = ModelDefault &{
    className:string
}

export const invetoryButtonSection: Array<ButtonSectionProps> = [
    {
        _id:1,
        icon:ExternalLink,
        text:'Agenda de Autoridades',
        className:'bg-primary'
    },
    {
        _id:2,
        icon:undefined,
        text:'Comitê de Transparência',
        className:'bg-secondary'
        
    },
    {
        _id:3,
        icon:undefined,
        text:'Compras Covid',
        className:'bg-secondary-foreground'
        
    },
    {
        _id:4,
        icon:undefined,
        text:'Organograma Estadual',
        className:'bg-primary'
        
    },
    {
        _id:5,
        icon:ExternalLink,
        text:'Dados Abertos e APIS',
        className:'bg-secondary-foreground'
    },
    {
        _id:6,
        icon:ExternalLink,
        text:'Site do Governo',
        className:'bg-primary'
    },
    {
        _id:7,
        icon:undefined,
        text:'Programa de Integridade',
        className:'bg-secondary'
    },
    
]