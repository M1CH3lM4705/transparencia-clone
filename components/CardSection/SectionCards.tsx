import { Section } from "../Section/SectionContainer";
import { Card } from "./Card";
import { CardText } from "./CardText";

const imageCards =
{
  card1: 'https://transparencia.ro.gov.br/img/Home/Index/mais_informacoes/fale-conosco.png',
  card2: 'https://transparencia.ro.gov.br/img/Home/Index/mais_informacoes/mais-acessados.png',
  card3: 'https://transparencia.ro.gov.br/img/Home/Index/mais_informacoes/sites-e-aplicativos-rondonia.png',
  card4: 'https://transparencia.ro.gov.br/img/Home/Index/mais_informacoes/avaliacao-portal-transparencia-ro.png',
  card5: 'https://transparencia.ro.gov.br/img/Home/Index/mais_informacoes/resultado-pesquisa-de-satisfacao.png',
}

export function SectionCards() {
  return (
    <Section>
      <div className="mx-[35px] my-[35px] flex justify-around gap-4 max-lg:flex-wrap">
        <Card className="w-[167px] h-[229px]  overflow-hidden" imageUrl={imageCards.card1}>
          <CardText>
            <span className="text-[#357DB8] uppercase">Fale Conosco</span>
          </CardText>
        </Card>
        <Card className="w-[167px] h-[229px]  overflow-hidden" imageUrl={imageCards.card2} >
          <CardText>
            <span className="text-[#357DB8] uppercase">Mais Acessados</span>
          </CardText>
        </Card>
        <Card className="w-[167px] h-[229px]  overflow-hidden" imageUrl={imageCards.card3}>
          <CardText>
            <span className="text-[#357DB8] uppercase">Outros Portais e Aplicativos do Governo</span>
          </CardText>
        </Card>
        <Card className="w-[167px] h-[229px]  overflow-hidden" imageUrl={imageCards.card4} >
          <CardText>
            <span className="text-[#357DB8] uppercase">Avalie Aqui o Portal de Transparência</span>
          </CardText>
        </Card>
        <Card className="w-[167px] h-[229px]  overflow-hidden" imageUrl={imageCards.card5}>
          <CardText>
            <span className="text-[#357DB8] uppercase">Resultados de pesquisas de satisfação</span>
          </CardText>
        </Card>
      </div>
    </Section>
  )
}