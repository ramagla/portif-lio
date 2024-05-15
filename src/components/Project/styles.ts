import styled from 'styled-components'

export const Card = styled.div`
  border: 1px solid ${(props) => props.theme.edgeColor};
  padding: 16px;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  background-color: ${(props) => props.theme.secondaryColor};
  height: 100%;
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
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
    color: #e0e0e0;
  }
`
export const ButtonLink2 = styled.a`
  color: ${(props) => props.theme.backgroundColor};
  font-size: 14px;
  background-color: ${(props) => props.theme.buttonBackgroundColor2};
  text-decoration: none;
  padding: 10px 20px;
  margin-left: 8px;
  display: inline-block;
  margin-top: 24px;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background-color: ${(props) => props.theme.buttonHoverBackgroundColor2};
    color: ${(props) => props.theme.hoverTextColor};
  }
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
export const Languages = styled.div`
  display: block;
  padding-top: 16px;

  img {
    align-items: center;
    height: 30px;
    width: 40px;
  }
`

export const ButtonPbi = styled.a`
  color: white;
  font-size: 22px;
  background-color: green;
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 5px;
  display: inline-block;
  cursor: pointer;
  margin-top: 24px;
  font-weight: bold;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: darkgreen;
  }
`
