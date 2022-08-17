import { LayoutContainer } from './styles'
import { Outlet } from 'react-router-dom'
import { Header } from '../../Header'

export const DefaultLayout = () => {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
    </LayoutContainer>
  )
}
