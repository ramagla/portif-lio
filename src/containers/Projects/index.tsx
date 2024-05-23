//src/containers/Projects/index.tsx

// import React, { useState } from 'react'
// import {
//   Git1,
//   Git2,
//   Git3,
//   Git4,
//   Git5,
//   Git6,
//   Pbi1,
//   Pbi2
// } from '../../components/Project/index'
// import Title from '../../components/Title'
// import { List, ButtonContainer, Button } from './styles'

// type ComponentType = React.ComponentType<object>

// const Projects = () => {
//   const [activeTab, setActiveTab] = useState<'github' | 'powerbi'>('github')

//   const renderProjectList = (components: ComponentType[]) => {
//     return components.map((Component, index) => (
//       <li key={index}>
//         <Component />
//       </li>
//     ))
//   }

//   return (
//     <section>
//       <ButtonContainer>
//         <Button
//           onClick={() => setActiveTab('github')}
//           active={activeTab === 'github'}
//         >
//           GitHub
//         </Button>
//         <Button
//           onClick={() => setActiveTab('powerbi')}
//           active={activeTab === 'powerbi'}
//         >
//           PowerBI
//         </Button>
//       </ButtonContainer>
//       <Title fontSize={16}>
//         {activeTab === 'github' ? 'Projetos GitHub' : 'Projetos PowerBI'}
//       </Title>
//       <List>
//         {activeTab === 'github' &&
//           renderProjectList([Git1, Git2, Git3, Git4, Git5, Git6])}
//         {activeTab === 'powerbi' && renderProjectList([Pbi1, Pbi2])}
//       </List>
//     </section>
//   )
// }

// export default Projects

// import React, { useState } from 'react'
// import Title from '../../components/Title'
// import { List, ButtonContainer, Button } from './styles'
// import ProjectCard from '../../components/Project/index'
// import { projectData, pbiData } from '../../components/Project/data'

// // Define the ProjectType to accommodate the projects
// export type ProjectType = {
//   id: string
//   imgSrc: string
//   title: string
//   description: string
//   languages?: string[] | undefined
//   githubLink?: string | undefined
//   vercelLink?: string | undefined
//   dashboardLink?: string | undefined
// }

// const Projects = () => {
//   const [activeTab, setActiveTab] = useState<'github' | 'powerbi'>('github')

//   const renderProjectList = (projects: ProjectType[]) => {
//     return projects.map((project, index) => (
//       <li key={index}>
//         <ProjectCard {...project} />
//       </li>
//     ))
//   }

//   return (
//     <section>
//       <ButtonContainer>
//         <Button
//           onClick={() => setActiveTab('github')}
//           active={activeTab === 'github'}
//         >
//           GitHub
//         </Button>
//         <Button
//           onClick={() => setActiveTab('powerbi')}
//           active={activeTab === 'powerbi'}
//         >
//           PowerBI
//         </Button>
//       </ButtonContainer>
//       <Title fontSize={16}>
//         {activeTab === 'github' ? 'Projetos GitHub' : 'Projetos PowerBI'}
//       </Title>
//       <List>
//         {activeTab === 'github' && renderProjectList(projectData)}
//         {activeTab === 'powerbi' && renderProjectList(pbiData)}
//       </List>
//     </section>
//   )
// }

// export default Projects

import React, { useState } from 'react'
import Title from '../../components/Title'
import { List, ButtonContainer, Button } from './styles'
import ProjectCard from '../../components/Project/index'
import ProjectCardPw from '../../components/Project/projectCardPw' // Adicione a importação do novo componente
import { projectData, pbiData } from '../../components/Project/data'

export type ProjectType = {
  id: string
  imgSrc: string
  title: string
  description: string
  languages?: string[] | undefined
  githubLink?: string | undefined
  vercelLink?: string | undefined
  dashboardLink?: string | undefined
}

const Projects = () => {
  const [activeTab, setActiveTab] = useState<'github' | 'powerbi'>('github')

  const renderProjectList = (projects: ProjectType[]) => {
    return projects.map((project, index) => (
      <li key={index}>
        {activeTab === 'github' ? (
          <ProjectCard {...project} />
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
        {activeTab === 'github'
          ? renderProjectList(projectData)
          : renderProjectList(pbiData)}
      </List>
    </section>
  )
}

export default Projects
