import {
  createContext,
  ReactNode,
  useEffect,
  useReducer,
  useState,
} from 'react'
import { Coffee } from '../pages/Home/components/CoffeeCard'
import {
  addCoffeeToCartAction,
  removeCoffeeFromCartAction,
  updateCoffeeAmountInCartAction,
} from '../reducers/order/actions'
import { orderReducer } from '../reducers/order/reducer'

interface OrderContextProviderProps {
  children: ReactNode
}

interface OrderContextType {
  cart: Coffee[]
  cartTotal: number
  addCoffeeToCart: (coffee: Coffee) => void
  removeCoffeeFromCart: (coffeeId: string) => void
  updateCoffeeAmountInCart: (coffeeId: string, newCoffeAmount: number) => void
}

export interface OrderState {
  cart: Coffee[]
}

export const OrderContext = createContext({} as OrderContextType)

export const OrderContextProvider = ({
  children,
}: OrderContextProviderProps) => {
  const [order, dispatch] = useReducer(orderReducer, { cart: [] })

  const [cartTotal, setCartTotal] = useState(0)
  const { cart } = order

  useEffect(() => {
    setCartTotal(
      cart.reduce((total, coffee) => {
        return (total += coffee.price * coffee.amount)
      }, 0),
    )
  }, [cart])

  const addCoffeeToCart = (coffee: Coffee) => {
    dispatch(addCoffeeToCartAction(coffee))
  }

  const removeCoffeeFromCart = (coffeeId: string) => {
    dispatch(removeCoffeeFromCartAction(coffeeId))
  }

  const updateCoffeeAmountInCart = (
    coffeeId: string,
    newCoffeAmount: number,
  ) => {
    dispatch(updateCoffeeAmountInCartAction(coffeeId, newCoffeAmount))
  }

  return (
    <OrderContext.Provider
      value={{
        cart,
        cartTotal,
        addCoffeeToCart,
        removeCoffeeFromCart,
        updateCoffeeAmountInCart,
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}
