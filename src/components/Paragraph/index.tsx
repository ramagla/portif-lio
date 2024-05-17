import React, { ReactNode, useState } from 'react'
import { P } from './styles'

export type ParagraphProps = {
  children: React.ReactNode
  type?: 'main' | 'secondary'
  fontSize?: number
  toggleExpansion?: () => void
}

const getTextLength = (children: ReactNode): number => {
  if (typeof children === 'string') {
    return children.length
  }

  return 0
}

const Paragraph = ({
  children,
  type = 'main',
  fontSize,
  toggleExpansion
}: ParagraphProps) => {
  const [isTruncated, setIsTruncated] = useState(true)
  const textLength = getTextLength(children)

  const handleToggleTruncation = () => setIsTruncated(!isTruncated)

  return (
    <P fontSize={fontSize} type={type} onClick={toggleExpansion}>
      {isTruncated
        ? typeof children === 'string' && textLength > 300
          ? children.substring(0, 300) + '...'
          : children
        : children}
      {textLength > 300 && (
        <button onClick={handleToggleTruncation}>
          {isTruncated ? 'Leia mais' : 'Ocultar'}
        </button>
      )}
    </P>
  )
}

export default Paragraph
