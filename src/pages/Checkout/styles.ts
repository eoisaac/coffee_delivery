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
