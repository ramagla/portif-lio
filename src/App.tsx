import { ThemeProvider } from 'styled-components'
import Projects from './containers/Projects'
import Sidebar from './containers/Sidebar'
import Abaut from './containers/Abaut'
import GlobalStyle, { Container } from './styles'
import DarkTheme from './themes/dark'
import { useState } from 'react'
import ligthTheme from './themes/light'

function App() {
  const [isUsingDarkTheme, setIsUsingDarkTheme] = useState(true)

  function changeTheme() {
    setIsUsingDarkTheme(!isUsingDarkTheme)
  }

  return (
    <ThemeProvider theme={isUsingDarkTheme ? DarkTheme : ligthTheme}>
      <GlobalStyle />
      <Container>
        <Sidebar changeTheme={changeTheme} />
        <main>
          <Abaut />
          <Projects />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
