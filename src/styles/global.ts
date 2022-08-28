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
	 overflow: hidden;
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

	@keyframes rightToLeft {
    0% {
      transform: translateX(100%);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes leftToRight {
    0% {
      transform: translateX(-100%);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }

	@keyframes topToBottom {
    0% {
      transform: translateY(-100%);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }

	@keyframes bottomToTop {
    0% {
      transform: translateY(100%);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
`
