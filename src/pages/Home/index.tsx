import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { useContext } from 'react'
import { coffeesList } from '../../data/coffees_data'
import { CoffeeCard } from './components/CoffeeCard'
import {
  IntroContent,
  ContentTitle,
  IntroContainer,
  HomeContainer,
  Item,
  ItemsGrid,
  ItemsWrap,
  CoffeesContainer,
  CoffeesGrid,
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

        <img
          src={`/images/coffee_delivery_home.svg`}
          alt="Copo de café branco, com a logo da Coffee Delivery. 
          No fundo, de cor amarela, contém alguns grãos de café e 
          equipamentos para preparo"
          loading="lazy"
        />
      </IntroContainer>

      <CoffeesContainer>
        <h1>Nossos Cafés</h1>

        <CoffeesGrid>
          {coffeesList.map((coffee) => {
            return (
              <CoffeeCard
                key={coffee.id}
                id={coffee.id}
                name={coffee.name}
                description={coffee.description}
                tags={coffee.tags}
                image={coffee.image}
                price={coffee.price}
              />
            )
          })}
        </CoffeesGrid>
      </CoffeesContainer>
    </HomeContainer>
  )
}
