import { Trash } from 'phosphor-react'
import { useContext, useEffect, useState } from 'react'
import { Counter } from '../../../../components/Counter'
import { EnvContext } from '../../../../contexts/EnvContext'
import { OrderContext } from '../../../../contexts/OrderContext'
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
  const { imagesPath } = useContext(EnvContext)
  const { removeCoffeeFromCart, updateCoffeeAmountInCart } =
    useContext(OrderContext)

  const [coffeeAmount, setCoffeeAmount] = useState(amount)

  const handleRemoveCoffeeFromCart = () => {
    removeCoffeeFromCart(id)
  }

  useEffect(() => {
    updateCoffeeAmountInCart(id, coffeeAmount)
  }, [coffeeAmount])

  return (
    <OrderCoffeeContainer>
      <img
        src={`${imagesPath}/${image}`}
        alt={`Foto do ${name}`}
        loading="lazy"
      />
      <CoffeeData>
        <Header>
          <span>{name}</span>
          <Price>R$ {(price * coffeeAmount).toFixed(2)}</Price>
        </Header>
        <ButtonsWrap>
          <Counter
            size="small"
            setAmount={setCoffeeAmount}
            counterValue={coffeeAmount}
          />
          <RemoveButton
            type="button"
            onClick={handleRemoveCoffeeFromCart}
            title="Remover do carrinho"
          >
            <Trash size={16} />
            <span>Remover</span>
          </RemoveButton>
        </ButtonsWrap>
      </CoffeeData>
    </OrderCoffeeContainer>
  )
}
