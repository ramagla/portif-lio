import styled from 'styled-components'

export const Card = styled.div<{ $expanded: boolean }>`
  border: 1px solid ${(props) => props.theme.edgeColor};
  padding: 16px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background-color: ${(props) => props.theme.secondaryColor};
  overflow: hidden;
  height: ${(props) => (props.$expanded ? 'auto' : '290px')};
  transition: all 0.3s ease-in-out;
  transform: scale(1);
  &:hover {
    transform: scale(1.02);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.25);
  }
  cursor: pointer;

  ${(props) =>
    props.$expanded &&
    `
    padding-bottom: 40px;
  `}
`

export const CardPw = styled.div`
  border: 1px solid ${(props) => props.theme.edgeColor};
  padding: 16px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
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
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  margin-top: 24px;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
    color: #e0e0e0;
  }

  img {
    width: 16px;
    height: 16px;
  }
`

export const ButtonLink2 = styled.a`
  color: ${(props) => props.theme.backgroundColor};
  font-size: 14px;
  background-color: ${(props) => props.theme.buttonBackgroundColor2};
  text-decoration: none;
  padding: 10px 20px;
  margin-left: 8px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 24px;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background-color: ${(props) => props.theme.buttonHoverBackgroundColor2};
    color: ${(props) => props.theme.hoverTextColor};
  }

  img {
    width: 16px;
    height: 16px;
  }
`

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 250px;
  margin-bottom: 16px;

  > img {
    width: 100%;
    height: 100%;
    border-radius: 8px;
    object-fit: cover;
  }

  &:hover {
    ${Action} {
      opacity: 1;
    }
  }
`

export const Languages = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
  justify-content: center;
  padding-top: 16px;

  img {
    width: 24px;
    height: 24px;
  }
`

export const ButtonPbi = styled.a`
  color: white;
  font-size: 22px;
  background-color: green;
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 5px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
  margin-top: 24px;
  font-weight: bold;

  &:hover {
    background-color: darkgreen;
  }

  img {
    width: 20px;
    height: 20px;
  }
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  display: none;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.65);
  backdrop-filter: blur(3px);
  opacity: 0;
  transition: opacity 0.3s ease-in-out;

  &.visible {
    display: flex;
    opacity: 1;
    animation: fadeIn 0.3s ease-in-out;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: scale(0.95);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`

export const ModalContent = styled.div`
  max-width: 960px;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;
  background: #222;
  padding: 24px 24px 40px;
  border-radius: 10px;
  position: relative;
  z-index: 10;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.7);
  animation: fadeInContent 0.3s ease-in-out;
  transform: scale(0.95);
  transition: transform 0.3s ease-in-out;

  &.visible {
    transform: scale(1);
  }

  @keyframes fadeInContent {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;

    h4 {
      font-size: 18px;
      font-weight: bold;
      color: #fff;
      margin: 0;
    }

    img {
      width: 24px;
      height: 24px;
      cursor: pointer;
      position: absolute;
      top: 16px;
      right: 16px;
      transition: all 0.2s ease;

      &:hover {
        transform: scale(1.2);
        filter: brightness(1.3);
      }
    }
  }

  img {
    display: block;
    max-width: 100%;
    max-height: 70vh;
    margin: 0 auto;
    border-radius: 8px;
    object-fit: contain;
  }

  /* Scroll personalizado opcional */
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #555;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
`

export const Content = styled.div<{ $expanded: boolean }>`
  margin-top: 16px;
  transition: all 0.3s ease-in-out;
  opacity: ${(props) => (props.$expanded ? '1' : '0')};
  max-height: ${(props) => (props.$expanded ? '1000px' : '0')};
  overflow: hidden;
`

export const ProjectGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  list-style: none;
  padding: 0;
  margin-top: 32px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1025px) {
    grid-template-columns: repeat(3, 1fr);
  }
`
