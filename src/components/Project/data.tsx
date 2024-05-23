//src/components/Project/data.tsx

import egames from '../../assets/images/egames.png'
import efood from '../../assets/images/efood.png'
import gameshop from '../../assets/images/gameshop.png'
import satisfacao from '../../assets/images/satisfacao.png'
import acompanhamento from '../../assets/images/acompanhamento.png'
import galeria from '../../assets/images/galeria.png'
import restaurante from '../../assets/images/restaurante.png'
import sorteador from '../../assets/images/sorteador.png'
import emailmkt from '../../assets/images/emailmkt.png'
import tarefas from '../../assets/images/tarefas.png'
import { ProjectType } from '../../containers/Projects/index'

export const projectData: ProjectType[] = [
  {
    id: 'Git1',
    imgSrc: efood,
    title: 'Site de Delivery',
    description:
      'Para este projeto, optei por utilizar React juntamente com TypeScript. A escolha do React permitiu-me criar uma interface de usuário interativa e eficiente, enquanto o TypeScript ofereceu um sistema de tipos robusto que melhorou a qualidade do código e facilitou a manutenção.',
    languages: ['typescript', 'react', 'html5', 'css3', 'redux'],
    githubLink: 'https://github.com/ramagla/eFood',
    vercelLink: 'https://e-food-inky.vercel.app/'
  },
  {
    id: 'Git2',
    imgSrc: egames,
    title: 'Site de Game',
    description:
      'Neste projeto, desenvolvi uma loja virtual de games, implementada com o uso de React e TypeScript. A combinação dessas tecnologias permitiu a criação de uma plataforma robusta e escalável, proporcionando uma experiência de usuário fluida e dinâmica, além de garantir um código mais seguro e fácil de manter.',
    languages: ['typescript', 'react', 'html5', 'css3', 'redux'],
    githubLink: 'https://github.com/ramagla/eplay',
    vercelLink: 'https://eplay-khaki-nine.vercel.app/'
  },
  {
    id: 'Git3',
    imgSrc: gameshop,
    title: 'Site Games Shop',
    description:
      'Neste projeto, construímos uma estrutura básica utilizando CSS e HTML. Embora a responsividade não tenha sido implementada, o foco foi criar um exemplo didático para facilitar o aprendizado dessas tecnologias',
    languages: ['html5', 'css3'],
    githubLink: 'https://github.com/ramagla/site_gamesshop.git',
    vercelLink: 'https://site-gamesshop-red-two.vercel.app/'
  },
  {
    id: 'Git4',
    imgSrc: galeria,
    title: 'Site Galeria de Imagens',
    description:
      'Neste projeto, desenvolvemos uma galeria de imagens utilizando CSS, HTML e jQuery. A galeria foi projetada com uma interface simples e intuitiva. Apesar de não termos implementado um design responsivo, o objetivo foi criar um modelo prático que serve como uma introdução eficaz ao uso dessas ferramentas de desenvolvimento web.',
    languages: ['html5', 'css3', 'jquery'],
    githubLink: 'https://github.com/ramagla/jquery-galeria-fotos.git',
    vercelLink: 'https://jquery-galeria-fotos-nu-one.vercel.app/'
  },
  {
    id: 'Git5',
    imgSrc: restaurante,
    title: 'Site Restaurante',
    description:
      'Este projeto apresenta o desenvolvimento de um website inovador para um restaurante, que explora integralmente as funcionalidades do Bootstrap para criar uma experiência de usuário excepcional e um design responsivo.',
    languages: ['html5', 'css3', 'bootstrap'],
    githubLink: 'https://github.com/ramagla/bootstrap_restaurante.git',
    vercelLink: 'https://bootstrap-restaurante-lemon.vercel.app/'
  },
  {
    id: 'Git6',
    imgSrc: sorteador,
    title: 'Site Sorteador',
    description:
      'Neste projeto, foi empregado o Grunt para automatizar tarefas de desenvolvimento e construir um sistema avançado de sorteio de números aleatórios.',
    languages: ['html5', 'css3', 'grunt'],
    githubLink: 'https://github.com/ramagla/bootstrap_restaurante.git',
    vercelLink: 'https://bootstrap-restaurante-lemon.vercel.app/'
  },
  {
    id: 'Git7',
    imgSrc: emailmkt,
    title: 'Emails Marketing',
    description:
      'Desenvolvimento de 4 emails marketing em HTML com estilização embutida no código. Essa estratégia garante que os emails sejam renderizados corretamente em diversos dispositivos, proporcionando uma experiência impecável para os clientes.',
    languages: ['html5'],
    githubLink: 'https://github.com/ramagla/email_market.git',
    vercelLink: 'https://email-market.vercel.app/'
  },
  {
    id: 'Git8',
    imgSrc: tarefas,
    title: 'Lista de tarefas',
    description:
      'Neste projeto, desenvolvemos uma lista de tarefas utilizando React e TypeScript, com funcionalidades de busca e soma automática.',
    languages: ['typescript', 'react', 'html5', 'css3', 'redux'],
    githubLink: 'https://github.com/ramagla/minhas-tarefas.git',
    vercelLink: 'https://minhas-tarefas-zeta.vercel.app/'
  }
]

export const pbiData: Omit<
  ProjectType,
  'languages' | 'githubLink' | 'vercelLink'
>[] = [
  // objetos sem propriedade id
  {
    imgSrc: satisfacao,
    title: 'Projeto de pesquisa de Satisfação dos Colaboradores',
    description: 'Recursos Humanos',
    dashboardLink:
      'https://app.powerbi.com/view?r=eyJrIjoiZDdhMjhlYzItYmZjNi00MTgzLWE2ODQtMzExZGQ2MzUxMjRlIiwidCI6IjIxY2MyMTdmLWYzYzktNDQ2OC04YTFiLTJiNzIzODJkYTVhMSJ9',
    id: ''
  },
  {
    imgSrc: acompanhamento,
    title: 'Projeto de Acompanhamento de vendas: Franquia de lojas',
    description: 'Setor Financeiro',
    dashboardLink:
      'https://app.powerbi.com/view?r=eyJrIjoiY2EyNzAwYTMtYWFlNy00YjQ5LWI0ZDItMmI5YWM5MDM1MTM4IiwidCI6IjIxY2MyMTdmLWYzYzktNDQ2OC04YTFiLTJiNzIzODJkYTVhMSJ9',
    id: ''
  }
]
