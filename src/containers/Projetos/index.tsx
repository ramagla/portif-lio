import { Projeto1, Projeto2 } from '../../components/Projeto'

import Titulo from '../../components/Titulo'

import { Lista } from './styles'

const Projetos = () => (
  <section>
    <Titulo fontSize={16}>Projetos Github</Titulo>
    <Lista>
      <li>
        <Projeto1 />
      </li>
      <li>
        <Projeto2 />
      </li>
    </Lista>
  </section>
)

export default Projetos
