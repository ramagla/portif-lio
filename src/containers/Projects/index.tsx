import { Project1, Project2 } from '../../components/Project'

import Title from '../../components/Title'

import { List } from './styles'

const Projects = () => (
  <section>
    <Title fontSize={16}>Projetos Github</Title>
    <List>
      <li>
        <Project1 />
      </li>
      <li>
        <Project2 />
      </li>
    </List>
  </section>
)

export default Projects
