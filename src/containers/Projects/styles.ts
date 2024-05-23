//src/containers/Projects/styles.ts

import styled from 'styled-components'

export const List = styled.ul`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: 1fr 1fr;
  column-gap: 36px;
  row-gap: 40px;
  margin-left: 16px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    row-gap: 16px;
    margin-left: 0px;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
  margin-top: 16px;
`

export const Button = styled.button<{ active: boolean }>`
  background-color: ${({ active }) => (active ? '#007bff' : '#fff')};
  color: ${({ active }) => (active ? '#fff' : '#007bff')};
  border: 1px solid #007bff;
  border-radius: 4px;
  padding: 8px 16px;
  margin-right: 8px;
  cursor: pointer;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    background-color: #0056b3;
    color: #fff;
  }
`
