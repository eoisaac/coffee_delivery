import styled from 'styled-components'

export const ButtonContainer = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  position: relative;
  padding: 0.5rem;
  cursor: pointer;
  line-height: 0;
  font-size: 0.875rem;
  outline: 0;
  transition: all 0.2s ease-in-out;
  border: none;
  border-radius: 6px;
`

export const ButtonBadge = styled.div`
  width: 1.25rem;
  height: 1.25rem;
  display: grid;
  place-items: center;
  position: absolute;
  inset: 0 0 auto auto;
  padding: 0.2rem;
  font-weight: 700;
  font-size: 0.75rem;
  text-align: center;
  color: ${(props) => props.theme.white};
  border-radius: 50%;
  background-color: ${(props) => props.theme['yellow-dark']};
`
