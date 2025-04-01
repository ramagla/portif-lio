import React from 'react'
import {
  PostCardContainer,
  PostTitle,
  PostDate,
  PostSummary,
  PostTagList,
  PostImage,
  ReadMoreLink
} from './styles'

type Props = {
  title: string
  date: string
  summary: string
  tags: string[]
  image: string
  link: string
}

const PostCard = ({ title, date, summary, tags, image, link }: Props) => (
  <PostCardContainer>
    <PostImage src={image} alt={title} />
    <PostTitle>{title}</PostTitle>
    <PostDate>{date}</PostDate>
    <PostSummary>{summary}</PostSummary>
    <PostTagList>
      {tags.map((tag) => (
        <span key={tag}>#{tag}</span>
      ))}
    </PostTagList>
    <ReadMoreLink href={link} target="_blank" rel="noopener noreferrer">
      Ler mais →
    </ReadMoreLink>
  </PostCardContainer>
)

export default PostCard
