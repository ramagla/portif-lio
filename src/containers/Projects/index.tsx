import React, { useState } from 'react'
import Title from '../../components/Title'
import { List, ButtonContainer, Button } from './styles'
import ProjectCard from '../../components/Project/projectCard'
import ProjectCardPw from '../../components/Project/projectCardPw'
import { projectData, pbiData, djangoData } from '../../components/Project/data'

export type ProjectType = {
  id: string
  imgSrc: string
  title: string
  description: string
  languages?: string[]
  githubLink?: string
  vercelLink?: string
  dashboardLink?: string
  source?: 'github' | 'powerbi' | 'django'
}

const Projects = () => {
  const [activeTab, setActiveTab] = useState<'github' | 'powerbi' | 'django'>(
    'github'
  )

  const renderProjectList = (projects: ProjectType[]) => {
    return projects.map((project) => (
      <li key={project.id}>
        {activeTab === 'github' || activeTab === 'django' ? (
          <ProjectCard {...project} source={activeTab} />
        ) : (
          <ProjectCardPw {...project} />
        )}
      </li>
    ))
  }

  return (
    <section>
      <ButtonContainer>
        <Button
          onClick={() => setActiveTab('github')}
          $active={activeTab === 'github'}
        >
          GitHub
        </Button>
        <Button
          onClick={() => setActiveTab('powerbi')}
          $active={activeTab === 'powerbi'}
        >
          PowerBI
        </Button>
        <Button
          onClick={() => setActiveTab('django')}
          $active={activeTab === 'django'}
        >
          Django
        </Button>
      </ButtonContainer>
      <Title fontSize={16}>
        {activeTab === 'github'
          ? 'Projetos GitHub'
          : activeTab === 'powerbi'
            ? 'Projetos PowerBI'
            : 'Projetos Django'}
      </Title>
      <List>
        {activeTab === 'github'
          ? renderProjectList(projectData)
          : activeTab === 'powerbi'
            ? renderProjectList(pbiData)
            : renderProjectList(djangoData)}
      </List>
    </section>
  )
}

export default Projects
