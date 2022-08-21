import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
 * {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
 }

 body {
	font-family: 'Roboto', sans-serif;
	font-weight: 400;
	font-size: 1rem;
	-webkit-font-smoothing: antialiased;
	color: ${(props) => props.theme['base-text']};
	background-color: ${(props) => props.theme.background};
 }

 ::selection {
		color: ${(props) => props.theme.white};
    background-color: ${(props) => props.theme.purple};
  }
  ::-webkit-scrollbar {
    width: 2px;
    height: 2px;
    /* background-color: ${(props) => props.theme.background}; */
  }
  ::-webkit-scrollbar-thumb {
		border-radius: 8px;
    /* background-color: ${(props) => props.theme['base-card']}; */
  }
`
