import { Contaiener, LoadingContainer, ModalContainer } from './styles'

interface LoadingModalProps {
  isLoading: boolean
}

export const LoadingModal = ({ isLoading }: LoadingModalProps) => {
  return (
    <Contaiener isLoading={isLoading}>
      <ModalContainer>
        <strong>Uhu! Seu pedido esta quase pronto!</strong>
        <p>Aguarde só mais um pouco enquanto finalizamos!</p>

        <LoadingContainer />
      </ModalContainer>
    </Contaiener>
  )
}
