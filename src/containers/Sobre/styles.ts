import styled from 'styled-components'

export const GithubSecao = styled.div`
  margin-top: 32px;
  margin-bottom: 64px;

  img {
    height: 180px;

    @media (max-width: 768px) {
      height: auto;
      width: 100%;
    }
  }
`

export const Linguagens = styled.div`
  display: block;
  img {
    align-items: center;
    height: 30px;
    width: 40px;
  }
`

export const RedesSociais = styled.div`
  display: block;
  img {
    padding-right: 2px;
    padding-top: 16px;
    padding-bottom: 16px;
  }
`
