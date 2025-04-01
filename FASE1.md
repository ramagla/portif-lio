# Fase 1 - Modernização do Portfólio em React
**Data de conclusão:** 01/04/2025

## ✅ Melhorias implementadas

### 1. Adição do campo `source` ao tipo `ProjectType`
- Permite identificar se o projeto é `github`, `powerbi` ou `django`.
- Impacto direto nos botões exibidos e seus respectivos links.

### 2. Correção dos nomes de ícones
- Padronização dos nomes no array `languages` (ex: `postgresql`, `bootstrap`, `nginx`, `gunicorn`).
- Correção nos arquivos locais de ícones quando necessário.

### 3. Substituição de `key={index}` por `key={project.id}`
- Melhora performance e evita problemas de renderização no React.

### 4. Exibição condicional do botão "AWS"
- Exibido apenas quando `source === 'django'`.

### 5. Inclusão de ícone local para Gunicorn
- Adicionado ícone `.png` local em `src/assets/icons/gunicorn.png`.

### 6. Adição de fallback com `onError` para ícones externos
- Garante exibição de ícone local caso falhe o carregamento do ícone remoto.

### 7. Corrigido warning de DOM nesting (`<h2>` dentro de `<p>`)
- O componente `Paragraph` agora renderiza uma `<div>` em vez de `<p>`.

### 8. Corrigido uso incorreto de atributos booleanos (`expanded`, `active`)
- Usado prefixo `$` nos styled-components para evitar passar props não válidas ao DOM.

---

### Arquivos modificados

- `src/components/Project/projectCard.tsx`
- `src/components/Project/data.tsx`
- `src/components/Project/styles.ts`
- `src/containers/Projects/index.tsx`
- `src/components/Paragraph/index.tsx`
- `src/components/Paragraph/styles.ts`
- `src/components/Title/index.tsx`

---

### Observações
- Todos os warnings de DOM nesting foram resolvidos.
- Componentes estão organizados para a próxima fase (consumo dinâmico via JSON externo ou CMS).
