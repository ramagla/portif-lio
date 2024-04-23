import { P } from './styles'

export type Props = {
  children: string
  type?: 'main' | 'secondary'
  fontSize?: number
}
const Paragraph = ({ children, type = 'main', fontSize }: Props) => (
  <P fontSize={fontSize} type={type}>
    {children}
  </P>
)

export default Paragraph
