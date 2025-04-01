import satisfacao from '../../assets/images/powerbi/satisfacao.png'
import acompanhamento from '../../assets/images/powerbi/acompanhamento.png'
import { ProjectType } from '../../containers/Projects'

const pbiData: ProjectType[] = [
  {
    id: 'PBI1',
    imgSrc: satisfacao,
    title: 'Projeto de pesquisa de Satisfação dos Colaboradores',
    description: 'Recursos Humanos',
    dashboardLink:
      'https://app.powerbi.com/view?r=eyJrIjoiZDdhMjhlYzItYmZjNi00MTgzLWE2ODQtMzExZGQ2MzUxMjRlIiwidCI6IjIxY2MyMTdmLWYzYzktNDQ2OC04YTFiLTJiNzIzODJkYTVhMSJ9',
    source: 'powerbi'
  },
  {
    id: 'PBI2',
    imgSrc: acompanhamento,
    title: 'Projeto de Acompanhamento de vendas: Franquia de lojas',
    description: 'Setor Financeiro',
    dashboardLink:
      'https://app.powerbi.com/view?r=eyJrIjoiY2EyNzAwYTMtYWFlNy00YjQ5LWI0ZDItMmI5YWM5MDM1MTM4IiwidCI6IjIxY2MyMTdmLWYzYzktNDQ2OC04YTFiLTJiNzIzODJkYTVhMSJ9',
    source: 'powerbi'
  }
]

export default pbiData
