import { MapPin, ShoppingCart } from 'phosphor-react'
import { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { OrderContext } from '../../context/OrderContext'
import {
  ButtonBadge,
  CartButton,
  CitySelect,
  HeaderContainer,
  SrOnlyHeaderTitle,
} from './styles'

export const Header = () => {
  const { cart } = useContext(OrderContext)

  const cartItems = cart.length

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
            <CartButton type="button">
              {cartItems !== 0 && <ButtonBadge>{cartItems}</ButtonBadge>}

              <ShoppingCart size={22} weight="fill" />
            </CartButton>
          </NavLink>
        </nav>
      </div>
    </HeaderContainer>
  )
}
