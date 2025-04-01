import styled from 'styled-components'

export const Section = styled.section`
  padding: 40px 24px;
`

export const SectionTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 24px;
  text-align: center;
  color: #fff;
`

export const PostCardContainer = styled.article`
  background-color: #1e1e1e;
  padding: 24px;
  border-radius: 10px;
  margin-bottom: 24px;
  color: #fff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
  transition: 0.2s ease;

  img {
    width: 100%;
    border-radius: 10px;
    margin-bottom: 16px;
  }

  a {
    display: inline-block;
    margin-top: 12px;
    font-weight: bold;
    color: #00a0dc;

    &:hover {
      text-decoration: underline;
    }
  }
`

export const PostTitle = styled.h2`
  font-size: 20px;
  color: #fff;
  margin-bottom: 8px;
`

export const PostSummary = styled.p`
  color: #ccc;
  margin-bottom: 12px;
`

export const PostDate = styled.small`
  color: #999;
  display: block;
  margin-bottom: 8px;
`

export const PostTagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  span {
    background-color: #333;
    color: #eee;
    font-size: 12px;
    padding: 4px 8px;
    border-radius: 6px;
  }
`

export const BackButton = styled.button`
  padding: 10px 20px;
  margin-top: 20px;
  background-color: #007bff;
  color: white;
  font-size: 14px;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  display: block;
  margin-left: auto;
  margin-right: auto;

  &:hover {
    background-color: #0056b3;
  }
`

export const PostImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 250px;
  object-fit: contain; /* mostra a imagem inteira */
  border-radius: 10px;
  margin-bottom: 12px;
  background-color: #000; /* para imagens com fundo transparente */
`

export const ReadMoreLink = styled.a`
  display: inline-block;
  margin-top: 12px;
  color: #00aaff;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`
export const TabContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-bottom: 32px;
`

export const TabButton = styled.button<{ $active: boolean }>`
  padding: 8px 16px;
  font-size: 14px;
  font-weight: bold;
  background-color: ${({ $active }) => ($active ? '#00aaff' : '#2c2c2c')};
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0077cc;
  }
`
export const PaginationContainer = styled.div`
  text-align: center;
  margin-top: 24px;
  display: flex;
  justify-content: center;
  gap: 12px;
`

export const PaginationButton = styled.button<{ $active?: boolean }>`
  background-color: ${(props) => (props.$active ? '#00aaff' : '#333')};
  color: white;
  border: none;
  border-radius: 8px;
  padding: 8px 16px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #007acc;
  }

  &:disabled {
    background-color: #666;
    cursor: not-allowed;
  }
`
