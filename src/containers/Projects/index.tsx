import React, { useState } from 'react'
import { Git1, Git2, Git3, Git4, Pbi1, Pbi2 } from '../../components/Project'
import Title from '../../components/Title'
import { List, ButtonContainer, Button } from './styles'

const Projects = () => {
  const [activeTab, setActiveTab] = useState('github')

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
        {activeTab === 'github' && (
          <>
            <li>
              <Git1 />
            </li>
            <li>
              <Git2 />
            </li>
            <li>
              <Git3 />
            </li>
            <li>
              <Git4 />
            </li>
          </>
        )}
        {activeTab === 'powerbi' && (
          <>
            <li>
              <Pbi1 />
            </li>
            <li>
              <Pbi2 />
            </li>
          </>
        )}
      </List>
    </section>
  )
}

export default Projects
