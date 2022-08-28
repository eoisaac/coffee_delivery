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
  concludeOrderAction,
  removeCoffeeFromCartAction,
  updateCoffeeAmountInCartAction,
} from '../reducers/order/actions'
import { orderReducer } from '../reducers/order/reducer'

export interface OrderState {
  cart: Coffee[]
  paymentMethod: 'credit' | 'debit' | 'money'
  deliveryFee: number
  address: {
    number: string
    cep: string
    street: string
    complement: string
    district: string
    city: string
    state: string
  }
  isConcluded: boolean
}

const defaultOrder: OrderState = {
  cart: [],
  paymentMethod: 'credit',
  deliveryFee: 0,
  address: {
    number: '',
    cep: '',
    street: '',
    complement: '',
    district: '',
    city: '',
    state: '',
  },
  isConcluded: false,
}

interface OrderContextProviderProps {
  children: ReactNode
}

interface OrderContextType {
  order: OrderState
  cart: Coffee[]
  cartTotal: number
  deliveryFee: number
  cartIsEmpty: boolean
  addCoffeeToCart: (coffee: Coffee) => void
  removeCoffeeFromCart: (coffeeId: string) => void
  updateCoffeeAmountInCart: (coffeeId: string, newCoffeAmount: number) => void
  concludeOrder: (orderCheckout: any) => void
}

export const OrderContext = createContext({} as OrderContextType)

export const OrderContextProvider = ({
  children,
}: OrderContextProviderProps) => {
  const [order, dispatch] = useReducer(orderReducer, defaultOrder, () => {
    const storedCartStateAsJSON = localStorage.getItem(
      '@coffee-delivery:cart-state-1.0.0',
    )
    return {
      ...defaultOrder,
      cart: storedCartStateAsJSON ? JSON.parse(storedCartStateAsJSON) : [],
    }
  })

  const [cartTotal, setCartTotal] = useState(0)
  const [deliveryFee, setDeliveryFee] = useState(0)

  const { cart } = order
  const cartIsEmpty = cart.length <= 0

  useEffect(() => {
    setCartTotal(
      (cart as Coffee[]).reduce((total, coffee) => {
        return (total += Number(coffee.price) * Number(coffee.amount))
      }, 0),
    )

    const cartStateAsJSON = JSON.stringify(cart)
    localStorage.setItem('@coffee-delivery:cart-state-1.0.0', cartStateAsJSON)
  }, [cart])

  useEffect(() => {
    cartIsEmpty
      ? setDeliveryFee(0)
      : setDeliveryFee(Math.random() * (5 - 2) + 2)
  }, [cartIsEmpty])

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

  const concludeOrder = (orderCheckout: OrderState) =>
    dispatch(concludeOrderAction(orderCheckout))

  return (
    <OrderContext.Provider
      value={{
        order,
        cart,
        cartIsEmpty,
        cartTotal,
        deliveryFee,
        addCoffeeToCart,
        removeCoffeeFromCart,
        updateCoffeeAmountInCart,
        concludeOrder,
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}
