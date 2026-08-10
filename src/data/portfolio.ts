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
import {
  FaCodeBranch,
  FaDiagramProject,
  FaNetworkWired,
  FaServer,
  FaShieldHalved
} from 'react-icons/fa6'

export const contacts = {
  email: 'dealmeida.silva@hotmail.com',
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
    description: 'BPM, desenho de processos, governança e práticas de gestão.',
    items: [
      { name: 'Bizagi', image: '/brand/bizagi.webp' },
      { name: 'BPM', icon: FaDiagramProject },
      { name: 'Gestão de Projetos', icon: FaDiagramProject },
      { name: 'Scrum', icon: FaCodeBranch },
      { name: 'Kanban', icon: FaCodeBranch },
      { name: 'ITIL', icon: FaDiagramProject },
      { name: 'COBIT', icon: FaDiagramProject }
    ]
  },
  {
    number: '02',
    title: 'Infraestrutura & Cloud',
    description:
      'Ambientes, identidade, conectividade, segurança e sustentação corporativa.',
    items: [
      { name: 'AWS', icon: SiAmazonaws },
      { name: 'AWS EC2', icon: SiAmazonaws },
      { name: 'Windows Server', icon: FaServer },
      { name: 'Linux', icon: SiLinux },
      { name: 'Active Directory', icon: SiMicrosoft },
      { name: 'Microsoft 365', icon: SiMicrosoft },
      { name: 'Apache', icon: SiApache },
      { name: 'pfSense', icon: FaShieldHalved },
      { name: 'OpenVPN', icon: FaNetworkWired }
    ]
  },
  {
    number: '03',
    title: 'Desenvolvimento & Automação',
    description:
      'Aplicações, integrações e automação de processos corporativos.',
    items: [
      { name: 'Python', icon: SiPython },
      { name: 'Django', icon: SiDjango },
      { name: 'PowerShell', icon: FaCodeBranch },
      { name: 'Power Automate', icon: SiMicrosoft },
      { name: 'React', icon: SiReact },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'REST APIs', icon: FaCodeBranch },
      { name: 'Git', icon: SiGit },
      { name: 'HTML', icon: SiHtml5 },
      { name: 'CSS', icon: SiCss3 }
    ]
  },
  {
    number: '04',
    title: 'Dados & BI',
    description:
      'Bancos de dados, indicadores, análise e suporte à tomada de decisão.',
    items: [
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'Oracle', icon: SiOracle },
      { name: 'SQL', icon: FaCodeBranch },
      { name: 'Power BI', icon: SiPowerbi },
      { name: 'DAX', icon: FaCodeBranch },
      { name: 'Excel', icon: SiMicrosoft },
      { name: 'Redis', icon: SiRedis }
    ]
  },
  {
    number: '05',
    title: 'Sistemas & Integrações',
    description:
      'Sistemas corporativos e integração entre aplicações, dados e operação.',
    items: [
      { name: 'Teknisa', icon: FaDiagramProject },
      { name: 'APIs REST', icon: FaCodeBranch },
      { name: 'Microsoft 365', icon: SiMicrosoft }
    ]
  }
]

export type EducationItem = {
  number: string
  category: string
  title: string
  detail?: string
  credential?: string
  logo?: string
  logoAlt?: string
}

export const education: EducationItem[] = [
  {
    number: '01',
    category: 'Graduação',
    title: 'Engenharia da Computação',
    detail: 'Engenheiro da Computação',
    credential: 'CREA ativo',
    logo: '/brand/crea-logo.png',
    logoAlt: 'CREA'
  },
  {
    number: '02',
    category: 'Tecnólogo',
    title: 'Redes de Computadores',
    detail: 'Tecnólogo em Redes de Computadores'
  },
  {
    number: '03',
    category: 'MBA',
    title: 'Gestão de Projetos',
    detail: 'Pontifícia Universidade Católica',
    logo: '/brand/puc-logo.png',
    logoAlt: 'PUC'
  },
  {
    number: '04',
    category: 'Pós-graduação',
    title: 'Perícia Forense Computacional'
  }
]

export type ProjectItem = {
  title: string
  eyebrow: string
  description: string
  tags: string[]
  image: string
  deliverables: string[]
  href?: string
  liveUrl?: string
  imageFit?: 'cover' | 'contain'
  availability?: string
}

export const projects: ProjectItem[] = [
  {
    title: 'Portal de Gestão',
    eyebrow: 'Produto corporativo',
    description:
      'Portal operacional que centraliza indicadores, rotinas de DP e módulos internos em uma experiência única, segura e instalável.',
    tags: ['Python', 'Django', 'PostgreSQL', 'Oracle', 'Redis', 'AWS', 'APIs'],
    image: '/projects/portal-gestao.webp',
    liveUrl: 'https://portal.apoioadministrativo.net.br/',
    deliverables: [
      'Indicadores e rotinas corporativas centralizados',
      'Integrações entre aplicações, bancos de dados e infraestrutura'
    ]
  },
  {
    title: 'SIB',
    eyebrow: 'Presença digital',
    description:
      'Projeto institucional com foco em clareza de marca, jornada de contato e experiência responsiva.',
    tags: ['React', 'UX/UI', 'Responsivo'],
    image: '/projects/sib-logo.webp',
    imageFit: 'contain',
    deliverables: [
      'Apresentação institucional adaptada a diferentes telas',
      'Jornada direta para informações e contato'
    ],
    availability: 'Detalhes técnicos sob consulta'
  },
  {
    title: 'Romeu Beauty',
    eyebrow: 'Experiência digital',
    description:
      'Site profissional com serviços, portfólio e caminhos diretos de contato.',
    tags: ['React', 'Vite', 'SEO'],
    href: 'https://github.com/ramagla/landpage_romeu',
    liveUrl: 'https://www.romeuferrazin.com.br',
    image: '/projects/romeu-beauty.webp',
    deliverables: [
      'Serviços e portfólio organizados para descoberta',
      'SEO técnico e caminhos de conversão para contato'
    ]
  },
  {
    title: 'Duda 16',
    eyebrow: 'Produto para evento',
    description:
      'Convite digital com RSVP, mensagens, check-in e painel administrativo.',
    tags: ['React', 'APIs', 'SQLite', 'Vercel'],
    liveUrl: 'https://www.dudanoibiza.com.br',
    image: '/projects/duda-16.webp',
    deliverables: [
      'Confirmação de presença e mensagens integradas',
      'Painel administrativo e fluxo de check-in'
    ],
    availability: 'Código não divulgado por privacidade'
  },
  {
    title: 'Rifa da Malu',
    eyebrow: 'Plataforma transacional',
    description:
      'Plataforma de rifa solidária com escolha de números, reservas, pagamento via PIX e painel de administração.',
    tags: ['React', 'Vite', 'Node.js', 'Turso', 'PIX'],
    href: 'https://github.com/ramagla/rifa-malu',
    liveUrl: 'https://rifa-malu.vercel.app/',
    image: '/projects/rifa-malu.png',
    deliverables: [
      'Reserva de números e confirmação de pagamento via PIX',
      'Painel para acompanhar vendas, participantes e o sorteio'
    ]
  }
]
