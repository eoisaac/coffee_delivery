import styled from 'styled-components'

export const CounterContainer = styled.div`
  width: 4.5rem;
  height: 2.375rem;
  display: inline-flex;
  gap: 0.25rem;
  padding: 0.5rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme['base-button']};

  input {
    width: 100%;
    height: 100%;
    text-align: center;
    font-size: 1rem;
    color: ${(props) => props.theme['base-title']};
    outline: none;
    border: none;
    background-color: transparent;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    -moz-appearance: textfield;
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
