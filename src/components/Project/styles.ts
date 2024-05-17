import styled from 'styled-components'

export const Card = styled.div<{ expanded: boolean }>`
  border: 1px solid ${(props) => props.theme.edgeColor};
  padding: 16px;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  background-color: ${(props) => props.theme.secondaryColor};
  overflow: hidden;
  height: ${(props) =>
    props.expanded ? 'auto' : '500px'}; // Usamos a propriedade diretamente aqui
  transition: height 0.5s ease;

  ${(props) =>
    props.expanded &&
    `
    height: auto;
    padding-bottom: 40px;
  `}
`
export const CardPw = styled.div`
  border: 1px solid ${(props) => props.theme.edgeColor};
  padding: 16px;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  background-color: ${(props) => props.theme.secondaryColor};
  overflow: hidden;
  height: 100%;
  transition: height 0.5s ease;
`

export const Action = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.73);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.5s ease;
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
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
  /* height: 250px; */

  > img {
    width: 100%;
    height: 100%;
    border-radius: 8px;
    object-fit: cover;
  }

  &:hover {
    ${Action} {
      opacity: 1;
      transition: opacity 0.5s ease;
    }
  }
`
export const Languages = styled.div`
  display: flex;
  padding-top: 16px;
  justify-content: center;
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
export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;

  &.visible {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
    transition: opacity 0.5s ease;
  }
`
export const ModalContent = styled.div`
  max-width: 960px;
  position: relative;
  z-index: 1;

  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 24px;

    h4 {
      font-size: 18px;
      font-weight: bold;
      color: #fff;
    }
  }

  img {
    display: block;
    max-width: 100%;
    cursor: pointer;
  }
`
