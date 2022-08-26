import styled from 'styled-components'

interface CounterContainerProps {
  size?: 'small' | 'large'
}

export const CounterContainer = styled.div<CounterContainerProps>`
  width: 4.5rem;
  height: ${(props) => (props.size === 'small' ? '2rem' : '2.375rem')};
  display: inline-flex;
  align-items: center;
  padding: 0.5rem;
  gap: 0.25rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme['base-button']};

  div {
    flex: 1;
    text-align: center;
    font-size: 1rem;
    line-height: 0;
    color: ${(props) => props.theme['base-title']};
  }

  button {
    all: none;
    color: ${(props) => props.theme.purple};
    line-height: 0;
    cursor: pointer;
    outline: none;
    border: none;
    background-color: transparent;
    &:hover {
      color: ${(props) => props.theme['purple-dark']};
    }
  }
`
