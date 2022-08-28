import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useContext } from 'react'
import { EnvContext } from '../../contexts/EnvContext'
import { OrderContext } from '../../contexts/OrderContext'
import {
  Icon,
  OrderContainer,
  OrderRow,
  SuccessContainer,
  SuccessMessage,
  Wrapper,
} from './styles'

export const Success = () => {
  const { imagesPath } = useContext(EnvContext)
  const { order } = useContext(OrderContext)
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
                Entrega em
                <strong>
                  {` ${order.address.street}, ${order.address.number}`}
                </strong>
              </p>
              <p>
                {`${order.address.district} - ${order.address.city}, ${order.address.state}`}
              </p>
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
                <strong>{order.paymentMethod}</strong>
              </p>
            </div>
          </OrderRow>
        </OrderContainer>

        <img src={`${imagesPath}/coffee_delivery_success.svg`} alt="" />
      </Wrapper>
    </SuccessContainer>
  )
}
