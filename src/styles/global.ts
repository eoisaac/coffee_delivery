import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
 * {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
 }

 body {
	font-family: 'Roboto', sans-serif;
	/* font-family: 'Baloo 2', cursive; */
	font-weight: 400;
	font-size: 62.5%;
	-webkit-font-smoothing: antialiased;
	color: ${(props) => props.theme['base-text']};
	background-color: ${(props) => props.theme.background};
 }
`
