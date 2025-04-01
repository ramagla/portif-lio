# 📄 FASE2.md — Refatoração e Organização de Projetos

## ✅ Etapas concluídas

---

### 1. Separação de dados em arquivos distintos

Criados os arquivos abaixo na pasta `src/components/Project/data/`:

- `githubData.ts`
- `pbiData.ts`
- `djangoData.ts`

Cada arquivo exporta um array de objetos `ProjectType` com os dados correspondentes aos projetos por categoria.

---

### 2. Criação de pastas organizadas para imagens

Organizadas as imagens de projetos dentro da pasta `/assets/images/`, separadas por tipo:

```
/assets/images/github/
/assets/images/powerbi/
/assets/images/django/
```

As imagens dos projetos agora são referenciadas de seus respectivos diretórios.

---

### 3. Centralização das tipagens no arquivo `types.d.ts`

Criado arquivo `src/types.d.ts` contendo:

```ts
export type ProjectType = {
  id: string
  imgSrc: string
  title: string
  description: string
  languages?: string[]
  githubLink?: string
  vercelLink?: string
  dashboardLink?: string
  source?: 'github' | 'powerbi' | 'django'
}
```

Os componentes `ProjectCard` e `ProjectCardPw` foram atualizados para utilizar `ProjectType` diretamente.

---

### 4. Fallback para ícones de linguagens

Adicionada lógica de fallback para imagens de linguagens que não forem carregadas corretamente:

```tsx
onError={(e) =>
  ((e.target as HTMLImageElement).src = '/fallback-icon.png')
}
```

---

### 5. Adição de badges visuais por tipo de projeto

Criado componente `Badge.tsx` para exibir visualmente a origem do projeto com estilos diferenciados.

```tsx
<Badge type="AWS" />
<Badge type="PowerBI" />
<Badge type="React + Styled Components" />
```

Lógica de seleção dinâmica do badge:

```tsx
const getBadgeText = () => {
  if (source === 'django') return 'AWS'
  if (source === 'powerbi') return 'PowerBI'
  return 'React + Styled Components'
}
```

---

## 🔧 Componentes atualizados

- `ProjectCard.tsx`
- `ProjectCardPw.tsx`
- `Badge.tsx`
- `types.d.ts`
- Dados de projetos: divididos em `githubData.ts`, `pbiData.ts` e `djangoData.ts`

---

📅 Gerado em: 01/04/2025
