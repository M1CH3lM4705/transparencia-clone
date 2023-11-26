import { Card } from "../CardSection/Card";
import { CardText } from "../CardSection/CardText";
import { DisplayType } from "../Display/DisplayType";
import { Section } from "../Section/SectionContainer";

const imagesUrl = {
  img1: 'https://transparencia.ro.gov.br/img/Home/Index/canal_comunicacao/icon_acesso_a_informacao.png',
  img2: 'https://transparencia.ro.gov.br/img/Home/Index/canal_comunicacao/icon_denuncia.png',
  img3: 'https://transparencia.ro.gov.br/img/Home/Index/canal_comunicacao/icon_elogio.png',
  img4: 'https://transparencia.ro.gov.br/img/Home/Index/canal_comunicacao/icon_reclamacao.png',
  img5: 'https://transparencia.ro.gov.br/img/Home/Index/canal_comunicacao/icon_sugestao.png',
  img6: 'https://transparencia.ro.gov.br/img/Home/Index/canal_comunicacao/icon_fala_br.png'
}

export function AcessoInformacao() {
  return (
    <Section className="flex justify-center">
      <div className="flex flex-col items-center gap-5 mt-8">
        <DisplayType type={"h2"} className="font-bold uppercase text-[14px]">Acesso à Informação | Ouvidoria | Fala.BR</DisplayType>
        <div className="flex gap-3">
          <Card className="w-[118px] h-[145px] items-center justify-center hover:scale-100 hover:shadow-none hover:transition-none bg-secondary-foreground hover:transform-none" imageUrl={imagesUrl.img1} width={50} heigth={50} >
            <CardText className="bg-transparent text-[9px] h-[13.5px] mt-[10px]">
              <span className="text-white uppercase">acesso a informacao</span>
            </CardText>
          </Card>
          <Card className="w-[118px] h-[145px] items-center justify-center hover:scale-100 hover:shadow-none hover:transition-none bg-secondary hover:transform-none" imageUrl={imagesUrl.img2} width={50} heigth={50} >
            <CardText className="bg-transparent text-[9px] h-[13.5px] mt-[10px]" >
              <span className="text-white uppercase">Denúncia</span>
            </CardText>
          </Card>
          <Card className="w-[118px] h-[145px] items-center justify-center hover:scale-100 hover:shadow-none hover:transition-none bg-primary hover:transform-none" imageUrl={imagesUrl.img3}width={50} heigth={50} >
            <CardText className="bg-transparent text-[9px] h-[13.5px] mt-[10px]">
              <span className="text-white uppercase">Elogio</span>
            </CardText>
          </Card>
          <Card className="w-[118px] h-[145px] items-center justify-center hover:scale-100 hover:shadow-none hover:transition-none bg-secondary-foreground hover:transform-none" imageUrl={imagesUrl.img4} width={50} heigth={50}>
            <CardText className="bg-transparent text-[9px] h-[13.5px] mt-[10px]">
              <span className="text-white uppercase">Reclamação</span>
            </CardText>
          </Card>
          <Card className="w-[118px] h-[145px] items-center justify-center hover:scale-100 hover:shadow-none hover:transition-none bg-secondary hover:transform-none" imageUrl={imagesUrl.img5} width={50} heigth={50} >
            <CardText className="bg-transparent text-[9px] h-[13.5px] mt-[10px]">
              <span className="text-white uppercase">Sugestão</span>
            </CardText>
          </Card>
          <Card className="w-[118px] h-[145px] items-center justify-center hover:scale-100 hover:shadow-none hover:transition-none bg-primary hover:transform-none" imageUrl={imagesUrl.img6} width={50} heigth={50} >
            <CardText className="bg-transparent text-[9px] h-[13.5px] mt-[10px]" >
              <span className="text-white uppercase">Fala BR</span>
            </CardText>
          </Card>
        </div>
      </div>
    </Section>
  )
}