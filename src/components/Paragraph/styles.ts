import styled from 'styled-components'
import { ParagraphProps } from './index'

export const P = styled.div<ParagraphProps>`
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  color: ${(props) =>
    props.type === 'main' ? props.theme.mainColor : props.theme.mainColor};
  line-height: 22px;
  text-align: center;
`
