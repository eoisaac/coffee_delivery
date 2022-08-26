import styled from 'styled-components'

export const OrderCoffeeContainer = styled.li`
  width: 100%;
  display: inline-flex;
  justify-content: space-between;
  gap: 0.5rem;
  padding: 1rem 0 1rem 0;
  border-bottom: 1px solid ${(props) => props.theme['base-button']};

  &:first-child {
    padding: 0.5rem 0 1rem 0;
  }

  img {
    width: 64px;
    height: 64px;
    display: none;
  }

  @media (min-width: 480px) {
    gap: 1.25rem;

    img {
      display: block;
    }
  }
`

export const CoffeeData = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  span {
    font-size: 1rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const Header = styled.div`
  display: inline-flex;
  justify-content: space-between;
`

export const Price = styled.div`
  text-align: end;
  font-size: 1rem;
  line-height: 130%;
  font-weight: 700;
  color: ${(props) => props.theme['base-text']};
`

export const ButtonsWrap = styled.div`
  display: inline-flex;
  gap: 0.5rem;
`

export const RemoveButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0 0.5rem;
  cursor: pointer;
  outline: none;
  border: none;
  border-radius: 6px;
  color: ${(props) => props.theme.purple};
  background-color: ${(props) => props.theme['base-button']};

  span {
    line-height: 0;
    font-size: 0.75rem;
    text-transform: uppercase;
    color: ${(props) => props.theme['base-text']};
  }

  &:hover {
    color: ${(props) => props.theme['purple-dark']};
    background-color: ${(props) => props.theme['base-hover']};

    span {
      color: ${(props) => props.theme['base-subtitle']};
    }
  }
`
