import styled from 'styled-components'

export const CheckoutContainer = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;

  h1 {
    margin-bottom: 1rem;
    font-size: clamp(1.5rem, 5vw, 2rem);
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 868px) {
    flex-direction: row;
  }
`

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
  color: red;
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

export const CoffeeOrderContainer = styled(FieldsetContainer)`
  max-height: 480px;
  flex: 0.5;
  display: flex;
  flex-direction: column;
  border-radius: 6px;

  @media (min-width: 868px) {
    border-radius: 6px 44px;
  }
`

export const OrderList = styled.ul`
  flex: 1;
  max-height: 240px;
  overflow-y: auto;
  list-style: none;
  background-color: beige;
`

export const OrderResume = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin: 1.5rem 0;

  div {
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-text']};

    &:last-child {
      font-family: 'Baloo 2', cursive;
      font-size: 1.25rem;
    }
  }
`

export const OrderFooter = styled.div`
  display: flex;
  flex-direction: column;

  button {
    padding: 1rem;
    text-transform: uppercase;
    font-size: 0.875rem;
    font-weight: 700;
    line-height: 130%;
    color: ${(props) => props.theme.white};
    cursor: pointer;
    transition: all 0.1s ease-in-out;
    outline: none;
    border: none;
    border-radius: 6px;
    background-color: ${(props) => props.theme.yellow};

    &:hover {
      background-color: ${(props) => props.theme['yellow-dark']};
    }
  }
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
    text-transform: uppercase;
    font-size: 0.75rem;
    padding: 1rem;
    color: ${(props) => props.theme['base-text']};
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
