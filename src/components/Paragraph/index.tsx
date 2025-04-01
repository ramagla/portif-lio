import React from 'react'
import { P } from './styles'

export type ParagraphProps = {
  children: React.ReactNode
  type?: 'main' | 'secondary'
  fontSize?: number
  toggleExpansion?: () => void
}

const Paragraph = ({
  children,
  type = 'main',
  fontSize,
  toggleExpansion
}: ParagraphProps) => {
  return (
    <P fontSize={fontSize} type={type} onClick={toggleExpansion}>
      {children}
    </P>
  )
}

export default Paragraph
