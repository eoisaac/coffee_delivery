import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  max-width: 1280px;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 1rem 0;
  background-color: ${(props) => props.theme.background};
`

export const SrOnlyHeaderTitle = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
`
