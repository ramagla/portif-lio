import { useState, type CSSProperties } from 'react'
import { Analytics } from '@vercel/analytics/react'
import {
  FaArrowDown,
  FaArrowUpRightFromSquare,
  FaBars,
  FaCloud,
  FaCode,
  FaDatabase,
  FaDiagramProject,
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
  FaNetworkWired,
  FaServer,
  FaShieldHalved,
  FaUsersGear,
  FaWhatsapp
} from 'react-icons/fa6'
import {
  areas,
  contacts,
  education,
  highlights,
  projects,
  technologyGroups
} from './data/portfolio'
import './app.css'

const areaIcons = [
  FaUsersGear,
  FaCloud,
  FaDiagramProject,
  FaCode,
  FaDatabase,
  FaNetworkWired
]

const experienceAreas = [
  {
    title: 'Gestão',
    text: 'Projetos, equipes, fornecedores e prioridades',
    icon: FaUsersGear
  },
  {
    title: 'Infraestrutura',
    text: 'Servidores, redes, cloud e ambientes corporativos',
    icon: FaServer
  },
  {
    title: 'Sistemas',
    text: 'Aplicações, integrações e processos de negócio',
    icon: FaDiagramProject
  },
  {
    title: 'Automação',
    text: 'Python, PowerShell, APIs e Power Automate',
    icon: FaCode
  },
  {
    title: 'Dados',
    text: 'Oracle, PostgreSQL, SQL, BI e indicadores',
    icon: FaDatabase
  },
  {
    title: 'Desenvolvimento',
    text: 'Sistemas internos e soluções digitais',
    icon: FaShieldHalved
  }
]

type PortalModule = {
  id: string
  name: string
  shortName: string
  description: string
  status: 'Disponível' | 'Em desenvolvimento'
}

const portalModules: PortalModule[] = [
  {
    id: 'indicadores',
    name: 'Central de Indicadores',
    shortName: 'Indicadores',
    description:
      'Substitui relatórios dispersos em Power BI e Tableau, consolidando indicadores, dados e análises em um único portal corporativo.',
    status: 'Disponível'
  },
  {
    id: 'ti',
    name: 'Tecnologia da Informação',
    shortName: 'TI',
    description:
      'Central de gestão de TI orientada por ITIL, em desenvolvimento com referência nos principais recursos do GLPI para organizar serviços, ativos e atendimento.',
    status: 'Em desenvolvimento'
  },
  {
    id: 'prv',
    name: 'Apuração PRV',
    shortName: 'PRV',
    description:
      'Estrutura a apuração do Programa de Remuneração Variável, reunindo regras, indicadores e acompanhamento para dar transparência ao cálculo.',
    status: 'Disponível'
  },
  {
    id: 'dprh',
    name: 'Gestão DP/RH',
    shortName: 'DP/RH',
    description:
      'Integra Tangerino e TOTVS para apoiar campanhas, programas de assiduidade e uma visão 360 dos colaboradores nas rotinas de DP e RH.',
    status: 'Disponível'
  },
  {
    id: 'transportadas',
    name: 'Gestão de Transportadas',
    shortName: 'Transportadas',
    description:
      'Gerencia a operação de comidas transportadas e oferece um painel do cliente com visão de pedidos, serviços e acompanhamento da operação.',
    status: 'Disponível'
  },
  {
    id: 'demandas',
    name: 'Gestão de Demandas',
    shortName: 'Demandas',
    description: 'Registra, prioriza e acompanha solicitações entre as áreas.',
    status: 'Disponível'
  },
  {
    id: 'parametros',
    name: 'Parâmetros e frequência',
    shortName: 'Parâmetros',
    description:
      'Orquestrador de cargas do portal: define parâmetros, frequência e execução das rotinas que alimentam os módulos e indicadores.',
    status: 'Disponível'
  },
  {
    id: 'permissoes',
    name: 'Permissões',
    shortName: 'Permissões',
    description: 'Controla os acessos por usuário, grupo e perfil de atuação.',
    status: 'Disponível'
  },
  {
    id: 'alertas',
    name: 'Alertas e notificações',
    shortName: 'Notificações',
    description:
      'Centraliza notificações operacionais por e-mail e Teams, com integração via WhatsApp prevista para as próximas evoluções.',
    status: 'Disponível'
  },
  {
    id: 'integracoes',
    name: 'Integrações',
    shortName: 'Integrações',
    description:
      'Responsável por conectar o Portal de Gestão a diversos sistemas, centralizando fluxos, dados e automações entre as plataformas.',
    status: 'Disponível'
  },
  {
    id: 'versoes',
    name: 'Versões do sistema',
    shortName: 'Versões',
    description:
      'Mantém o histórico e as informações das versões disponibilizadas.',
    status: 'Disponível'
  },
  {
    id: 'orcamentos',
    name: 'Orçamentos',
    shortName: 'Orçamentos',
    description:
      'Módulo planejado para estruturar o ciclo de orçamento e seus acompanhamentos.',
    status: 'Em desenvolvimento'
  }
]

function Brand() {
  return (
    <span className="brand-lockup">
      <img src="/brand/ra-monogram-512.png" alt="" width="40" height="40" />
      <span className="brand-lockup__identity">
        Rafael
        <strong>Almeida</strong>
      </span>
      <span className="mimo-mark" aria-label="mimo">
        mimo<span>.</span>
      </span>
    </span>
  )
}

function ExternalIcon() {
  return <FaArrowUpRightFromSquare aria-hidden="true" />
}

function Portal360({ onClose }: { onClose: () => void }) {
  const [activeModuleId, setActiveModuleId] = useState('indicadores')
  const activeModule =
    portalModules.find(({ id }) => id === activeModuleId) ?? portalModules[0]

  return (
    <div
      className="portal-360-backdrop"
      role="presentation"
      onMouseDown={onClose}
    >
      <section
        className="portal-360"
        role="dialog"
        aria-modal="true"
        aria-labelledby="visao-360-title"
        onMouseDown={(event) => event.stopPropagation()}
        onKeyDown={(event) => {
          if (event.key === 'Escape') onClose()
        }}
      >
        <button
          className="portal-360-close"
          type="button"
          onClick={onClose}
          autoFocus
        >
          Fechar <span aria-hidden="true">×</span>
        </button>
        <div className="portal-360-heading">
          <div>
            <p className="eyebrow">
              <span />
              Visão 360
            </p>
            <h3 id="visao-360-title">Ecossistema do Portal de Gestão</h3>
          </div>
          <p>
            Explore os módulos. Ao passar o mouse ou usar o teclado, veja o
            propósito de cada frente.
          </p>
        </div>
        <div className="portal-360-layout">
          <div
            className="portal-360-orbit"
            aria-label="Módulos do Portal de Gestão"
          >
            <div className="portal-360-core">
              <span>Portal de</span>
              <strong>Gestão</strong>
              <small>
                {
                  portalModules.filter(({ status }) => status === 'Disponível')
                    .length
                }{' '}
                módulos ativos
              </small>
            </div>
            {portalModules.map((module, index) => (
              <button
                className={`portal-module ${module.status === 'Em desenvolvimento' ? 'portal-module--future' : ''} ${activeModule.id === module.id ? 'is-active' : ''}`}
                key={module.id}
                type="button"
                style={
                  {
                    '--module-angle': `${index * (360 / portalModules.length)}deg`
                  } as CSSProperties
                }
                onMouseEnter={() => setActiveModuleId(module.id)}
                onFocus={() => setActiveModuleId(module.id)}
                onClick={() => setActiveModuleId(module.id)}
                aria-pressed={activeModule.id === module.id}
              >
                {module.shortName}
              </button>
            ))}
          </div>
          <article
            className={`portal-module-detail ${activeModule.status === 'Em desenvolvimento' ? 'portal-module-detail--future' : ''}`}
          >
            <span>{activeModule.status}</span>
            <h4>{activeModule.name}</h4>
            <p>{activeModule.description}</p>
            <small>
              {activeModule.status === 'Disponível'
                ? 'Módulo atual do Portal de Gestão.'
                : 'Frente prevista para a evolução do produto.'}
            </small>
          </article>
        </div>
      </section>
    </div>
  )
}

function ProjectVisual({
  image,
  title,
  fit = 'cover'
}: {
  image: string
  title: string
  fit?: 'cover' | 'contain'
}) {
  return (
    <div className="project-visual">
      <div className="project-browser-bar" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <img
        className={`project-image project-image--${fit}`}
        src={image}
        alt={`Imagem do projeto ${title}`}
        loading="lazy"
        width="920"
        height="600"
      />
    </div>
  )
}

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [portal360Open, setPortal360Open] = useState(false)

  return (
    <>
      <Analytics />
      <a className="skip-link" href="#conteudo">
        Ir para o conteúdo principal
      </a>
      <header className="site-header">
        <a href="#inicio" aria-label="Rafael Almeida — início">
          <Brand />
        </a>
        <nav aria-label="Navegação principal">
          <a href="#sobre">Visão</a>
          <a href="#atuacao">Atuação</a>
          <a href="#projetos">Cases</a>
          <a href="#contato">Contato</a>
        </nav>
        <a
          className="header-link"
          href={contacts.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub <ExternalIcon />
        </a>
        <details
          className="mobile-menu"
          open={mobileMenuOpen}
          onToggle={(event) => setMobileMenuOpen(event.currentTarget.open)}
          onKeyDown={(event) => {
            if (event.key === 'Escape') {
              setMobileMenuOpen(false)
            }
          }}
        >
          <summary
            aria-label={mobileMenuOpen ? 'Fechar navegação' : 'Abrir navegação'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            <FaBars aria-hidden="true" />
          </summary>
          <nav
            id="mobile-navigation"
            aria-label="Navegação mobile"
            onClick={(event) => {
              if ((event.target as HTMLElement).closest('a')) {
                setMobileMenuOpen(false)
              }
            }}
          >
            <a href="#sobre">Visão</a>
            <a href="#atuacao">Atuação</a>
            <a href="#projetos">Cases</a>
            <a href="#contato">Contato</a>
            <a
              href={contacts.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn <ExternalIcon />
            </a>
            <a href={contacts.github} target="_blank" rel="noopener noreferrer">
              GitHub <ExternalIcon />
            </a>
          </nav>
        </details>
      </header>

      <main id="conteudo">
        <section className="hero section" id="inicio">
          <div className="hero-shape hero-shape--one" aria-hidden="true" />
          <div className="hero-shape hero-shape--two" aria-hidden="true" />
          <div className="hero-copy">
            <p className="eyebrow">
              <span /> Coordenador de TI · Gestão · Infraestrutura · Sistemas ·
              Automação
            </p>
            <p className="hero-name">Rafael Almeida</p>
            <h1>
              Tecnologia com <em>visão de negócio.</em>
            </h1>
            <p className="hero-description">
              Coordenador de TI com 18+ anos de experiência, conectando gestão,
              infraestrutura, sistemas, dados, automação e desenvolvimento para
              conduzir soluções de ponta a ponta.
            </p>
            <div className="hero-actions">
              <a className="button button--primary" href="#projetos">
                Ver projetos <FaArrowDown />
              </a>
              <a
                className="button button--whatsapp"
                href={contacts.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp /> WhatsApp
              </a>
              <a
                className="button button--ghost"
                href={contacts.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn /> LinkedIn
              </a>
            </div>
          </div>

          <aside
            className="hero-card"
            aria-label="Apresentação profissional de Rafael Almeida"
          >
            <div className="portrait-frame">
              <img
                src="/brand/rafael-professional.webp"
                alt="Rafael Almeida, Coordenador de TI"
                width="420"
                height="525"
                decoding="async"
                fetchPriority="high"
              />
            </div>
            <div className="hero-card-caption">
              <div>
                <span>Rafael Almeida</span>
                <strong>Coordenador de TI</strong>
              </div>
              <small>
                São Paulo · Brasil
                <br />
                18+ anos em Tecnologia
              </small>
            </div>
          </aside>

          <div
            className="hero-proof"
            aria-label="Áreas centrais de experiência"
          >
            <span>
              <b>18+</b> anos em tecnologia
            </span>
            <span>
              Gestão <i /> Tecnologia
            </span>
            <span>Soluções de ponta a ponta</span>
          </div>
        </section>

        <section
          className="highlights section"
          aria-label="Destaques profissionais"
        >
          {highlights.map(({ value, label, detail }) => (
            <article key={label} className="highlight-card">
              <strong>{value}</strong>
              <span>{label}</span>
              <p>{detail}</p>
            </article>
          ))}
        </section>

        <section className="about" id="sobre">
          <div className="section about-inner">
            <div className="section-heading">
              <p className="eyebrow">Sobre</p>
              <h2>
                Tecnologia que aproxima <em>estratégia e execução.</em>
              </h2>
            </div>
            <div className="about-copy">
              <p className="about-lead">
                Minha atuação reúne gestão de TI, infraestrutura, sistemas
                corporativos, processos, automação, dados e desenvolvimento.
              </p>
              <p>
                Estruturo necessidades da operação, organizo o caminho do
                projeto e participo tecnicamente da construção quando necessário
                — da arquitetura e integração ao ambiente, deploy, monitoramento
                e evolução da solução.
              </p>
            </div>
          </div>
        </section>

        <section className="areas section" id="atuacao">
          <div className="section-heading section-heading--row">
            <div>
              <p className="eyebrow">Áreas de atuação</p>
              <h2>
                Amplitude para conduzir <em>TI na prática.</em>
              </h2>
            </div>
            <p>
              Visão executiva sem perder proximidade com a operação e a
              tecnologia.
            </p>
          </div>
          <div className="areas-grid">
            {areas.map((area, index) => {
              const Icon = areaIcons[index]
              return (
                <article className="area-card" key={area.title}>
                  <div className="area-card-top">
                    <span>{area.number}</span>
                    <Icon aria-hidden="true" />
                  </div>
                  <h3>{area.title}</h3>
                  <p>{area.text}</p>
                </article>
              )
            })}
          </div>
        </section>

        <section
          className="experience section"
          aria-labelledby="experiencia-title"
        >
          <div className="experience-intro">
            <p className="eyebrow">18+ anos em Tecnologia</p>
            <h2 id="experiencia-title">
              Experiência que conecta operação, <em>gestão e tecnologia.</em>
            </h2>
            <p>
              Uma atuação ampla, construída em ambientes corporativos e produtos
              digitais — sem transformar o portfólio em currículo.
            </p>
          </div>
          <div className="experience-map">
            {experienceAreas.map(({ title, text, icon: MapIcon }, index) => {
              return (
                <article key={title as string} className="experience-node">
                  <span>0{index + 1}</span>
                  <MapIcon aria-hidden="true" />
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </article>
              )
            })}
          </div>
        </section>

        <section
          className="education section"
          id="formacao"
          aria-labelledby="formacao-title"
        >
          <div className="section-heading section-heading--row">
            <div>
              <p className="eyebrow">Formação & credenciais</p>
              <h2 id="formacao-title">
                Formação acadêmica que complementa a{' '}
                <em>experiência prática.</em>
              </h2>
            </div>
            <p>
              Engenharia, gestão de projetos e perícia forense computacional
              como bases complementares da minha atuação em Tecnologia da
              Informação.
            </p>
          </div>

          <div className="education-grid">
            {education.map((item) => (
              <article className="education-card" key={item.title}>
                <div className="education-card-top">
                  <span className="education-number">{item.number}</span>
                  <span className="education-category">{item.category}</span>
                </div>

                <div className="education-card-content">
                  <h3>{item.title}</h3>

                  {item.detail && (
                    <p className="education-detail">{item.detail}</p>
                  )}
                </div>

                {(item.logo || item.credential) && (
                  <div className="education-meta">
                    {item.logo && (
                      <div className="education-brand">
                        <img
                          src={item.logo}
                          alt={item.logoAlt ?? ''}
                          width="120"
                          height="48"
                          loading="lazy"
                        />
                      </div>
                    )}

                    {item.credential && (
                      <span className="education-credential">
                        {item.credential}
                      </span>
                    )}
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>

        <section className="technology" id="tecnologias">
          <div className="section">
            <div className="section-heading section-heading--row">
              <div>
                <p className="eyebrow">Ecossistema de tecnologias</p>
                <h2>
                  Ferramentas aplicadas <em>com contexto.</em>
                </h2>
              </div>
              <p>
                Seleção organizada por área de uso, não uma lista genérica de
                frameworks.
              </p>
            </div>
            <div className="technology-groups">
              {technologyGroups.map((group) => (
                <article className="technology-group" key={group.title}>
                  <div className="technology-group-heading">
                    <span>{group.number}</span>
                    <div>
                      <h3>{group.title}</h3>
                      <p>{group.description}</p>
                    </div>
                  </div>
                  <div className="technology-list">
                    {group.items.map(({ name, icon: Icon, image }) => (
                      <div className="technology-item" key={name} title={name}>
                        {image ? (
                          <img
                            src={image}
                            alt=""
                            width="27"
                            height="27"
                            loading="lazy"
                          />
                        ) : (
                          Icon && <Icon aria-hidden="true" />
                        )}
                        <span>{name}</span>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="projects" id="projetos">
          <div className="section">
            <div className="projects-heading">
              <div>
                <p className="eyebrow">Projetos & cases</p>
                <h2>
                  Da necessidade ao <em>produto em uso.</em>
                </h2>
              </div>
              <p>
                Trabalhos que mostram diferentes frentes da minha atuação, com o
                Portal de Gestão como principal case corporativo.
              </p>
            </div>
            <article className="featured-project">
              <ProjectVisual
                image={projects[0].image}
                title={projects[0].title}
              />
              <div className="featured-project-copy">
                <p className="project-kicker">
                  Case principal · Produto corporativo
                </p>
                <h3>{projects[0].title}</h3>
                <p>{projects[0].description}</p>
                <dl>
                  <div>
                    <dt>Desafio</dt>
                    <dd>
                      Centralizar processos antes distribuídos entre planilhas,
                      sistemas e rotinas manuais.
                    </dd>
                  </div>
                  <div>
                    <dt>Atuação</dt>
                    <dd>
                      Gestão do projeto, requisitos, arquitetura, backend,
                      dados, integrações, infraestrutura e evolução.
                    </dd>
                  </div>
                </dl>
                <div className="project-tags">
                  {projects[0].tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <ul
                  className="project-deliverables"
                  aria-label={`Entregas do projeto ${projects[0].title}`}
                >
                  {projects[0].deliverables.map((deliverable) => (
                    <li key={deliverable}>{deliverable}</li>
                  ))}
                </ul>
                <div className="featured-project-actions">
                  {projects[0].href ? (
                    <a
                      className="text-link"
                      href={projects[0].href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Ver código do projeto <ExternalIcon />
                    </a>
                  ) : projects[0].liveUrl ? (
                    <a
                      className="text-link"
                      href={projects[0].liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visitar portal <ExternalIcon />
                    </a>
                  ) : (
                    <a className="text-link" href="#contato">
                      Conversar sobre este case <FaEnvelope />
                    </a>
                  )}
                  <button
                    className="text-link text-link--button"
                    type="button"
                    onClick={() => setPortal360Open(true)}
                  >
                    Visão 360 <FaDiagramProject />
                  </button>
                </div>
              </div>
            </article>
            {portal360Open && (
              <Portal360 onClose={() => setPortal360Open(false)} />
            )}
            <div className="secondary-projects">
              {projects.slice(1).map((project) => (
                <article className="secondary-project" key={project.title}>
                  <ProjectVisual
                    image={project.image}
                    title={project.title}
                    fit={project.imageFit}
                  />
                  <div>
                    <p className="project-kicker">{project.eyebrow}</p>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="project-tags">
                      {project.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                    <ul
                      className="project-deliverables"
                      aria-label={`Entregas do projeto ${project.title}`}
                    >
                      {project.deliverables.map((deliverable) => (
                        <li key={deliverable}>{deliverable}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="secondary-project-links">
                    {project.href && (
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Código <FaGithub />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Visitar <ExternalIcon />
                      </a>
                    )}
                    {project.availability && (
                      <span className="project-availability">
                        {project.availability}
                      </span>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="contact section" id="contato">
          <div className="contact-mark" aria-hidden="true">
            RA
          </div>
          <div className="contact-copy">
            <p className="eyebrow">Contato</p>
            <h2>
              Tem um projeto ou necessidade de TI? <em>Vamos conversar.</em>
            </h2>
            <p>
              Estou disponível para conversar sobre projetos, tecnologia,
              processos e oportunidades de colaboração.
            </p>
          </div>
          <div className="contact-actions">
            <a
              className="button button--lime"
              href={contacts.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp /> Chamar no WhatsApp
            </a>
            <a
              className="button button--outline-light"
              href={contacts.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn /> Conectar no LinkedIn
            </a>
            <a className="contact-email" href={`mailto:${contacts.email}`}>
              <FaEnvelope /> {contacts.email}
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer section">
        <Brand />
        <p>Coordenador de TI · Gestão, infraestrutura, sistemas e automação.</p>
        <div>
          <a href={contacts.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href={contacts.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href={contacts.whatsapp} target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>
          <a href={`mailto:${contacts.email}`}>E-mail</a>
        </div>
        <small>© {new Date().getFullYear()} Rafael Almeida</small>
      </footer>
      <a
        className="whatsapp-float"
        href={contacts.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Conversar com Rafael Almeida pelo WhatsApp"
      >
        <FaWhatsapp />
      </a>
    </>
  )
}

export default App
