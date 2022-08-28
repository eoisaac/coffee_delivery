import styled from 'styled-components'

interface LoadingProps {
  isLoading: boolean
}

export const Contaiener = styled.div<LoadingProps>`
  display: ${(props) => (props.isLoading ? 'grid' : 'none')};
  place-items: center;
  position: fixed;
  inset: 0;
  padding: 0 1rem;
  background-color: rgba(0, 0, 0, 0.3);
`

export const ModalContainer = styled.div`
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  text-align: center;
  border-radius: 6px 44px;
  background-color: ${(props) => props.theme.background};

  strong {
    font-size: 1.2rem;
  }
`

export const LoadingContainer = styled.div`
  height: 40px;
  width: 40px;
  margin-top: 1rem;
  animation: rotating 1s linear infinite;
  border-radius: 50%;
  border: 4px solid ${(props) => props.theme['base-button']};
  border-top-color: ${(props) => props.theme.purple};

  @keyframes rotating {
    to {
      transform: rotate(1turn);
    }
  }
`
