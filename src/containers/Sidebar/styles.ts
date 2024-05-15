import styled from 'styled-components'
import { P } from '../../components/Paragraph/styles'

export const Description = styled(P)`
  margin-top: 24px;
  margin-bottom: 40px;
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

export const DownloadButton = styled.a`
  border-radius: 12px;
  padding: 8px;
  color: ${(props) => props.theme.backgroundColor};
  font-size: 10px;
  font-weight: bold;
  background-color: ${(props) => props.theme.mainColor};
  cursor: pointer;
  margin-left: 46px;
  text-decoration: none;

  &:hover {
    background-color: #45a049; // Cor de fundo do botão ao passar o mouse
  }

  @media (max-width: 768px) {
    margin-left: 0;
  }
`

export const Button = styled.a`
  border-radius: 8px;
  padding: 8px;
  color: ${(props) => props.theme.backgroundColor};
  font-size: 16px;
  font-weight: bold;
  background-color: ${(props) => props.theme.mainColor};
  cursor: pointer;
  margin: 10px; // Adicione margem para espaçamento
  width: 180px; // Largura fixa para ambos os botões
  height: auto; // Altura fixa para ambos os botões
  display: block; // Faça os botões ocuparem sua própria linha
  text-align: center; // Centralize o texto dentro do botão
  text-decoration: none;

  &:hover {
    background-color: lightblue; // Cor de fundo do botão ao passar o mouse
  }

  @media (max-width: 768px) {
    margin-left: auto;
    margin-right: auto;
  }
`
