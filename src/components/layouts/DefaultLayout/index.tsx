import { LayoutContainer, LayoutLimiter } from './styles'
import { Outlet } from 'react-router-dom'
import { Header } from '../../Header'

export const DefaultLayout = () => {
  return (
    <LayoutContainer>
      <LayoutLimiter>
        <Header />
        <Outlet />
      </LayoutLimiter>
    </LayoutContainer>
  )
}
