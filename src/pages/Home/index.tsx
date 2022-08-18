import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import {
  IntroContent,
  ContentTitle,
  IntroContainer,
  HomeContainer,
  Item,
  ItemsGrid,
  ItemsWrap,
} from './styles'

export const Home = () => {
  return (
    <HomeContainer>
      <IntroContainer>
        <IntroContent>
          <ContentTitle>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <strong>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </strong>
          </ContentTitle>

          <ItemsGrid>
            <ItemsWrap>
              <Item itemBGColor="orange">
                <span>
                  <ShoppingCart size={16} weight="fill" />
                </span>
                Compra simples e segura
              </Item>
              <Item itemBGColor="yellow">
                <span>
                  <Timer size={16} weight="fill" />
                </span>
                Entrega rápida e rastreada
              </Item>
            </ItemsWrap>
            <ItemsWrap>
              <Item itemBGColor="gray">
                <span>
                  <Package size={16} weight="fill" />
                </span>
                Embalagem mantém o café intacto
              </Item>
              <Item itemBGColor="purple">
                <span>
                  <Coffee size={16} weight="fill" />
                </span>
                O café chega fresquinho até você
              </Item>
            </ItemsWrap>
          </ItemsGrid>
        </IntroContent>

        <img src="./src/assets/images/coffee_delivery_home.svg" alt="" />
      </IntroContainer>
    </HomeContainer>
  )
}
