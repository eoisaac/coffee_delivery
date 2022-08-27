import { Minus, Plus } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { CounterContainer } from './styles'

interface CounterProps {
  size: 'small' | 'large'
  counterValue: number | 1
  setAmount: (amount: number) => void
}

export const Counter = ({ size, counterValue, setAmount }: CounterProps) => {
  const [counter, setCounter] = useState(counterValue)

  const handleAmountBtns = {
    increment: () => setCounter((prevCounter) => prevCounter + 1),
    decrement: () => setCounter((prevCounter) => prevCounter - 1),
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

      <div>{counter}</div>

      <button type="button" onClick={handleAmountBtns.increment}>
        <Plus weight="bold" />
      </button>
    </CounterContainer>
  )
}
