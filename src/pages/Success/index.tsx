import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import {
  Icon,
  OrderContainer,
  OrderRow,
  SuccessContainer,
  SuccessMessage,
  Wrapper,
} from './styles'

export const Success = () => {
  return (
    <SuccessContainer>
      <SuccessMessage>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você!</p>
      </SuccessMessage>

      <Wrapper>
        <OrderContainer>
          <OrderRow>
            <Icon iconBGColor="purple">
              <MapPin weight="fill" size={18} />
            </Icon>
            <div>
              <p>
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
              </p>
              <p>Farrapos - Porto Alegre, RS</p>
            </div>
          </OrderRow>

          <OrderRow>
            <Icon iconBGColor="yellow">
              <Timer weight="fill" size={18} />
            </Icon>
            <div>
              <p>Previsão de entrega</p>
              <p>
                <strong>20 min - 30 min</strong>
              </p>
            </div>
          </OrderRow>

          <OrderRow>
            <Icon iconBGColor="orange">
              <CurrencyDollar size={18} />
            </Icon>
            <div>
              <p>Pagamento na entrega</p>
              <p>
                <strong>Cartão de crédito</strong>
              </p>
            </div>
          </OrderRow>
        </OrderContainer>

        <img src="./src/assets/images/coffee_delivery_success.svg" alt="" />
      </Wrapper>
    </SuccessContainer>
  )
}
