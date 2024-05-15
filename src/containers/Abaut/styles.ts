import styled from 'styled-components'

export const GithubSection = styled.div`
  margin-top: 32px;
  margin-bottom: 64px;
  margin-left: 64px;

  img {
    height: 180px;

    @media (max-width: 768px) {
      height: auto;
      width: 100%;
    }
  }
`

export const Languages = styled.div`
  display: block;
  margin-left: 64px;
  img {
    align-items: center;
    height: 30px;
    width: 40px;
  }
`

export const SocialMedia = styled.div`
  display: block;
  margin-left: 64px;
  img {
    padding-right: 2px;
    padding-top: 16px;
    padding-bottom: 16px;
  }
`
// export const TextInit = styled.p`
//   font-size: 14px;
//   color: ${(props) =>
//     props.type === 'main' ? props.theme.mainColor : props.theme.mainColor};
//   line-height: 22px;
//   margin-left: 64px;

//   h2 {
//     text-align: center;
//     font-weight: bold;
//     align-items: center;
//   }
// `
