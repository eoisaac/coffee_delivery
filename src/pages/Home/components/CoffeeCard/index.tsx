import {
  BuyButtons,
  BuyContainer,
  CartButton,
  CoffeeContainer,
  CoffeePrice,
  TagWrapper,
} from './styles'
import { CoffeeDrink } from '../../../../data/coffees_data'
import { ShoppingCart } from 'phosphor-react'
import { Counter } from '../../../../components/Counter'

export const CoffeeCard = ({
  id,
  name,
  description,
  tags,
  image,
  price,
}: CoffeeDrink) => {
  return (
    <CoffeeContainer>
      <img src={`./src/assets/${image}`} alt="" />

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
          <Counter />
          <CartButton>
            <ShoppingCart size={22} weight="fill" />
          </CartButton>
        </BuyButtons>
      </BuyContainer>
    </CoffeeContainer>
  )
}
