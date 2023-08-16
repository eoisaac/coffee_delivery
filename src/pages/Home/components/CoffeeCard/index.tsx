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
import { OrderContext } from '../../../../contexts/OrderContext'
import { SrOnly } from '../../../../components/Header/styles'

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
  const { addCoffeeToCart } = useContext(OrderContext)

  const [coffeeAmount, setCoffeeAmount] = useState(1)

  const handleAddCoffeeIntoCart = () => {
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
      <img
        src={`/images/coffees/${image}`}
        alt={`Foto do ${name}`}
        loading="lazy"
        title={name}
      />

      <TagWrapper>
        {tags.map((tag) => (
          <span key={`${id}_${tag}`} title={tag}>
            {tag}
          </span>
        ))}
      </TagWrapper>

      <strong>{name}</strong>
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

          <CartButton
            onClick={handleAddCoffeeIntoCart}
            title="Adicionar ao carrinho"
          >
            <ShoppingCart size={22} weight="fill" />
            <SrOnly>Adicionar ao carrinho</SrOnly>
          </CartButton>
        </BuyButtons>
      </BuyContainer>
    </CoffeeContainer>
  )
}
