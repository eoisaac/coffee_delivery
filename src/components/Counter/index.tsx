import { Minus, Plus } from 'phosphor-react'
import { ChangeEvent, useEffect, useState } from 'react'
import { CounterContainer } from './styles'

interface CounterProps {
  setCoffeeAmount: (amount: number) => void
}

export const Counter = ({ setCoffeeAmount }: CounterProps) => {
  const [counter, setCounter] = useState(1)

  const handleAmountInput = (e: ChangeEvent<HTMLInputElement>) => {
    setCounter(Number(e.target.value))
  }

  const handleAmountBtns = {
    increment: () => setCounter((prevAmount) => prevAmount + 1),
    decrement: () => setCounter((prevAmount) => prevAmount - 1),
  }

  useEffect(() => {
    if (counter > 99) setCounter(99)
    if (counter < 1) setCounter(1)

    setCoffeeAmount(counter)
  }, [counter, setCoffeeAmount])

  return (
    <CounterContainer>
      <button onClick={handleAmountBtns.decrement}>
        <Minus weight="bold" />
      </button>

      <input
        type="number"
        min={1}
        max={99}
        value={counter}
        onChange={handleAmountInput}
        onFocus={(e) => e.target.select()}
      />

      <button onClick={handleAmountBtns.increment}>
        <Plus weight="bold" />
      </button>
    </CounterContainer>
  )
}
