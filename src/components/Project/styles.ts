import styled from 'styled-components'

export const Card = styled.div`
  border: 1px solid ${(props) => props.theme.edgeColor};
  padding: 16px;
  border-radius: 10px; /* Adicione bordas arredondadas */
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); /* Adicione sombra */
  background-color: #f0f0f0; /* Defina uma cor de fundo */
  margin: 10px; /* Ajuste as margens conforme necessário */
`

export const ButtonLink = styled.a`
  color: white;
  font-size: 14px;
  background-color: #007bff;
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 5px;
  display: inline-block;
  cursor: pointer;
  margin-top: 24px;
`
export const ButtonLink2 = styled.a`
  color: ${(props) => props.theme.backgroundColor};
  font-size: 14px;
  background-color: ${(props) => props.theme.buttonBackgroundColor2};
  text-decoration: none;
  padding: 8px;
  margin-left: 8px;
  display: inline-block;
  margin-top: 24px;
  cursor: pointer;
`
export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  margin-bottom: 16px;

  img {
    width: 100%;
    height: 100%;
  }
`
