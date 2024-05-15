import { ReactNode } from 'react'
import { P } from './styles'

export type Props = {
  children: ReactNode
  type?: 'main' | 'secondary'
  fontSize?: number
}
const Paragraph = ({ children, type = 'main', fontSize }: Props) => (
  <P fontSize={fontSize} type={type}>
    {children}
  </P>
)

export default Paragraph
