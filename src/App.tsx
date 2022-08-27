import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './routes/Router'
import { OrderContextProvider } from './contexts/OrderContext'
import { EnvContextProvider } from './contexts/EnvContext'

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <EnvContextProvider>
        <OrderContextProvider>
          <GlobalStyle />
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </OrderContextProvider>
      </EnvContextProvider>
    </ThemeProvider>
  )
}
