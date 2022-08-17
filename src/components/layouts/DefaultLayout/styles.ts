import styled from 'styled-components'

export const LayoutContainer = styled.div`
  width: 100vw;
  height: 100vh;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  overflow: hidden;
  background-color: ${(props) => props.theme.background};
`
