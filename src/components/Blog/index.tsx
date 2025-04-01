import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { linkedinArticles } from './linkedinPosts'

import {
  Section,
  SectionTitle,
  PostCardContainer,
  PostImage,
  PostTitle,
  PostSummary,
  PostDate,
  PostTagList,
  ReadMoreLink,
  BackButton,
  TabContainer,
  TabButton,
  PaginationContainer,
  PaginationButton
} from './styles'

const Blog = () => {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('posts')
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 2

  const filteredPosts = linkedinArticles
    .filter((post) => {
      // Garante que, se category for undefined, ainda exiba se estiver no tab 'posts'
      if (!post.category && activeTab === 'posts') return true
      return post.category === activeTab
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage)
  const startIndex = (currentPage - 1) * postsPerPage
  const endIndex = startIndex + postsPerPage
  const paginatedPosts = filteredPosts.slice(startIndex, endIndex)

  const handleTabChange = (tab: string) => {
    setActiveTab(tab)
    setCurrentPage(1)
  }

  return (
    <Section>
      <SectionTitle>🧠 Publicações e Artigos</SectionTitle>

      <TabContainer>
        <TabButton
          onClick={() => handleTabChange('posts')}
          $active={activeTab === 'posts'}
        >
          Posts
        </TabButton>
        <TabButton
          onClick={() => handleTabChange('artigos')}
          $active={activeTab === 'artigos'}
        >
          Artigos
        </TabButton>
        <TabButton
          onClick={() => handleTabChange('tutoriais')}
          $active={activeTab === 'tutoriais'}
        >
          Tutoriais
        </TabButton>
      </TabContainer>

      {paginatedPosts.map((post) => (
        <PostCardContainer key={post.id}>
          <PostImage src={post.image} alt={post.title} />
          <PostTitle>{post.title}</PostTitle>
          <PostSummary>{post.summary}</PostSummary>
          <PostDate>{post.date}</PostDate>
          <PostTagList>
            {post.tags?.map((tag) => <span key={tag}>#{tag}</span>)}
          </PostTagList>
          <ReadMoreLink
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Ler mais →
          </ReadMoreLink>
        </PostCardContainer>
      ))}

      {/* Paginação estilizada */}
      <PaginationContainer>
        <PaginationButton
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          ◀ Anterior
        </PaginationButton>

        <PaginationButton disabled $active>
          Página {currentPage} de {totalPages}
        </PaginationButton>

        <PaginationButton
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Próximo ▶
        </PaginationButton>
      </PaginationContainer>

      <BackButton onClick={() => navigate(-1)}>Voltar</BackButton>
    </Section>
  )
}

export default Blog
