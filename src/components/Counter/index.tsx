import { Minus, Plus } from 'phosphor-react'
import { ChangeEvent, useEffect, useState } from 'react'
import { CounterContainer } from './styles'

export const Counter = () => {
  const [coffeeAamout, setCoffeeAmount] = useState(1)

  const handleCoffeeAmount = (e: ChangeEvent<HTMLInputElement>) => {
    setCoffeeAmount(Number(e.target.value))
  }

  const handleAmountBtns = {
    increment: () => setCoffeeAmount((prevAmount) => prevAmount + 1),
    decrement: () => setCoffeeAmount((prevAmount) => prevAmount - 1),
  }

  useEffect(() => {
    if (coffeeAamout > 99) setCoffeeAmount(99)
    if (coffeeAamout < 1) setCoffeeAmount(1)
  }, [coffeeAamout])

  return (
    <CounterContainer>
      <button onClick={handleAmountBtns.decrement}>
        <Minus weight="bold" />
      </button>

      <input
        type="number"
        min={1}
        max={99}
        value={coffeeAamout}
        onChange={handleCoffeeAmount}
        onFocus={(e) => e.target.select()}
      />

      <button onClick={handleAmountBtns.increment}>
        <Plus weight="bold" />
      </button>
    </CounterContainer>
  )
}
