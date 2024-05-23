import React, { useState } from 'react'
import {
  Card,
  ButtonLink,
  ButtonLink2,
  ImageWrapper,
  Languages,
  ButtonContainer,
  Action,
  Modal,
  ModalContent
} from './styles'
import Paragraph from '../Paragraph'
import Title from '../Title'
import zoom from '../../assets/images/zoom.png'
import close from '../../assets/images/fechar.png'

export type Project = {
  id: string
  imgSrc: string
  title: string
  description: string
  languages?: string[]
  githubLink?: string
  vercelLink?: string
}

const ProjectCard = ({
  imgSrc,
  title,
  description,
  languages = [],
  githubLink,
  vercelLink
}: Project) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [expanded, setExpanded] = useState(false)

  const toggleExpansion = () => setExpanded(!expanded)

  return (
    <Card expanded={expanded}>
      <ImageWrapper>
        <img src={imgSrc} alt={title} />
        <Action onClick={() => setModalIsOpen(true)}>
          <img src={zoom} alt="Clique para maximizar a imagem" />
        </Action>
      </ImageWrapper>
      <Modal className={modalIsOpen ? 'visible' : ''}>
        <ModalContent className="container">
          <header>
            <h4>{title}</h4>
            <img
              src={close}
              alt="Clique aqui para fechar"
              onClick={() => setModalIsOpen(false)}
            />
          </header>
          <img src={imgSrc} alt={title} />
        </ModalContent>
        <div className="overlay" onClick={() => setModalIsOpen(false)}></div>
      </Modal>
      <Title>
        <span>{title}</span>
      </Title>
      <Paragraph toggleExpansion={toggleExpansion} type="secondary">
        {description}
      </Paragraph>
      <Languages>
        {languages.map((lang) => (
          <img
            key={lang}
            alt={`Rafa-${lang}`}
            src={`https://raw.githubusercontent.com/devicons/devicon/master/icons/${lang}/${lang}-original.svg`}
          />
        ))}
      </Languages>
      <ButtonContainer>
        {githubLink && (
          <ButtonLink
            title="Clique aqui para ir para o projeto no GitHub"
            href={githubLink}
            target="_blank"
          >
            GitHub
          </ButtonLink>
        )}
        {vercelLink && (
          <ButtonLink2
            title="Clique aqui para ir para o Vercel"
            href={vercelLink}
            target="_blank"
          >
            Vercel
          </ButtonLink2>
        )}
      </ButtonContainer>
    </Card>
  )
}

export default ProjectCard
