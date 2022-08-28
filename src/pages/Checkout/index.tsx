import {
  AlertButton,
  CheckoutContainer,
  CoffeeOrderContainer,
  EmptyAlert,
  OrderFooter,
  OrderList,
  OrderResume,
} from './styles'
import { OrderCheckoutForm } from './components/OrderCheckoutForm'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { Coffee, ShoppingCart } from 'phosphor-react'
import { ErrorMessage, Header } from './components/OrderCheckoutForm/styles'
import { useContext, useState } from 'react'
import { OrderContext } from '../../contexts/OrderContext'
import { OrderCoffee } from './components/OrderCoffee'
import { Link, useNavigate } from 'react-router-dom'
import { LoadingModal } from './components/LoadingModal'

export const Checkout = () => {
  const { cart, cartIsEmpty, cartTotal, deliveryFee, concludeOrder } =
    useContext(OrderContext)
  const navigate = useNavigate()

  const [isLoading, setIsLoading] = useState(false)

  const orderCheckoutFormSchema = zod.object({
    cep: zod.string().min(8, 'O CEP inválido. Mínimo 8 caracteres'),
    street: zod.string().min(1, 'Informe o nome da rua'),
    number: zod.string().min(1, 'Informe o número do endereço'),
    complement: zod.string().min(0),
    district: zod.string().min(1, 'Informe o nome do bairro'),
    city: zod.string().min(1, 'Informe o nome da cidade'),
    state: zod
      .string()
      .min(2, 'Informe a siga do estado')
      .max(2, 'Insira apenas a siga do estado'),
    paymentMethod: zod.enum(['credit', 'debit', 'money'], {
      invalid_type_error: 'Selecione a forma de pagamento',
    }),
    cartIsEmpty: zod.enum(['false'], {
      invalid_type_error: 'Adicione itens ao seu carrinho',
    }),
  })

  type OrderCheckoutFormData = zod.infer<typeof orderCheckoutFormSchema>

  const orderCheckoutForm = useForm<OrderCheckoutFormData>({
    resolver: zodResolver(orderCheckoutFormSchema),
  })

  const { handleSubmit, reset, formState } = orderCheckoutForm
  const { errors } = formState
  const orderCheckoutFormErrors = errors

  const handleOrderCheckoutSubmit = (checkout: OrderCheckoutFormData) => {
    const orderCheckout = {
      cart,
      paymentMethod: checkout.paymentMethod,
      deliveryFee,
      address: {
        cep: checkout.cep,
        state: checkout.state,
        city: checkout.city,
        district: checkout.district,
        street: checkout.street,
        number: checkout.number,
        complement: checkout.complement,
      },
      isConcluded: false,
    }

    setIsLoading(true)

    setTimeout(() => {
      concludeOrder(orderCheckout)
      navigate('/success')

      setIsLoading(false)
    }, 2500)

    reset()
  }

  return (
    <>
      <CheckoutContainer>
        <h1>Complete seu pedido</h1>

        <form onSubmit={handleSubmit(handleOrderCheckoutSubmit)}>
          <FormProvider {...orderCheckoutForm}>
            <OrderCheckoutForm formErrors={orderCheckoutFormErrors} />
          </FormProvider>

          <CoffeeOrderContainer>
            <Header iconColor="gray">
              <Coffee size={22} />
              <div>
                <legend>Cafés Selecionados</legend>
                <span>Aqui estão todos os cafés do seu pedido</span>
              </div>
            </Header>

            {cartIsEmpty ? (
              <EmptyAlert>
                <ShoppingCart size={60} />
                <div>
                  <strong>Oops... Seu carrinho está vazio!</strong>
                  <Link to="/" title="Ver cafés">
                    <AlertButton type="button">Ver cafés</AlertButton>
                  </Link>
                </div>
              </EmptyAlert>
            ) : (
              <OrderList>
                {cart.map((coffee) => {
                  return (
                    <OrderCoffee
                      key={coffee.id}
                      id={coffee.id}
                      name={coffee.name}
                      price={coffee.price}
                      amount={coffee.amount}
                      image={coffee.image}
                    />
                  )
                })}
              </OrderList>
            )}

            <OrderFooter>
              {orderCheckoutFormErrors.cartIsEmpty && (
                <ErrorMessage>
                  {orderCheckoutFormErrors.cartIsEmpty.message}
                </ErrorMessage>
              )}
              <OrderResume>
                <div>
                  <span>Total de itens</span>
                  <span>R$ {cartTotal.toFixed(2)}</span>
                </div>
                <div>
                  <span>Entrega</span>
                  <span>R$ {deliveryFee.toFixed(2)}</span>
                </div>
                <div>
                  <span>Total</span>
                  <span>R$ {(cartTotal + deliveryFee).toFixed(2)}</span>
                </div>
              </OrderResume>
              <button type="submit" title="Confirmar pedido">
                Confirmar Pedido
              </button>
            </OrderFooter>
          </CoffeeOrderContainer>
        </form>
      </CheckoutContainer>

      <LoadingModal isLoading={isLoading} />
    </>
  )
}
