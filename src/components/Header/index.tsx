import { Link } from 'react-router-dom'
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

      <button>Ouro Branco, MG</button>
    </HeaderContainer>
  )
}
