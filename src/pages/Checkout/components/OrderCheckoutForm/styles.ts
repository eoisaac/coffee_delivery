import styled from 'styled-components'

export const FieldsetContainer = styled.fieldset`
  all: unset;
  padding: 1rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme['base-card']};

  @media (min-width: 768px) {
    padding: 2.5rem;
  }
`

export const ErrorMessage = styled.div`
  margin: 0.2rem 0 0 0.2rem;
  font-size: 0.75rem;
  color: ${(props) => props.theme.purple};
`

const ICON_COLOR = {
  yellow: 'yellow-dark',
  purple: 'purple',
  gray: 'base-subtitle',
} as const

interface HeaderProps {
  iconColor: keyof typeof ICON_COLOR
}

export const Header = styled.div<HeaderProps>`
  display: inline-flex;
  align-items: flex-start;
  gap: 0.5rem;
  margin-bottom: 1rem;
  line-height: 130%;
  color: ${(props) => props.theme[ICON_COLOR[props.iconColor]]};

  @media (min-width: 768px) {
    margin-bottom: 2rem;
  }

  legend {
    font-family: 'Baloo 2', cursive;
    font-size: 1rem;
    color: ${(props) => props.theme['base-subtitle']};
  }

  span {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-text']};
  }
`

export const DeliveryContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

export const PaymentMethodsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.75rem;
`

export const PaymentMethod = styled.label`
  flex: 1;
  position: relative;
  cursor: pointer;

  input {
    all: unset;
    display: none;
  }

  input + div {
    width: 100%;
    min-width: 180px;
    display: inline-flex;
    gap: 0.75rem;
    align-items: center;
    padding: 1rem;
    line-height: 0;
    font-size: 0.75rem;
    color: ${(props) => props.theme['base-text']};
    text-transform: uppercase;
    transition: all 0.1s ease-in-out;
    border-radius: 6px;
    border: solid 1px transparent;
    background-color: ${(props) => props.theme['base-button']};

    span {
      color: ${(props) => props.theme.purple};
    }

    &:hover {
      color: ${(props) => props.theme['base-subtitle']};
      background-color: ${(props) => props.theme['base-hover']};
    }
  }

  input:checked + div {
    border-color: ${(props) => props.theme.purple};
    background-color: ${(props) => props.theme['purple-light']};
  }
`

export const InputWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const InputRow = styled.span`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`

export const Input = styled.div`
  &:nth-child(3) {
    flex: 0.5;
  }

  &:nth-child(even) {
    flex: 1;
  }

  label {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }

  input {
    width: 100%;
    padding: 0.75rem;
    outline: none;
    border-radius: 4px;
    font-size: 0.875rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-text']};
    border: solid 1px ${(props) => props.theme['base-button']};
    background-color: ${(props) => props.theme['base-input']};

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }

    &:focus {
      border-color: ${(props) => props.theme['yellow-dark']};
    }
  }
`

export const CartIsEmptyInpt = styled.input`
  display: none;
`
