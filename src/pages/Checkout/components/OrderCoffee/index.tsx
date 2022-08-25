import { useState } from 'react'
import { Counter } from '../../../../components/Counter'
import { Coffee } from '../../../Home/components/CoffeeCard'
import { ButtonsWrap, CoffeeData, OrderCoffeeContainer, Price } from './styles'

export const OrderCoffee = ({ name, price, amount, image }: Coffee) => {
  const [coffeeAmount, setCoffeeAmount] = useState(amount)

  return (
    <OrderCoffeeContainer>
      <img src={`./src/assets/${image}`} alt={`Foto do ${name}`} />
      <CoffeeData>
        <span>{name}</span>
        <ButtonsWrap>
          <Counter size="small" setAmount={setCoffeeAmount} />

          <button type="button">Remover</button>
        </ButtonsWrap>
      </CoffeeData>
      <Price>R$ {price.toFixed(2)}</Price>
    </OrderCoffeeContainer>
  )
}
