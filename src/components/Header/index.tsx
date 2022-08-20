import { MapPin, ShoppingCart } from 'phosphor-react'
import { Link, NavLink } from 'react-router-dom'
import {
  ButtonBadge,
  CartButton,
  CitySelect,
  HeaderContainer,
  SrOnlyHeaderTitle,
} from './styles'

export const Header = () => {
  const amount = 3

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
        <CitySelect>
          <MapPin size={22} weight="fill" /> Ouro Branco, MG
        </CitySelect>

        <nav>
          <NavLink to="/checkout">
            <CartButton>
              {amount && <ButtonBadge>{amount}</ButtonBadge>}

              <ShoppingCart size={22} weight="fill" />
            </CartButton>
          </NavLink>
        </nav>
      </div>
    </HeaderContainer>
  )
}
