// src/components/Title/styles.ts

import styled from 'styled-components'
import { Props } from './index'

export const Title = styled.h3<Props>`
  color: ${(props) => props.theme.mainColor};
  font-size: ${(props) => props.fontSize}px;
  font-weight: bold;
  margin-bottom: 16px;
  text-align: center;

  span {
    font-size: 22px;
  }
`
