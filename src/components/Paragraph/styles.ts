import styled from 'styled-components'
import { Props } from './index'

export const P = styled.p<Props>`
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  color: ${(props) =>
    props.type === 'main' ? props.theme.mainColor : props.theme.mainColor};
  line-height: 22px;
`
