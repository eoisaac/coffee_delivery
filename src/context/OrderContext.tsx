import { createContext, ReactNode, useEffect, useState } from 'react'
import { Coffee } from '../pages/Home/components/CoffeeCard'

interface OrderContextProviderProps {
  children: ReactNode
}

interface OrderContextType {
  cart: Coffee[]
  cartTotal: number
  setCart: (cart: Coffee[]) => void
}

export const OrderContext = createContext({} as OrderContextType)

export const OrderContextProvider = ({
  children,
}: OrderContextProviderProps) => {
  const [cart, setCart] = useState<Coffee[]>([])
  const [cartTotal, setCartTotal] = useState(0)

  useEffect(() => {
    setCartTotal(
      cart.reduce((total, coffee) => {
        return (total += coffee.price * coffee.amount)
      }, 0),
    )
  }, [cart])

  return (
    <OrderContext.Provider value={{ cart, cartTotal, setCart }}>
      {children}
    </OrderContext.Provider>
  )
}
