import styled from 'styled-components'

export const LayoutContainer = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 1rem;
  overflow: hidden;
  background-color: ${(props) => props.theme.background};
`
export const LayoutLimiter = styled.div`
  width: 100%;
  max-width: 1280px;
  height: 100%;
  margin: 0 auto;
  overflow-y: auto;
  background-color: orange;
`
