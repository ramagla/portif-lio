import styled from 'styled-components'

export const Card = styled.div`
  border: 1px solid ${(props) => props.theme.edgeColor};
  padding: 16px;
`
export const ButtonLink = styled.a`
  color: ${(props) => props.theme.backgroundColor};
  font-size: 14px;
  background-color: ${(props) => props.theme.buttonBackgroundColor};
  text-decoration: none;
  padding: 8px;
  display: inline-block;
  margin-top: 24px;
  cursor: pointer;
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
