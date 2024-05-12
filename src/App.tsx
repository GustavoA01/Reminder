import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "./styles/global"
import { defaultTheme } from "./styles/themes/default"
import { Home } from "./Home"

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>

      <Home />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
