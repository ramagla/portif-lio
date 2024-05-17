import React, { useState } from 'react'
import {
  Git1,
  Git2,
  Git3,
  Git4,
  Git5,
  Git6,
  Pbi1,
  Pbi2
} from '../../components/Project'
import Title from '../../components/Title'
import { List, ButtonContainer, Button } from './styles'

type ComponentType = React.ComponentType<object>

const Projects = () => {
  const [activeTab, setActiveTab] = useState<'github' | 'powerbi'>('github')

  const renderProjectList = (components: ComponentType[]) => {
    return components.map((Component, index) => (
      <li key={index}>
        <Component />
      </li>
    ))
  }

  return (
    <section>
      <ButtonContainer>
        <Button
          onClick={() => setActiveTab('github')}
          active={activeTab === 'github'}
        >
          GitHub
        </Button>
        <Button
          onClick={() => setActiveTab('powerbi')}
          active={activeTab === 'powerbi'}
        >
          PowerBI
        </Button>
      </ButtonContainer>
      <Title fontSize={16}>
        {activeTab === 'github' ? 'Projetos GitHub' : 'Projetos PowerBI'}
      </Title>
      <List>
        {activeTab === 'github' &&
          renderProjectList([Git1, Git2, Git3, Git4, Git5, Git6])}
        {activeTab === 'powerbi' && renderProjectList([Pbi1, Pbi2])}
      </List>
    </section>
  )
}

export default Projects
