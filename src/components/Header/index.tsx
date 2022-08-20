import { MapPin, ShoppingCart } from 'phosphor-react'
import { Link } from 'react-router-dom'
import { Button } from '../Button'
import { HeaderContainer, SrOnlyHeaderTitle } from './styles'

export const Header = () => {
  return (
    <HeaderContainer>
      <h2>
        <Link to="/">
          <img
            src="./src/assets/images/coffee_delivery_logo.svg"
            alt="Copo de café roxo com 'Coffee Delivery' escrito ao lado na cor marrom"
          />
          <SrOnlyHeaderTitle>Coffee Delivery</SrOnlyHeaderTitle>
        </Link>
      </h2>

      <div>
        <Button>
          <MapPin size={22} weight="fill" /> Ouro Branco, MG
        </Button>
        <Button>
          <ShoppingCart size={22} weight="fill" />
        </Button>
      </div>
    </HeaderContainer>
  )
}
