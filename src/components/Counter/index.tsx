import { Minus, Plus } from 'phosphor-react'
import { ChangeEvent, useEffect, useState } from 'react'
import { CounterContainer } from './styles'

interface CounterProps {
  size?: 'small' | 'large'
  setAmount: (amount: number) => void
}

export const Counter = ({ size = 'large', setAmount }: CounterProps) => {
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

    setAmount(counter)
  }, [counter, setAmount])

  return (
    <CounterContainer size={size}>
      <button type="button" onClick={handleAmountBtns.decrement}>
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

      <button type="button" onClick={handleAmountBtns.increment}>
        <Plus weight="bold" />
      </button>
    </CounterContainer>
  )
}
