import styled from 'styled-components'
import { P } from '../../components/Paragraph/styles'

export const Description = styled(P)`
  margin-top: 24px;
  margin-bottom: 40px;
`
export const ThemeButton = styled.button`
  border-radius: 12px;
  padding: 8px;
  color: ${(props) => props.theme.backgroundColor};
  font-size: 10px;
  font-weight: bold;
  background-color: ${(props) => props.theme.mainColor};
  cursor: pointer;
  margin-left: 46px;

  @media (max-width: 768px) {
    margin-left: 0;
  }
`

export const SidebarContainer = styled.div`
  position: sticky;
  width: 180px;
  top: 80px;
  left: 0;

  @media (max-width: 768px) {
    margin-bottom: 40px;
    margin-top: 40px;
    text-align: center;
    position: static;
    width: 100%;
    margin-bottom: 20px;
    text-align: center;
  }
`
