// src/components/Title/index.tsx

import { ReactNode } from 'react'
import { Title as TitleStyle } from './styles'

export type Props = {
  children: ReactNode
  fontSize?: number
}

const Title = ({ children, fontSize = 16 }: Props) => (
  <TitleStyle fontSize={fontSize}>{children}</TitleStyle>
)

export default Title
