import { Card, LinkBotao, LinkBotao2 } from './styles'
import Paragrafo from '../Paragrafo'
import Titulo from '../Titulo'

export const Projeto1 = () => (
  <Card>
    <Titulo>Projeto Contador de eventos</Titulo>
    <Paragrafo tipo="secundario">
      Contador de eventos feito com HTML, SCSS e JS
    </Paragrafo>
    <LinkBotao
      href="https://github.com/ramagla/contador_eventos"
      target="blank"
    >
      Github
    </LinkBotao>
    <LinkBotao2 href="https://contador-eventos.vercel.app/" target="blank">
      Vercel
    </LinkBotao2>
  </Card>
)
export const Projeto2 = () => (
  <Card>
    <Titulo>Projeto Contador de eventos2</Titulo>
    <Paragrafo tipo="secundario">
      Contador de eventos feito com HTML, SCSS e JS
    </Paragrafo>
    <LinkBotao
      href="https://github.com/ramagla/contador_eventos"
      target="blank"
    >
      Github
    </LinkBotao>
    <LinkBotao2 href="https://contador-eventos.vercel.app/" target="blank">
      Vercel
    </LinkBotao2>
  </Card>
)
export default Projeto1
