import styled from 'styled-components'
import { P } from '../../components/Paragraph/styles'

// Descrição abaixo do nome
export const Description = styled(P)`
  margin-top: 24px;
  margin-bottom: 40px;
`

// Container da Sidebar
export const SidebarContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0;
  width: 100%;
  max-width: 220px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    position: static;
    margin: 40px auto 20px;
    text-align: center;
  }
`

/**
 * Botão genérico estilizado usado para:
 * - Baixar Currículo
 * - Acessar Blog
 * - etc.
 */
export const Button = styled.a`
  width: 100%;
  max-width: 180px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  padding: 10px 16px;
  margin: 8px 0;

  background-color: ${(props) => props.theme.mainColor};
  color: ${(props) => props.theme.backgroundColor};
  font-size: 14px;
  font-weight: bold;
  text-decoration: none;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  transition:
    background-color 0.3s ease,
    transform 0.2s ease;

  &:hover {
    background-color: lightblue;
    transform: translateY(-2px);
  }

  img {
    width: 16px;
    height: 16px;
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`

/**
 * Versão específica do botão para ser usada com tag <button>
 * Ex: botão de "Trocar Tema", para evitar warnings com <a as="button">
 */
export const ButtonStyled = styled.button`
  width: 100%;
  max-width: 180px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  padding: 10px 16px;
  margin: 8px 0;

  background-color: ${(props) => props.theme.mainColor};
  color: ${(props) => props.theme.backgroundColor};
  font-size: 14px;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  transition:
    background-color 0.3s ease,
    transform 0.2s ease;

  &:hover {
    background-color: lightblue;
    transform: translateY(-2px);
  }

  img {
    width: 16px;
    height: 16px;
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`
