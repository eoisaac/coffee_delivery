import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { OrderContextProvider } from "./contexts/OrderContext";
import { Router } from "./routes/Router";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <OrderContextProvider>
        <GlobalStyle />
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </OrderContextProvider>
    </ThemeProvider>
  );
};
