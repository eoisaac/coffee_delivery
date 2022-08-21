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
export const CartButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  position: relative;
  padding: 0.5rem;
  cursor: pointer;
  color: ${(props) => props.theme['yellow-dark']};
  line-height: 0;
  font-size: 0.875rem;
  outline: 0;
  transition: all 0.2s ease-in-out;
  border: none;
  border-radius: 6px;
  background-color: ${(props) => props.theme['yellow-light']};

  &:hover {
    color: ${(props) => props.theme['yellow-light']};
    background-color: ${(props) => props.theme['yellow-dark']};
  }
`
export const ButtonBadge = styled.div`
  width: 1.25rem;
  height: 1.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  inset: -8px -8px auto auto;
  font-weight: 700;
  font-size: 0.75rem;
  text-align: center;
  line-height: 0;
  color: ${(props) => props.theme.white};
  border-radius: 50%;
  background-color: ${(props) => props.theme['yellow-dark']};
`

export const CitySelect = styled(CartButton)`
  display: none;
  color: ${(props) => props.theme['purple-dark']};
  background-color: ${(props) => props.theme['purple-light']};

  &:hover {
    color: ${(props) => props.theme['purple-light']};
    background-color: ${(props) => props.theme['purple-dark']};
  }

  @media (min-width: 480px) {
    display: inline-flex;
  }
`
