# 📦 Fase 3 - Melhorias Visuais e Acessibilidade

## ✅ Objetivo
Melhorar a experiência visual e funcional dos cards de projeto, tornando a navegação mais intuitiva, moderna e acessível.

---

## 📌 Alterações Realizadas

### 🔹 1. Adição de ícones nos botões
- Ícones adicionados aos botões:
  - `GitHub` com ícone do GitHub (`github-icon.svg`)
  - `AWS` com ícone da AWS (`aws-icon.svg`)
  - `Vercel` com ícone da Vercel (`vercel-icon.png`)
- Caminhos dos ícones:
  - `src/assets/icons/github-icon.svg`
  - `src/assets/icons/aws-icon.svg`
  - `src/assets/icons/vercel-icon.png`

---

### 🔹 2. Tooltips nos ícones de tecnologia
- Atributo `title` adicionado para mostrar tooltip ao passar o mouse.
```tsx
<img
  title={lang.toUpperCase()}
  alt={`Rafa-${lang}`}
  src={`https://raw.githubusercontent.com/devicons/devicon/master/icons/${lang}/${lang}-original.svg`}
/>
```

---

### 🔹 3. Estilização do modal
- Adicionado:
  - **Sombra ao fundo** com `backdrop-filter`
  - **Transição suave de entrada**
  - **Efeito hover no botão de fechar**
  - **Scroll personalizado**
- Componente afetado: `ModalContent` em `styles.ts`

---

### 🔹 4. Posicionamento correto do Modal
- Modal foi movido **para fora do componente Card** para evitar renderização limitada pelo pai.
- Isso garante que ele ocupe o centro da tela com tamanho adequado.

---

### 🔹 5. Responsividade e escala visual
- Ajuste na imagem do modal com `max-height: 70vh` e `object-fit: contain`
- Mantém boa proporção em monitores grandes e notebooks.

---

## 📂 Arquivos Alterados
- `src/components/Project/projectCard.tsx`
- `src/components/Project/styles.ts`
- `src/assets/icons/github-icon.svg`
- `src/assets/icons/aws-icon.svg`
- `src/assets/icons/vercel-icon.png`