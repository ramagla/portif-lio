import { Card, LinkBotao, LinkBotao2 } from './styles'
import Paragrafo from '../Paragrafo'
import Titulo from '../Titulo'

const Projeto = () => (
  <Card>
    <Titulo>Projeto Lista de tarefas</Titulo>
    <Paragrafo tipo="secundario">Lista de tarefas feita com VueJs</Paragrafo>
    <LinkBotao>Github</LinkBotao>
    <LinkBotao2>Vercel</LinkBotao2>
  </Card>
)

export default Projeto
