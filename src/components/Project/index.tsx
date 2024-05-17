import { useState } from 'react'
import {
  Card,
  ButtonLink,
  ButtonLink2,
  ImageWrapper,
  Languages,
  ButtonPbi,
  ButtonContainer,
  Action,
  Modal,
  ModalContent,
  CardPw
} from './styles'
import Paragraph from '../Paragraph'
import Title from '../Title'
import efood from '../../assets/images/efood.png'
import egames from '../../assets/images/egames.png'
import satisfacao from '../../assets/images/satisfacao.png'
import acompanhamento from '../../assets/images/acompanhamento.png'
import zoom from '../../assets/images/zoom.png'
import close from '../../assets/images/fechar.png'
import gameshop from '../../assets/images/gameshop.png'
import galeria from '../../assets/images/galeria.png'
import restaurante from '../../assets/images/restaurante.png'
import sorteador from '../../assets/images/sorteador.png'

//Projetos github

export const Git1 = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [expanded, setExpanded] = useState(false)

  const toggleExpansion = () => {
    setExpanded(!expanded)
  }

  return (
    <Card expanded={expanded}>
      <ImageWrapper>
        <img src={efood} alt="" />
        <Action onClick={() => setModalIsOpen(true)}>
          <img src={zoom} alt="Clique para maximizar a imagem" />
        </Action>
      </ImageWrapper>
      <Modal className={modalIsOpen ? 'visible' : ''}>
        <ModalContent className="container">
          <header>
            <h4>Site de Delivery</h4>
            <img
              src={close}
              alt="Clique aqui para fechar"
              onClick={() => setModalIsOpen(false)}
            />
          </header>
          <img src={efood} />
        </ModalContent>
        <div className="overlay" onClick={() => setModalIsOpen(false)}></div>
      </Modal>
      <Title>
        <span>Site de Delivery</span>
      </Title>
      <Paragraph toggleExpansion={toggleExpansion} type="secondary">
        Para este projeto, optei por utilizar React juntamente com TypeScript. A
        escolha do React permitiu-me criar uma interface de usuário interativa e
        eficiente, enquanto o TypeScript ofereceu um sistema de tipos robusto
        que melhorou a qualidade do código e facilitou a manutenção.
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
      <ButtonContainer>
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
      </ButtonContainer>
    </Card>
  )
}

export const Git2 = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [expanded, setExpanded] = useState(false)

  const toggleExpansion = () => {
    setExpanded(!expanded)
  }
  return (
    <Card expanded={expanded}>
      <ImageWrapper>
        <img src={egames} alt="" />
        <Action onClick={() => setModalIsOpen(true)}>
          <img src={zoom} alt="Clique para maximizar a imagem" />
        </Action>
      </ImageWrapper>
      <Modal className={modalIsOpen ? 'visible' : ''}>
        <ModalContent className="container">
          <header>
            <h4>Site de Game</h4>
            <img
              src={close}
              alt="Clique aqui para fechar"
              onClick={() => setModalIsOpen(false)}
            />
          </header>
          <img src={egames} />
        </ModalContent>
        <div className="overlay" onClick={() => setModalIsOpen(false)}></div>
      </Modal>
      <Title>
        <span>Site de Games</span>
      </Title>
      <Paragraph type="secondary" toggleExpansion={toggleExpansion}>
        Neste projeto, desenvolvi uma loja virtual de games, implementada com o
        uso de React e TypeScript. A combinação dessas tecnologias permitiu a
        criação de uma plataforma robusta e escalável, proporcionando uma
        experiência de usuário fluida e dinâmica, além de garantir um código
        mais seguro e fácil de manter.
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
      <ButtonContainer>
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
      </ButtonContainer>
    </Card>
  )
}

export const Git3 = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [expanded, setExpanded] = useState(false)

  const toggleExpansion = () => {
    setExpanded(!expanded)
  }
  return (
    <Card expanded={expanded}>
      <ImageWrapper>
        <img src={gameshop} alt="" />
        <Action onClick={() => setModalIsOpen(true)}>
          <img src={zoom} alt="Clique para maximizar a imagem" />
        </Action>
      </ImageWrapper>
      <Modal className={modalIsOpen ? 'visible' : ''}>
        <ModalContent className="container">
          <header>
            <h4>Site Games Shop</h4>
            <img
              src={close}
              alt="Clique aqui para fechar"
              onClick={() => setModalIsOpen(false)}
            />
          </header>
          <img src={gameshop} />
        </ModalContent>
        <div className="overlay" onClick={() => setModalIsOpen(false)}></div>
      </Modal>
      <Title>
        <span>Site de Games</span>
      </Title>
      <Paragraph type="secondary" toggleExpansion={toggleExpansion}>
        Neste projeto, construímos uma estrutura básica utilizando CSS e HTML.
        Embora a responsividade não tenha sido implementada, o foco foi criar um
        exemplo didático para facilitar o aprendizado dessas tecnologias
      </Paragraph>

      <Languages>
        <img
          alt="Rafa-HTML"
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"
        />
        <img
          alt="Rafa-CSS"
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"
        />
      </Languages>
      <ButtonContainer>
        <ButtonLink
          title="clique aqui para ir para o projeto no github"
          href="https://github.com/ramagla/site_gamesshop.git"
          target="blank"
        >
          Github
        </ButtonLink>
        <ButtonLink2
          title="clique aqui para ir para o projeto na vercel"
          href="https://site-gamesshop-red-two.vercel.app/"
          target="blank"
        >
          Vercel
        </ButtonLink2>
      </ButtonContainer>
    </Card>
  )
}

export const Git4 = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [expanded, setExpanded] = useState(false)

  const toggleExpansion = () => {
    setExpanded(!expanded)
  }

  return (
    <Card expanded={expanded}>
      <ImageWrapper>
        <img src={galeria} alt="" />
        <Action onClick={() => setModalIsOpen(true)}>
          <img src={zoom} alt="Clique para maximizar a imagem" />
        </Action>
      </ImageWrapper>
      <Modal className={modalIsOpen ? 'visible' : ''}>
        <ModalContent className="container">
          <header>
            <h4>Site Galeria de imagens</h4>
            <img
              src={close}
              alt="Clique aqui para fechar"
              onClick={() => setModalIsOpen(false)}
            />
          </header>
          <img src={galeria} />
        </ModalContent>
        <div className="overlay" onClick={() => setModalIsOpen(false)}></div>
      </Modal>
      <Title>
        <span>Site Galeria de Imagens</span>
      </Title>
      <Paragraph type="secondary" toggleExpansion={toggleExpansion}>
        Neste projeto, desenvolvemos uma galeria de imagens utilizando CSS, HTML
        e jQuery. A galeria foi projetada com uma interface simples e intuitiva.
        Apesar de não termos implementado um design responsivo, o objetivo foi
        criar um modelo prático que serve como uma introdução eficaz ao uso
        dessas ferramentas de desenvolvimento web.
      </Paragraph>

      <Languages>
        <img
          alt="Rafa-HTML"
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"
        />
        <img
          alt="Rafa-CSS"
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"
        />
        <img
          alt="Rafa-Jquery"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-plain-wordmark.svg"
        />
      </Languages>
      <ButtonContainer>
        <ButtonLink
          title="clique aqui para ir para o projeto no github"
          href="https://github.com/ramagla/jquery-galeria-fotos.git"
          target="blank"
        >
          Github
        </ButtonLink>
        <ButtonLink2
          title="clique aqui para ir para o projeto na vercel"
          href="https://jquery-galeria-fotos-nu-one.vercel.app/"
          target="blank"
        >
          Vercel
        </ButtonLink2>
      </ButtonContainer>
    </Card>
  )
}

export const Git5 = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [expanded, setExpanded] = useState(false)

  const toggleExpansion = () => {
    setExpanded(!expanded)
  }

  return (
    <Card expanded={expanded}>
      <ImageWrapper>
        <img src={restaurante} alt="" />
        <Action onClick={() => setModalIsOpen(true)}>
          <img src={zoom} alt="Clique para maximizar a imagem" />
        </Action>
      </ImageWrapper>
      <Modal className={modalIsOpen ? 'visible' : ''}>
        <ModalContent className="container">
          <header>
            <h4>Site Restaurante</h4>
            <img
              src={close}
              alt="Clique aqui para fechar"
              onClick={() => setModalIsOpen(false)}
            />
          </header>
          <img src={restaurante} />
        </ModalContent>
        <div className="overlay" onClick={() => setModalIsOpen(false)}></div>
      </Modal>
      <Title>
        <span>Site Restaurante</span>
      </Title>
      <Paragraph type="secondary" toggleExpansion={toggleExpansion}>
        Este projeto apresenta o desenvolvimento de um website inovador para um
        restaurante, que explora integralmente as funcionalidades do Bootstrap
        para criar uma experiência de usuário excepcional e um design
        responsivo.
      </Paragraph>

      <Languages>
        <img
          alt="Rafa-HTML"
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"
        />
        <img
          alt="Rafa-CSS"
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"
        />
        <img
          alt="Rafa-Jquery"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg"
        />
      </Languages>
      <ButtonContainer>
        <ButtonLink
          title="clique aqui para ir para o projeto no github"
          href="https://github.com/ramagla/bootstrap_restaurante.git"
          target="blank"
        >
          Github
        </ButtonLink>
        <ButtonLink2
          title="clique aqui para ir para o projeto na vercel"
          href="https://bootstrap-restaurante-lemon.vercel.app/"
          target="blank"
        >
          Vercel
        </ButtonLink2>
      </ButtonContainer>
    </Card>
  )
}

export const Git6 = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [expanded, setExpanded] = useState(false)

  const toggleExpansion = () => {
    setExpanded(!expanded)
  }

  return (
    <Card expanded={expanded}>
      <ImageWrapper>
        <img src={sorteador} alt="" />
        <Action onClick={() => setModalIsOpen(true)}>
          <img src={zoom} alt="Clique para maximizar a imagem" />
        </Action>
      </ImageWrapper>
      <Modal className={modalIsOpen ? 'visible' : ''}>
        <ModalContent className="container">
          <header>
            <h4>Site Sorteador</h4>
            <img
              src={close}
              alt="Clique aqui para fechar"
              onClick={() => setModalIsOpen(false)}
            />
          </header>
          <img src={sorteador} />
        </ModalContent>
        <div className="overlay" onClick={() => setModalIsOpen(false)}></div>
      </Modal>
      <Title>
        <span>Site Sorteador</span>
      </Title>
      <Paragraph type="secondary" toggleExpansion={toggleExpansion}>
        Neste projeto, foi empregado o Grunt para automatizar tarefas de
        desenvolvimento e construir um sistema avançado de sorteio de números
        aleatórios.
      </Paragraph>

      <Languages>
        <img
          alt="Rafa-HTML"
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"
        />
        <img
          alt="Rafa-CSS"
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"
        />
        <img
          alt="Rafa-Jquery"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/grunt/grunt-original-wordmark.svg"
        />
      </Languages>
      <ButtonContainer>
        <ButtonLink
          title="clique aqui para ir para o projeto no github"
          href="https://github.com/ramagla/bootstrap_restaurante.git"
          target="blank"
        >
          Github
        </ButtonLink>
        <ButtonLink2
          title="clique aqui para ir para o projeto na vercel"
          href="https://bootstrap-restaurante-lemon.vercel.app/"
          target="blank"
        >
          Vercel
        </ButtonLink2>
      </ButtonContainer>
    </Card>
  )
}
//Projetos powerbi

export const Pbi1 = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  return (
    <CardPw>
      <ImageWrapper>
        <img src={satisfacao} alt="Projeto de Pesquisa de Satisfação" />
        <Action onClick={() => setModalIsOpen(true)}>
          <img src={zoom} alt="Clique para maximizar a imagem" />
        </Action>
        <Modal className={modalIsOpen ? 'visible' : ''}>
          <ModalContent className="container">
            <header>
              <h4>Projeto site de Delivery</h4>
              <img
                src={close}
                alt="Clique aqui para fechar"
                onClick={() => setModalIsOpen(false)}
              />
            </header>
            <img src={satisfacao} />
          </ModalContent>
          <div className="overlay" onClick={() => setModalIsOpen(false)}></div>
        </Modal>
      </ImageWrapper>
      <Title>
        <span>Projeto de pesquisa de Satisfação dos Colaboradores</span>
      </Title>
      <Paragraph type="secondary">Recursos Humanos</Paragraph>
      <ButtonPbi
        href="https://app.powerbi.com/view?r=eyJrIjoiZDdhMjhlYzItYmZjNi00MTgzLWE2ODQtMzExZGQ2MzUxMjRlIiwidCI6IjIxY2MyMTdmLWYzYzktNDQ2OC04YTFiLTJiNzIzODJkYTVhMSJ9"
        target="blank"
        title="clique aqui para ir para acessar o dashboard"
      >
        Dashboard
      </ButtonPbi>
    </CardPw>
  )
}

export const Pbi2 = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  return (
    <CardPw>
      <ImageWrapper>
        <img
          src={acompanhamento}
          alt="Projeto de Pesquisa de Acompanhamento de vendas"
        />
        <Action onClick={() => setModalIsOpen(true)}>
          <img src={zoom} alt="Clique para maximizar a imagem" />
        </Action>
      </ImageWrapper>
      <Modal className={modalIsOpen ? 'visible' : ''}>
        <ModalContent className="container">
          <header>
            <h4>Projeto site de Delivery</h4>
            <img
              src={close}
              alt="Clique aqui para fechar"
              onClick={() => setModalIsOpen(false)}
            />
          </header>
          <img src={acompanhamento} />
        </ModalContent>
        <div className="overlay" onClick={() => setModalIsOpen(false)}></div>
      </Modal>
      <Title>
        <span>Projeto de Acompanhamento de vendas: Franquia de lojas</span>
      </Title>
      <Paragraph type="secondary">Setor Financeiro</Paragraph>
      <ButtonPbi
        href="https://app.powerbi.com/view?r=eyJrIjoiY2EyNzAwY2YtMWUzMy00ODY5LTg1MjEtYWM2NWRmYzRkY2U2IiwidCI6IjIxY2MyMTdmLWYzYzktNDQ2OC04YTFiLTJiNzIzODJkYTVhMSJ9"
        target="blank"
        title="clique aqui para ir para acessar o dashboard"
      >
        Dashboard
      </ButtonPbi>
    </CardPw>
  )
}

export default Git1
