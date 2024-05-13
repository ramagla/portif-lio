import { Card, ButtonLink, ButtonLink2 } from './styles'
import Paragraph from '../Paragraph'
import Title from '../Title'

export const Project1 = () => (
  <Card>
    <Title>Projeto Contador de eventos</Title>
    <Paragraph type="secondary">
      Contador de eventos feito com HTML, SCSS e JS
    </Paragraph>
    <ButtonLink
      href="https://github.com/ramagla/contador_eventos"
      target="blank"
    >
      Github
    </ButtonLink>
    <ButtonLink2 href="https://contador-eventos.vercel.app/" target="blank">
      Vercel
    </ButtonLink2>
  </Card>
)
export const Project2 = () => (
  <Card>
    <Title>Projeto Contador de eventos2</Title>
    <Paragraph type="secondary">
      Contador de eventos feito com HTML, SCSS e JS
    </Paragraph>
    <ButtonLink
      href="https://github.com/ramagla/contador_eventos"
      target="blank"
    >
      Github
    </ButtonLink>
    <ButtonLink2 href="https://contador-eventos.vercel.app/" target="blank">
      Vercel
    </ButtonLink2>
  </Card>
)

export const Project3 = () => (
  <Card>
    <Title>Projeto teste</Title>
    <Paragraph type="secondary">
      Contador de eventos feito com HTML, SCSS e JS
    </Paragraph>
    <ButtonLink
      href="https://app.powerbi.com/view?r=eyJrIjoiNTE2Zjk2MWUtMTljNS00NTQ5LWJiZDQtZGE3ZmE4NmFjNjYxIiwidCI6IjIxY2MyMTdmLWYzYzktNDQ2OC04YTFiLTJiNzIzODJkYTVhMSJ9"
      target="blank"
    >
      Dashboard
    </ButtonLink>
    {/* <ButtonLink2 href="https://contador-eventos.vercel.app/" target="blank">
      Vercel
    </ButtonLink2> */}
  </Card>
)
export default Project1
