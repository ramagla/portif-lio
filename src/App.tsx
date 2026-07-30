import { Analytics } from '@vercel/analytics/react'
import {
  FaArrowDown,
  FaArrowUpRightFromSquare,
  FaEnvelope,
  FaGithub,
  FaLinkedinIn
} from 'react-icons/fa6'
import './app.css'

type Project = {
  title: string
  eyebrow: string
  description: string
  tags: string[]
  href: string
  liveUrl?: string
  tone: 'blue' | 'green' | 'purple' | 'coral'
  number: string
}

const projects: Project[] = [
  {
    title: 'Portal de Gestão',
    eyebrow: 'Produto corporativo',
    description:
      'Portal operacional que conecta indicadores, rotinas de DP e módulos internos em uma experiência única, segura e instalável.',
    tags: ['Django', 'React', 'Oracle', 'PWA'],
    href: 'https://github.com/ramagla/Projeto_BI',
    tone: 'blue',
    number: '01'
  },
  {
    title: 'SIB',
    eyebrow: 'Presença digital',
    description:
      'Landing page institucional criada para apresentar o negócio com clareza, fortalecer a marca e transformar visitas em contatos.',
    tags: ['React', 'UX/UI', 'Responsivo'],
    href: 'https://github.com/ramagla/landpage_sib',
    tone: 'green',
    number: '02'
  },
  {
    title: 'Romeu Beauty',
    eyebrow: 'Landing page',
    description:
      'Experiência elegante para um profissional de beleza, com serviços, portfólio, prova social e conversão direta pelo WhatsApp.',
    tags: ['React', 'Vite', 'Tailwind', 'SEO'],
    href: 'https://github.com/ramagla/landpage_romeu',
    liveUrl: 'https://www.romeuferrazin.com.br',
    tone: 'purple',
    number: '03'
  },
  {
    title: 'Duda 16',
    eyebrow: 'Convite digital',
    description:
      'Convite interativo com validação de convidados, RSVP, mensagens, check-in e painel administrativo para gestão do evento.',
    tags: ['React', 'APIs', 'SQLite', 'Vercel'],
    href: 'https://github.com/ramagla/landpage_duda',
    liveUrl: 'https://www.dudanoibiza.com.br',
    tone: 'coral',
    number: '04'
  }
]

const capabilities = [
  {
    number: '01',
    title: 'Transformo processos em produtos',
    text: 'Entendo a operação, organizo requisitos e construo soluções digitais que simplificam o trabalho real.'
  },
  {
    number: '02',
    title: 'Uno negócio e tecnologia',
    text: 'Experiência com projetos de TI, gestão, dados e desenvolvimento full stack para tomar decisões mais completas.'
  },
  {
    number: '03',
    title: 'Entrego com visão de ponta a ponta',
    text: 'Da descoberta ao deploy: interface, integrações, automações, indicadores e evolução contínua do produto.'
  }
]

function ProjectPreview({ project }: { project: Project }) {
  return (
    <div
      className={`project-preview project-preview--${project.tone}`}
      aria-hidden="true"
    >
      <div className="preview-topbar">
        <span />
        <span />
        <span />
        <small>{project.number}</small>
      </div>
      <div className="preview-shell">
        <div className="preview-sidebar">
          <span className="preview-logo">RA</span>
          <i />
          <i />
          <i />
        </div>
        <div className="preview-content">
          <span className="preview-kicker">{project.eyebrow}</span>
          <strong>{project.title}</strong>
          <div className="preview-line preview-line--long" />
          <div className="preview-line" />
          <div className="preview-grid">
            <i />
            <i />
            <i />
          </div>
        </div>
      </div>
    </div>
  )
}

function App() {
  return (
    <>
      <Analytics />
      <header className="site-header">
        <a
          className="brand"
          href="#inicio"
          aria-label="Rafael Almeida — início"
        >
          RA<span>.</span>
        </a>
        <nav aria-label="Navegação principal">
          <a href="#sobre">Sobre</a>
          <a href="#projetos">Projetos</a>
          <a href="#contato">Contato</a>
        </nav>
        <a
          className="header-link"
          href="https://github.com/ramagla"
          target="_blank"
          rel="noreferrer"
        >
          GitHub <FaArrowUpRightFromSquare />
        </a>
      </header>

      <main>
        <section className="hero section" id="inicio">
          <div className="hero-copy">
            <p className="eyebrow">
              <span />
              Gestão de projetos & desenvolvimento
            </p>
            <h1>
              Transformo desafios de negócio em <em>soluções digitais.</em>
            </h1>
            <p className="hero-description">
              Sou Rafael Almeida. Conecto visão de gestão, dados e tecnologia
              para criar produtos úteis, claros e prontos para evoluir.
            </p>
            <div className="hero-actions">
              <a className="button button--primary" href="#projetos">
                Ver projetos <FaArrowDown />
              </a>
              <a
                className="button button--ghost"
                href="https://www.linkedin.com/in/dealmeidasilva/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn /> LinkedIn
              </a>
            </div>
          </div>

          <div className="hero-card">
            <div className="portrait-frame">
              <img
                src="https://github.com/ramagla.png"
                alt="Rafael Almeida"
                width="420"
                height="420"
              />
              <span className="status-dot" aria-hidden="true" />
            </div>
            <div className="hero-card-caption">
              <span>Brasil</span>
              <strong>Disponível para novos desafios</strong>
            </div>
          </div>

          <a
            className="scroll-cue"
            href="#sobre"
            aria-label="Ir para a seção sobre"
          >
            Role para descobrir <FaArrowDown />
          </a>
        </section>

        <section className="about section" id="sobre">
          <div className="section-heading">
            <p className="eyebrow">Sobre mim</p>
            <h2>Estratégia na cabeça. Código nas mãos.</h2>
          </div>
          <div className="about-intro">
            <p className="about-lead">
              Minha experiência une gestão de projetos de TI e desenvolvimento
              full stack para resolver problemas com visão prática.
            </p>
            <p>
              Gosto de entrar no contexto, entender pessoas e processos, e
              traduzir tudo em uma solução simples de usar. Trabalho com
              aplicações web, portais corporativos, automações, dados e
              experiências digitais para negócios.
            </p>
          </div>
          <div className="capabilities">
            {capabilities.map((capability) => (
              <article key={capability.number}>
                <span>{capability.number}</span>
                <h3>{capability.title}</h3>
                <p>{capability.text}</p>
              </article>
            ))}
          </div>
          <div className="stack">
            <span>Trabalho com</span>
            <div>
              <strong>Python</strong>
              <strong>Django</strong>
              <strong>React</strong>
              <strong>TypeScript</strong>
              <strong>Power BI</strong>
              <strong>SQL</strong>
              <strong>AWS</strong>
            </div>
          </div>
        </section>

        <section className="projects section" id="projetos">
          <div className="section-heading section-heading--projects">
            <div>
              <p className="eyebrow">Projetos selecionados</p>
              <h2>Trabalho que resolve.</h2>
            </div>
            <p>
              Uma seleção de produtos digitais, sistemas de gestão e
              experiências criadas para contextos reais.
            </p>
          </div>

          <div className="project-list">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <ProjectPreview project={project} />
                <div className="project-copy">
                  <span className="project-number">
                    Projeto {project.number}
                  </span>
                  <p className="project-eyebrow">{project.eyebrow}</p>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <ul aria-label={`Tecnologias do projeto ${project.title}`}>
                    {project.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                  <div className="project-links">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Ver projeto <FaArrowUpRightFromSquare />
                      </a>
                    )}
                    <a href={project.href} target="_blank" rel="noreferrer">
                      <FaGithub /> Código
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <a
            className="all-projects"
            href="https://github.com/ramagla?tab=repositories"
            target="_blank"
            rel="noreferrer"
          >
            Ver todos os projetos no GitHub <FaArrowUpRightFromSquare />
          </a>
        </section>

        <section className="contact section" id="contato">
          <p className="eyebrow">Vamos conversar</p>
          <h2>
            Tem um desafio em mente?
            <br />
            <em>Vamos tirar do papel.</em>
          </h2>
          <p>
            Estou aberto a projetos, parcerias e oportunidades em que gestão e
            tecnologia precisem trabalhar juntas.
          </p>
          <div className="contact-actions">
            <a
              className="button button--light"
              href="mailto:ramagla1@gmail.com"
            >
              <FaEnvelope /> Enviar e-mail
            </a>
            <a
              className="button button--outline"
              href="https://www.linkedin.com/in/dealmeidasilva/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn /> Conectar no LinkedIn
            </a>
          </div>
        </section>
      </main>

      <footer>
        <a className="brand" href="#inicio">
          RA<span>.</span>
        </a>
        <p>© {new Date().getFullYear()} Rafael Almeida</p>
        <div>
          <a href="https://github.com/ramagla" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/dealmeidasilva/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </footer>
    </>
  )
}

export default App
