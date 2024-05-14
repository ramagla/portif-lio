import { Card, ButtonLink, ButtonLink2, ImageWrapper } from './styles'
import Paragraph from '../Paragraph'
import Title from '../Title'
import efood from '../../assets/images/efood.png'

//Projetos github

export const Project1 = () => (
  <Card>
    <ImageWrapper>
      <img src={efood} alt="" />
    </ImageWrapper>
    <Title>Projeto site de Delivery</Title>
    <Paragraph type="secondary">
      Para este projeto, optei por utilizar React juntamente com TypeScript. A
      escolha do React permitiu-me criar uma interface de usuário interativa e
      eficiente, enquanto o TypeScript ofereceu um sistema de tipos robusto que
      melhorou a qualidade do código e facilitou a manutenção.
    </Paragraph>
    <ButtonLink
      title="clique aqui para ir para o projeto no github"
      href="https://github.com/ramagla/eFood"
      target="blank"
    >
      Github
    </ButtonLink>
    <ButtonLink2
      title="clique aqui para ir para o projeto na vercel"
      href="https://e-food-inky.vercel.app/"
      target="blank"
    >
      Vercel
    </ButtonLink2>
  </Card>
)
export const Project2 = () => (
  <Card>
    <ImageWrapper>
      <img src={efood} alt="" />
    </ImageWrapper>
    <Title>Projeto site de Games</Title>
    <Paragraph type="secondary">
      Neste projeto, desenvolvi uma loja virtual de games, implementada com o
      uso de React e TypeScript. A combinação dessas tecnologias permitiu a
      criação de uma plataforma robusta e escalável, proporcionando uma
      experiência de usuário fluida e dinâmica, além de garantir um código mais
      seguro e fácil de manter.
    </Paragraph>
    <ButtonLink
      title="clique aqui para ir para o projeto no github"
      href="https://github.com/ramagla/eplay"
      target="blank"
    >
      Github
    </ButtonLink>
    <ButtonLink2
      title="clique aqui para ir para o projeto na vercel"
      href="https://eplay-khaki-nine.vercel.app/"
      target="blank"
    >
      Vercel
    </ButtonLink2>
  </Card>
)

//Projetos powerbi

export const Project3 = () => (
  <Card>
    <ImageWrapper>
      <img src={efood} alt="" />
    </ImageWrapper>
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
