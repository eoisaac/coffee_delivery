import {
  BuyButtons,
  BuyContainer,
  CartButton,
  CoffeeContainer,
  CoffeePrice,
  TagWrapper,
} from './styles'
import { CoffeeItem } from '../../../../data/coffees_data'
import { ShoppingCart } from 'phosphor-react'
import { Counter } from '../../../../components/Counter'
import { useContext, useState } from 'react'
import { OrderContext } from '../../../../context/OrderContext'

export interface Coffee extends Omit<CoffeeItem, 'description' | 'tags'> {
  amount: number
}

export const CoffeeCard = ({
  id,
  name,
  description,
  tags,
  image,
  price,
}: CoffeeItem) => {
  const { cart, addCoffeeToCart } = useContext(OrderContext)

  const [coffeeAmount, setCoffeeAmount] = useState(1)

  const handleAddCoffeeIntoCart = () => {
    console.log('add')
    addCoffeeToCart({
      id,
      name,
      price,
      image,
      amount: coffeeAmount,
    })
  }
  return (
    <CoffeeContainer>
      <img src={`./src/assets/${image}`} alt={`Foto do ${name}`} />

      <TagWrapper>
        {tags.map((tag) => (
          <span key={`${id}_${tag}`}>{tag}</span>
        ))}
      </TagWrapper>

      <h3>{name}</h3>
      <p>{description}</p>

      <BuyContainer>
        <CoffeePrice>
          R$ <span>{price.toFixed(2)}</span>
        </CoffeePrice>

        <BuyButtons>
          <Counter
            size="large"
            setAmount={setCoffeeAmount}
            counterValue={coffeeAmount}
          />

          <CartButton onClick={handleAddCoffeeIntoCart}>
            <ShoppingCart size={22} weight="fill" />
          </CartButton>
        </BuyButtons>
      </BuyContainer>
    </CoffeeContainer>
  )
}
