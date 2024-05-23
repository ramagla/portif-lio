//src/components/Project/projectCardPW.tsx

import React, { useState } from 'react'
import {
  CardPw,
  ButtonPbi,
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

export type ProjectPw = {
  id: string
  imgSrc: string
  title: string
  description: string
  languages?: string[]
  dashboardLink?: string
}

const ProjectCardPw = ({
  imgSrc,
  title,
  description,
  languages = [],
  dashboardLink
}: ProjectPw) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [expanded, setExpanded] = useState(false)

  const toggleExpansion = () => setExpanded(!expanded)

  return (
    <CardPw>
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
        {dashboardLink && (
          <ButtonPbi
            title="Clique aqui para acessar o dashboard"
            href={dashboardLink}
            target="_blank"
          >
            Dashboard
          </ButtonPbi>
        )}
      </ButtonContainer>
    </CardPw>
  )
}

export default ProjectCardPw
