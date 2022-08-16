import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  inset: 0 0 auto 0;
  margin-bottom: 1rem;
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
