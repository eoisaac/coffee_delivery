import { ReactNode } from 'react'
import { ButtonBadge, ButtonContainer } from './styles'

interface ButtonProps {
  children: ReactNode
}

export const Button = ({ children }: ButtonProps) => {
  return (
    <ButtonContainer>
      {/* <ButtonBadge>3</ButtonBadge> */}
      {children}
    </ButtonContainer>
  )
}
