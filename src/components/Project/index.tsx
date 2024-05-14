import {
  Card,
  ButtonLink,
  ButtonLink2,
  ImageWrapper,
  Languages,
  ButtonPbi
} from './styles'
import Paragraph from '../Paragraph'
import Title from '../Title'
import efood from '../../assets/images/efood.png'
import egames from '../../assets/images/egames.png'
import satisfacao from '../../assets/images/satisfacao.png'

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
    <Languages>
      <img
        alt="Rafa-Ts"
        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-plain.svg"
      />
      <img
        alt="Rafa-React"
        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
      />
      <img
        alt="Rafa-HTML"
        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"
      />
      <img
        alt="Rafa-CSS"
        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"
      />
      <img
        alt="Rafa-Python"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg"
      />
    </Languages>
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
      <img src={egames} alt="" />
    </ImageWrapper>
    <Title>Projeto site de Games</Title>
    <Paragraph type="secondary">
      Neste projeto, desenvolvi uma loja virtual de games, implementada com o
      uso de React e TypeScript. A combinação dessas tecnologias permitiu a
      criação de uma plataforma robusta e escalável, proporcionando uma
      experiência de usuário fluida e dinâmica, além de garantir um código mais
      seguro e fácil de manter.
    </Paragraph>
    <Languages>
      <img
        alt="Rafa-Ts"
        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-plain.svg"
      />
      <img
        alt="Rafa-React"
        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
      />
      <img
        alt="Rafa-HTML"
        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"
      />
      <img
        alt="Rafa-CSS"
        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"
      />
      <img
        alt="Rafa-Python"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg"
      />
    </Languages>
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
      <img src={satisfacao} alt="Projeto de Pesquisa de Satisfação" />
    </ImageWrapper>
    <Title>Projeto de pesquisa de Satisfação dos Colaboradores</Title>
    <Paragraph type="secondary">Recursos Humanos</Paragraph>
    <ButtonPbi
      href="https://app.powerbi.com/view?r=eyJrIjoiZDdhMjhlYzItYmZjNi00MTgzLWE2ODQtMzExZGQ2MzUxMjRlIiwidCI6IjIxY2MyMTdmLWYzYzktNDQ2OC04YTFiLTJiNzIzODJkYTVhMSJ9"
      target="blank"
      title="clique aqui para ir para acessar o dashboard"
    >
      Dashboard
    </ButtonPbi>
  </Card>
)
export default Project1
