import styled from 'styled-components'

export const FooterWrapper = styled.footer`
  text-align: center;
  padding: 12px 0;
  font-size: 14px;
  color: ${({ theme }) => theme.text};
  border-top: 1px solid ${({ theme }) => theme.text};
  margin-top: 24px;
  opacity: 0.7;
`
