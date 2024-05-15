// styles.ts dentro da pasta components/project

import styled from 'styled-components'

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 36px;
  row-gap: 40px;
  margin-left: 64px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    column-gap: 0;
    row-gap: 16px;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  margin-bottom: 16px;
  margin-left: 64px;
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
