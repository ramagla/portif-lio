export type ProjectSource = 'github' | 'powerbi' | 'django'

export type ProjectType = {
  id: string
  imgSrc: string
  title: string
  description: string
  languages?: string[]
  githubLink?: string
  vercelLink?: string
  dashboardLink?: string
  source?: ProjectSource
}
