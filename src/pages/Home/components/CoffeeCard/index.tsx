import {
  BuyButtons,
  BuyContainer,
  CoffeeContainer,
  CoffeePrice,
  TagWrapper,
} from './styles'
import { CoffeeDrink } from '../../../../data/coffees_data'
import { ShoppingCart } from 'phosphor-react'
import { Button } from '../../../../components/Button'

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
          <span key={`${id}_${name}`}>{tag}</span>
        ))}
      </TagWrapper>

      <h3>{name}</h3>
      <p>{description}</p>

      <BuyContainer>
        <CoffeePrice>
          R$ <span>{price}</span>
        </CoffeePrice>

        <BuyButtons>
          <button>- 1 +</button>
          <Button>
            <ShoppingCart size={22} weight="fill" />
          </Button>
        </BuyButtons>
      </BuyContainer>
    </CoffeeContainer>
  )
}
