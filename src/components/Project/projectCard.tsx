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
  ModalContent,
  Content
} from './styles'
import Paragraph from '../Paragraph'
import Title from '../Title'
import zoom from '../../assets/images/zoom.png'
import close from '../../assets/images/fechar.png'
import gunicornIcon from '../../assets/icons/gunicorn.png'
import githubIcon from '../../assets/icons/github-icon.svg'
import awsIcon from '../../assets/icons/aws-icon.svg'
import vercelIcon from '../../assets/icons/vercel-icon.png'
import { ProjectType } from '../../types'
import Badge from '../Badge'

const ProjectCard = ({
  imgSrc,
  title,
  description,
  languages = [],
  githubLink,
  vercelLink,
  source = 'github'
}: ProjectType) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [expanded, setExpanded] = useState(false)

  const toggleExpansion = () => setExpanded(!expanded)

  const getBadgeText = () => {
    if (source === 'django') return 'AWS + Django'
    if (source === 'powerbi') return 'PowerBI'
    return 'React + Styled Components'
  }

  return (
    <>
      <Card
        $expanded={expanded}
        onClick={toggleExpansion}
        title="Clique para mais detalhes"
      >
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

        <Badge type={getBadgeText()} />

        <Title>
          <span>{title}</span>
        </Title>

        <Paragraph toggleExpansion={toggleExpansion} type="secondary">
          {description}
        </Paragraph>

        <Content $expanded={expanded}>
          <Languages>
            {languages.map((lang) =>
              lang === 'gunicorn' ? (
                <img
                  key={lang}
                  alt="gunicorn"
                  title="Gunicorn"
                  src={gunicornIcon}
                  style={{ width: 24, height: 24 }}
                  onError={(e) =>
                    ((e.target as HTMLImageElement).src = '/fallback-icon.png')
                  }
                />
              ) : (
                <img
                  key={lang}
                  alt={`Rafa-${lang}`}
                  title={lang.toUpperCase()}
                  src={`https://raw.githubusercontent.com/devicons/devicon/master/icons/${lang}/${lang}-original.svg`}
                  onError={(e) =>
                    ((e.target as HTMLImageElement).src = '/fallback-icon.png')
                  }
                />
              )
            )}
          </Languages>

          <ButtonContainer>
            {githubLink && (
              <ButtonLink
                title="Clique aqui para ir para o projeto no GitHub"
                href={githubLink}
                target="_blank"
              >
                <img
                  src={githubIcon}
                  alt="GitHub"
                  style={{ width: 16, height: 16, marginRight: 8 }}
                />
                GitHub
              </ButtonLink>
            )}

            {vercelLink && (
              <ButtonLink2
                title={
                  source === 'django'
                    ? 'Clique aqui para acessar o projeto hospedado na AWS'
                    : 'Clique aqui para acessar o projeto na Vercel'
                }
                href={vercelLink}
                target="_blank"
              >
                <img
                  src={source === 'django' ? awsIcon : vercelIcon}
                  alt={source === 'django' ? 'AWS' : 'Vercel'}
                  style={{ width: 16, height: 16, marginRight: 8 }}
                />
                {source === 'django' ? 'AWS' : 'Vercel'}
              </ButtonLink2>
            )}
          </ButtonContainer>
        </Content>
      </Card>

      {/* Modal global, fora do Card */}
      {modalIsOpen && (
        <Modal className="visible">
          <ModalContent className="container">
            <header>
              <h4>{title}</h4>
              <img
                src={close}
                alt="Fechar modal"
                onClick={() => setModalIsOpen(false)}
              />
            </header>
            <img src={imgSrc} alt={title} />
          </ModalContent>
          <div className="overlay" onClick={() => setModalIsOpen(false)}></div>
        </Modal>
      )}
    </>
  )
}

export default ProjectCard
