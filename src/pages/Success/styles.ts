import styled from 'styled-components'

export const SuccessContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding-top: clamp(1rem, 5vw, 5rem);
  overflow-y: auto;
`

export const SuccessMessage = styled.div`
  padding-bottom: clamp(1rem, 8vw, 2.5rem);
  animation: topToBottom 1s;

  h1 {
    font-family: 'Baloo 2', cursive;
    line-height: 130%;
    font-weight: 800;
    font-size: clamp(1rem, 8vw, 2rem);
    color: ${(props) => props.theme['yellow-dark']};
  }

  p {
    line-height: 130%;
    font-size: clamp(1rem, 5vw, 1.25rem);
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const Wrapper = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: clamp(1rem, 10vw, 6.375rem);

  img {
    flex: 1;
    height: auto;
    width: clamp(16rem, 50vw, 492px);
    animation: topToBottom 1s;
  }

  @media (min-width: 768px) {
    flex-direction: row;
  }
`

export const OrderContainer = styled(SuccessMessage)`
  animation: leftToRight 1s;
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: clamp(1rem, 2vw, 2rem);
  padding: clamp(1rem, 2vw, 2rem);
  border-radius: 6px 36px;
  border: 1px solid ${(props) => props.theme.yellow};
  /* border-image: linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%) 1; */
`

const ICON_BG_COLORS = {
  orange: 'yellow-dark',
  yellow: 'yellow',
  purple: 'purple',
} as const

interface IconProps {
  iconBGColor: keyof typeof ICON_BG_COLORS
}

export const Icon = styled.div<IconProps>`
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 0;
  border-radius: 50%;
  color: ${(props) => props.theme.background};
  background-color: ${(props) =>
    props.theme[ICON_BG_COLORS[props.iconBGColor]]};
`

export const OrderRow = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.75rem;
`
