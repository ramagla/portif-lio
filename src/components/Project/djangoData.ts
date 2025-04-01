import iatf from '../../assets/images/django/iatf.png'
import custos from '../../assets/images/django/custos.png'
import { ProjectType } from '../../containers/Projects'

const djangoData: ProjectType[] = [
  {
    id: 'Django1',
    imgSrc: iatf,
    title: 'Gestão da Qualidade IATF',
    description:
      'Sistema de Gestão da Qualidade voltado para a norma automotiva IATF, oferecendo suporte aos processos de certificação e conformidade. Hospedado na AWS da Amazon. Acesso de testes: usuário "teste" e senha "teste@2025".',
    languages: ['python', 'postgresql', 'bootstrap', 'nginx', 'gunicorn'],
    vercelLink: 'http://3.17.9.233/',
    source: 'django'
  },
  {
    id: 'Django2',
    imgSrc: custos,
    title: 'Controle de Custos Internos',
    description:
      'Sistema de gestão de centros de custos com foco em planejamento financeiro, baseado na norma IEEE/ISO. Possui cadastro de contas, subcontas, lançamentos manuais e por XML, análise de gastos com interferência, exportação PDF/Excel, logs de alterações e controle por permissões. Acesso de testes: usuário "teste" e senha "teste@2025".',
    languages: ['python', 'postgresql', 'bootstrap', 'nginx', 'gunicorn'],
    vercelLink: 'http://18.218.20.79/',
    source: 'django'
  }
]

export default djangoData
