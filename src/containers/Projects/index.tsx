import React, { useState } from 'react'
import { Project1, Project2, Project3 } from '../../components/Project'
import Title from '../../components/Title'
import { List, ButtonContainer, Button } from './styles'

const Projects = () => {
  const [activeTab, setActiveTab] = useState('github')

  return (
    <section>
      <Title fontSize={16}>Projetos</Title>
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
        {activeTab === 'github' && (
          <>
            <li>
              <Project1 />
            </li>
            <li>
              <Project2 />
            </li>
          </>
        )}
        {activeTab === 'powerbi' && (
          <>
            <li>
              <Project3></Project3>
            </li>
            <li>{/* Adicione aqui os projetos do PowerBI */}</li>
          </>
        )}
      </List>
    </section>
  )
}

export default Projects
