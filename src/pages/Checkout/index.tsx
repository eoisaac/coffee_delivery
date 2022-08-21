import { CheckoutContainer } from './styles'
import { OrderCheckoutForm } from './components/OrderCheckoutForm'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

export const Checkout = () => {
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
  })

  type OrderCheckoutFormData = zod.infer<typeof orderCheckoutFormSchema>

  const orderCheckoutForm = useForm<OrderCheckoutFormData>({
    resolver: zodResolver(orderCheckoutFormSchema),
  })

  const { handleSubmit, reset, formState } = orderCheckoutForm
  const { errors } = formState
  const orderCheckoutFormErrors = errors

  const handleOrderCheckoutSubmit = (data: OrderCheckoutFormData) => {
    console.log({ ...data, items: { a: 'a', b: 'b' } })
    console.log('enviado')
    reset()
  }

  return (
    <CheckoutContainer>
      <h1>Complete seu pedido</h1>
      <form onSubmit={handleSubmit(handleOrderCheckoutSubmit)}>
        <FormProvider {...orderCheckoutForm}>
          <OrderCheckoutForm formErrors={orderCheckoutFormErrors} />
        </FormProvider>
      </form>
    </CheckoutContainer>
  )
}
