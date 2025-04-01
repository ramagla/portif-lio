import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Projects from './containers/Projects'
import Sidebar from './containers/Sidebar'
import Abaut from './containers/Abaut'
import GlobalStyle, { Container } from './styles'
import DarkTheme from './themes/dark'
import { useState } from 'react'
import ligthTheme from './themes/light'
import { Analytics } from '@vercel/analytics/react'
import Footer from './components/Footer'
import Blog from './components/Blog' // já existente: ./components/Blog/index.tsx

function App() {
  const [isUsingDarkTheme, setIsUsingDarkTheme] = useState(true)

  function changeTheme() {
    setIsUsingDarkTheme(!isUsingDarkTheme)
  }

  return (
    <ThemeProvider theme={isUsingDarkTheme ? DarkTheme : ligthTheme}>
      <GlobalStyle />

      {/* Envolvemos tudo com Router */}
      <Router>
        <Container>
          <Analytics />
          <Sidebar changeTheme={changeTheme} />
          <main>
            {/* Aqui entram as rotas */}
            <Routes>
              {/* Rota principal */}
              <Route
                path="/"
                element={
                  <>
                    <Abaut />
                    <Projects />
                    <Footer />
                  </>
                }
              />
              {/* Rota para Blog */}
              <Route path="/blog" element={<Blog />} />

              {/* Opcional: se quiser redirecionar caso a pessoa acesse algo inexistente */}
              {/* <Route path="*" element={<Navigate to=\"/\" />} /> */}
            </Routes>
          </main>
        </Container>
      </Router>
    </ThemeProvider>
  )
}

export default App
