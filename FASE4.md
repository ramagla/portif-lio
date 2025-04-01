# Blog Técnico - Fase Atual

## ✅ Funcionalidades Implementadas

### 1. Organização por Categorias
Os artigos foram divididos em três categorias principais:
- **Posts**
- **Artigos**
- **Tutoriais**

Cada publicação possui uma propriedade `category` definida em `linkedinPosts.ts`.

### 2. Abas de Navegação
Três abas foram implementadas no topo da página do blog (`Blog/index.tsx`), permitindo alternar entre as categorias de forma interativa. A aba ativa é destacada com estilo visual.

### 3. Ordenação por Data
As publicações são ordenadas da mais recente para a mais antiga, utilizando `new Date(post.date)` para garantir ordenação correta, inclusive com artigos de anos anteriores (ex: 2023).

### 4. Paginação
- Máximo de **2 publicações por página**.
- Botões de paginação estilizados foram adicionados com opções de:
  - Página atual
  - "Anterior"
  - "Próximo"
- A paginação é reiniciada ao trocar de aba.

### 5. Estilização
Estilizações personalizadas utilizando `styled-components` para:
- Cards dos artigos
- Botões
- Abas
- Imagens redimensionadas proporcionalmente com `object-fit: contain`.

---

## 📁 Arquivos Alterados

### `src/components/Blog/index.tsx`
- Lógica de filtragem por categoria
- Ordenação por data
- Paginação com controle de página atual
- Renderização dos botões de navegação

### `src/components/Blog/styles.ts`
- Criação de:
  - `TabContainer`
  - `TabButton`
  - `PaginationContainer`
  - `PaginationButton`
- Estilização de abas, cards e navegação

### `src/components/Blog/linkedinPosts.ts`
- Adição da propriedade `category` em cada artigo
- Garantia de que todos os itens estão corretamente categorizados (`posts`, `artigos`, `tutoriais`)

---

## 📝 Considerações Finais

- O sistema está preparado para escalar com mais artigos sem comprometer a performance visual.
- Próximas fases podem incluir:
  - Busca por título ou tag
  - Integração automática com LinkedIn
  - Página detalhada para cada artigo com slug

---

