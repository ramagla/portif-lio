import type { IconType } from 'react-icons'
import {
  SiAmazonaws,
  SiApache,
  SiCss3,
  SiDjango,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiLinux,
  SiMicrosoft,
  SiOracle,
  SiPostgresql,
  SiPowerbi,
  SiPython,
  SiReact,
  SiRedis,
  SiTypescript
} from 'react-icons/si'
import { FaCodeBranch, FaDiagramProject, FaServer } from 'react-icons/fa6'

export const contacts = {
  email: 'rafaelalmeida@outlook.com',
  github: 'https://github.com/ramagla',
  linkedin: 'https://www.linkedin.com/in/dealmeidasilva/',
  whatsapp:
    'https://wa.me/5511920850975?text=Ol%C3%A1%20Rafael%2C%20vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto%20ou%20oportunidade.'
}

export const highlights = [
  {
    value: '18+',
    label: 'Anos',
    detail: 'Tecnologia da Informação na prática.'
  },
  {
    value: 'Gestão',
    label: 'Tecnologia',
    detail: 'Projetos, prioridades e operação.'
  },
  {
    value: 'Infra',
    label: '& Cloud',
    detail: 'Ambientes corporativos e disponibilidade.'
  },
  {
    value: 'Sistemas',
    label: '& Integrações',
    detail: 'Aplicações conectadas ao negócio.'
  },
  {
    value: 'Auto.',
    label: '& Dev',
    detail: 'Processos, APIs e ferramentas internas.'
  },
  { value: 'Dados', label: '& BI', detail: 'Indicadores para apoiar decisões.' }
]

export const areas = [
  {
    number: '01',
    title: 'Gestão de Tecnologia',
    text: 'Planejamento, priorização, projetos, demandas, fornecedores, equipes e evolução dos ambientes tecnológicos.'
  },
  {
    number: '02',
    title: 'Infraestrutura & Cloud',
    text: 'Servidores, redes, Windows e Linux, Active Directory, Microsoft 365, AWS, segurança, VPN e disponibilidade.'
  },
  {
    number: '03',
    title: 'Sistemas & Integrações',
    text: 'Sistemas corporativos, APIs e conexão entre aplicações, processos e dados.'
  },
  {
    number: '04',
    title: 'Automação & Desenvolvimento',
    text: 'Python, Django, PowerShell, React e ferramentas internas voltadas à operação.'
  },
  {
    number: '05',
    title: 'Dados & BI',
    text: 'PostgreSQL, Oracle, SQL, Power BI, indicadores, relatórios e apoio à tomada de decisão.'
  },
  {
    number: '06',
    title: 'Processos & Transformação Digital',
    text: 'Mapeamento de processos, BPM, Bizagi, digitalização e redução de tarefas manuais.'
  }
]

type Technology = { name: string; icon?: IconType; image?: string }
export type TechnologyGroup = {
  number: string
  title: string
  description: string
  items: Technology[]
}

export const technologyGroups: TechnologyGroup[] = [
  {
    number: '01',
    title: 'Gestão & Processos',
    description: 'BPM, desenho de processos e práticas de gestão.',
    items: [
      { name: 'Bizagi', image: '/brand/bizagi.webp' },
      { name: 'BPM', icon: FaDiagramProject },
      { name: 'Scrum', icon: FaCodeBranch },
      { name: 'Kanban', icon: FaCodeBranch }
    ]
  },
  {
    number: '02',
    title: 'Infraestrutura & Cloud',
    description: 'Ambientes, serviços e sustentação corporativa.',
    items: [
      { name: 'AWS', icon: SiAmazonaws },
      { name: 'Windows Server', icon: FaServer },
      { name: 'Linux', icon: SiLinux },
      { name: 'Microsoft 365', icon: SiMicrosoft },
      { name: 'Apache', icon: SiApache }
    ]
  },
  {
    number: '03',
    title: 'Desenvolvimento & Automação',
    description: 'Aplicações, integrações e rotinas automatizadas.',
    items: [
      { name: 'Python', icon: SiPython },
      { name: 'Django', icon: SiDjango },
      { name: 'React', icon: SiReact },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'PowerShell', icon: FaCodeBranch },
      { name: 'REST APIs', icon: FaCodeBranch },
      { name: 'Git', icon: SiGit },
      { name: 'HTML', icon: SiHtml5 },
      { name: 'CSS', icon: SiCss3 }
    ]
  },
  {
    number: '04',
    title: 'Dados & BI',
    description: 'Bases, indicadores e suporte à decisão.',
    items: [
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'Oracle', icon: SiOracle },
      { name: 'Power BI', icon: SiPowerbi },
      { name: 'Redis', icon: SiRedis },
      { name: 'SQL', icon: FaCodeBranch }
    ]
  }
]

export const projects = [
  {
    title: 'Portal de Gestão',
    eyebrow: 'Produto corporativo',
    description:
      'Portal operacional que centraliza indicadores, rotinas de DP e módulos internos em uma experiência única, segura e instalável.',
    tags: ['Python', 'Django', 'PostgreSQL', 'Oracle', 'Redis', 'AWS', 'APIs'],
    href: 'https://github.com/ramagla/Projeto_BI',
    image: '/projects/portal-gestao.webp'
  },
  {
    title: 'SIB',
    eyebrow: 'Presença digital',
    description:
      'Projeto institucional com foco em clareza de marca, jornada de contato e experiência responsiva.',
    tags: ['React', 'UX/UI', 'Responsivo'],
    href: 'https://github.com/ramagla/landpage_sib',
    image: '/projects/sib-logo.webp',
    imageFit: 'contain' as const
  },
  {
    title: 'Romeu Beauty',
    eyebrow: 'Experiência digital',
    description:
      'Site profissional com serviços, portfólio e caminhos diretos de contato.',
    tags: ['React', 'Vite', 'SEO'],
    href: 'https://github.com/ramagla/landpage_romeu',
    liveUrl: 'https://www.romeuferrazin.com.br',
    image: '/projects/romeu-beauty.webp'
  },
  {
    title: 'Duda 16',
    eyebrow: 'Produto para evento',
    description:
      'Convite digital com RSVP, mensagens, check-in e painel administrativo.',
    tags: ['React', 'APIs', 'SQLite', 'Vercel'],
    href: 'https://github.com/ramagla/landpage_duda',
    liveUrl: 'https://www.dudanoibiza.com.br',
    image: '/projects/duda-16.webp'
  }
]
