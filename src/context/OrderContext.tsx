import { createContext, ReactNode, useState } from 'react'
import { Coffee } from '../pages/Home/components/CoffeeCard'

interface OrderContextProviderProps {
  children: ReactNode
}

interface OrderContextType {
  cart: Coffee[]
  setCart: (cart: Coffee[]) => void
}

export const OrderContext = createContext({} as OrderContextType)

export const OrderContextProvider = ({
  children,
}: OrderContextProviderProps) => {
  const [cart, setCart] = useState<Coffee[]>([])

  return (
    <OrderContext.Provider value={{ cart, setCart }}>
      {children}
    </OrderContext.Provider>
  )
}
