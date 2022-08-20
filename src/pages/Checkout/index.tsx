import { CheckoutContainer } from './styles'

export const Checkout = () => {
  return (
    <CheckoutContainer>
      <h1>Complete seu pedido</h1>
      <form action="">
        <fieldset>
          <legend>Endereço de Entrega</legend>
        </fieldset>
        <fieldset>
          <legend>Pagamento</legend>
        </fieldset>
        <fieldset>
          <legend>Cafés Selecionados</legend>
        </fieldset>
      </form>
    </CheckoutContainer>
  )
}

