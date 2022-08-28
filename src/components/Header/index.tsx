import { MapPin, ShoppingCart } from 'phosphor-react'
import { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { EnvContext } from '../../contexts/EnvContext'
import { OrderContext } from '../../contexts/OrderContext'
import {
  ButtonBadge,
  CartButton,
  CitySelect,
  HeaderContainer,
  SrOnly,
} from './styles'

export const Header = () => {
  const { imagesPath } = useContext(EnvContext)
  const { cart, cartIsEmpty } = useContext(OrderContext)

  return (
    <HeaderContainer>
      <h2>
        <Link to="/">
          <img
            src={`${imagesPath}/coffee_delivery_logo.svg`}
            alt="Copo de café roxo com 'Coffee Delivery' 
            escrito ao lado na cor marrom"
          />
          <SrOnly>Coffee Delivery</SrOnly>
        </Link>
      </h2>

      <div>
        <CitySelect title="Selecionar cidade">
          <MapPin size={22} weight="fill" /> Ouro Branco, MG
          <SrOnly>Selecione sua cidade</SrOnly>
        </CitySelect>

        <nav>
          <NavLink to="/checkout" title="Ver carrinho">
            <CartButton type="button">
              {cartIsEmpty || <ButtonBadge>{cart.length}</ButtonBadge>}

              <ShoppingCart size={22} weight="fill" />
              <SrOnly>Ver carrinho</SrOnly>
            </CartButton>
          </NavLink>
        </nav>
      </div>
    </HeaderContainer>
  )
}
