import { ReactNode } from 'react'
import { Title as TitleStyle } from './styles'

export type Props = {
  children: ReactNode
  fontSize?: number
}
const Title = (props: Props) => (
  <TitleStyle fontSize={props.fontSize}>{props.children}</TitleStyle>
)

export default Title
