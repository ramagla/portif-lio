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
import { ProjectType } from '../../types'
import Badge from '../Badge'

const ProjectCardPw = ({
  imgSrc,
  title,
  description,
  languages = [],
  dashboardLink,
  source = 'powerbi'
}: ProjectType) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [expanded, setExpanded] = useState(false)

  const toggleExpansion = () => setExpanded(!expanded)

  const getBadgeText = () => {
    if (source === 'powerbi') return 'PowerBI'
    if (source === 'django') return 'AWS + Django'
    return 'React + Styled Components'
  }

  return (
    <CardPw>
      <ImageWrapper>
        <img src={imgSrc} alt={title} />
        <Action
          onClick={(e) => {
            e.stopPropagation()
            setModalIsOpen(true)
          }}
        >
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

      <Badge type={getBadgeText()} />

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
            title={lang.toUpperCase()} // 👈 Tooltip visível ao passar o mouse
            src={`https://raw.githubusercontent.com/devicons/devicon/master/icons/${lang}/${lang}-original.svg`}
            onError={(e) =>
              ((e.target as HTMLImageElement).src = '/fallback-icon.png')
            }
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
