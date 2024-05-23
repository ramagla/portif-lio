// Arquivo: src/containers/Abaut/styles.ts

import styled from 'styled-components'

export const GithubSection = styled.div`
  margin-top: 32px;
  margin-bottom: 64px;
  max-width: 1024px;
  display: flex;
  justify-content: center;

  img {
    height: 180px;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
      width: 100%;
      margin-bottom: 0;
    }
  }
`

export const Languages = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    align-items: center;
    height: 30px;
    width: 40px;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    margin-right: 10px;

    img {
      margin: 5px;
      max-width: calc(25% - 20px);
      height: auto;
    }
  }
`

export const SocialMedia = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    padding-right: 2px;
    padding-top: 16px;
    padding-bottom: 16px;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    margin-right: 10px;

    img {
      padding-right: 5px;
      padding-top: 16px;
      padding-bottom: 0;
    }
  }
`
