import { Trash } from 'phosphor-react'
import { useContext, useEffect, useState } from 'react'
import { Counter } from '../../../../components/Counter'
import { OrderContext } from '../../../../context/OrderContext'
import { Coffee } from '../../../Home/components/CoffeeCard'
import {
  RemoveButton,
  ButtonsWrap,
  CoffeeData,
  OrderCoffeeContainer,
  Price,
  Header,
} from './styles'

export const OrderCoffee = ({ id, name, price, amount, image }: Coffee) => {
  const { cart, removeCoffeeFromCart, updateCoffeeAmountInCart } =
    useContext(OrderContext)

  const [coffeeAmount, setCoffeeAmount] = useState(amount)

  const handleRemoveCoffeeFromCart = () => {
    removeCoffeeFromCart(id)
  }

  useEffect(() => {
    updateCoffeeAmountInCart(id, coffeeAmount)
  }, [coffeeAmount, id, updateCoffeeAmountInCart])

  return (
    <OrderCoffeeContainer>
      <img src={`./src/assets/${image}`} alt={`Foto do ${name}`} />
      <CoffeeData>
        <Header>
          <span>{name}</span>
          <Price>R$ {price.toFixed(2)}</Price>
        </Header>
        <ButtonsWrap>
          <Counter
            size="small"
            setAmount={setCoffeeAmount}
            counterValue={coffeeAmount}
          />
          <RemoveButton type="button" onClick={handleRemoveCoffeeFromCart}>
            <Trash size={16} />
            <span>Remover</span>
          </RemoveButton>
        </ButtonsWrap>
      </CoffeeData>
    </OrderCoffeeContainer>
  )
}
