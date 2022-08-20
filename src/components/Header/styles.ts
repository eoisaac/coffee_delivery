import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  max-width: 1280px;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 2rem 0;
  background-color: ${(props) => props.theme.background};

  div {
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;

    button:first-child {
      background-color: ${(props) => props.theme['purple-light']};
      color: ${(props) => props.theme['purple-dark']};

      &:hover {
        background-color: ${(props) => props.theme['purple-dark']};
        color: ${(props) => props.theme['purple-light']};
      }
    }

    button:last-child {
      background-color: ${(props) => props.theme['yellow-light']};
      color: ${(props) => props.theme['yellow-dark']};

      &:hover {
        background-color: ${(props) => props.theme['yellow-dark']};
        color: ${(props) => props.theme['yellow-light']};
      }
    }
  }
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
