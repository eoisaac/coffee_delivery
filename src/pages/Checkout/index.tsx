import {
  Bank,
  Coffee,
  CreditCard,
  CurrencyDollar,
  MapPin,
  Money,
} from 'phosphor-react'
import { OrderCoffee } from './components/OrderCoffee'
import {
  CheckoutContainer,
  CoffeeOrderContainer,
  DeliveryContainer,
  FieldsetContainer,
  FormContainer,
  Header,
  Input,
  InputRow,
  InputWrap,
  OrderFooter,
  OrderList,
  OrderResume,
  PaymentMethod,
  PaymentMethodsContainer,
} from './styles'
import { useForm } from 'react-hook-form'

export const Checkout = () => {
  const { register, handleSubmit } = useForm()

  const handleCheckoutSubmit = (data: any) => {
    console.log({ ...data, items: { a: 'a', b: 'b' } })
  }

  return (
    <CheckoutContainer>
      <h1>Complete seu pedido</h1>

      <FormContainer onSubmit={handleSubmit(handleCheckoutSubmit)}>
        <DeliveryContainer>
          <FieldsetContainer>
            <Header iconColor="yellow">
              <MapPin size={22} />
              <div>
                <legend>Endereço de Entrega</legend>
                <span>
                  Informe o endereço de onde deseja receber seu pedido
                </span>
              </div>
            </Header>

            <InputWrap>
              <InputRow>
                <Input>
                  <label htmlFor="cep">Cep</label>
                  <input
                    type="text"
                    {...register('cep', { required: true })}
                    id="cep"
                    placeholder="CEP"
                  />
                </Input>
              </InputRow>
              <Input>
                <label htmlFor="street">Rua</label>
                <input
                  type="text"
                  {...register('street', { required: true })}
                  id="street"
                  placeholder="Rua"
                />
              </Input>
              <InputRow>
                <Input>
                  <label htmlFor="number">Número</label>
                  <input
                    type="text"
                    {...register('number', { required: true })}
                    id="number"
                    placeholder="Número"
                  />
                </Input>
                <Input>
                  <label htmlFor="complement">Complemento</label>
                  <input
                    type="text"
                    {...register('complement', { required: false })}
                    id="complement"
                    placeholder="Complemento"
                  />
                </Input>
              </InputRow>
              <InputRow>
                <Input>
                  <label htmlFor="district">Bairro</label>
                  <input
                    type="text"
                    {...register('district', { required: true })}
                    id="district"
                    placeholder="Bairro"
                  />
                </Input>
                <Input>
                  <label htmlFor="city">Cidade</label>
                  <input
                    type="text"
                    {...register('city', { required: true })}
                    id="city"
                    placeholder="Cidade"
                  />
                </Input>
                <Input>
                  <label htmlFor="state">Estado</label>
                  <input
                    type="text"
                    {...register('state', { required: true })}
                    id="state"
                    placeholder="UF"
                  />
                </Input>
              </InputRow>
            </InputWrap>
          </FieldsetContainer>

          <FieldsetContainer>
            <Header iconColor="purple">
              <CurrencyDollar size={22} />
              <div>
                <legend>Pagamento</legend>
                <span>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </span>
              </div>
            </Header>

            <PaymentMethodsContainer>
              <PaymentMethod htmlFor="credit">
                <input
                  type="radio"
                  {...register('paymentMethod', { required: true })}
                  id="credit"
                  value="credit"
                />
                <div>
                  <span>
                    <CreditCard size={18} />
                  </span>
                  Cartão de Crédito
                </div>
              </PaymentMethod>
              <PaymentMethod htmlFor="debit">
                <input
                  type="radio"
                  {...register('paymentMethod')}
                  id="debit"
                  value="debit"
                />
                <div>
                  <span>
                    <Bank size={18} />
                  </span>
                  Cartão de Débito
                </div>
              </PaymentMethod>
              <PaymentMethod htmlFor="money">
                <input
                  type="radio"
                  {...register('paymentMethod')}
                  id="money"
                  value="money"
                />
                <div>
                  <span>
                    <Money size={18} />
                  </span>
                  Dinheiro
                </div>
              </PaymentMethod>
            </PaymentMethodsContainer>
          </FieldsetContainer>
        </DeliveryContainer>

        <CoffeeOrderContainer>
          <Header iconColor="gray">
            <Coffee size={22} />
            <div>
              <legend>Cafés Selecionados</legend>
              <span>Aqui estão todos os cafés do seu pedido</span>
            </div>
          </Header>

          <OrderList>
            <OrderCoffee />
            <OrderCoffee />
            <OrderCoffee />
            <OrderCoffee />
            <OrderCoffee />
            <OrderCoffee />
            <OrderCoffee />
          </OrderList>

          <OrderFooter>
            <OrderResume>
              <div>
                <span>Total de itens</span>
                <span>R$ 29,70</span>
              </div>
              <div>
                <span>Entrega</span>
                <span>R$ 3,50</span>
              </div>
              <div>
                <span>Total</span>
                <span>R$ 33,20</span>
              </div>
            </OrderResume>

            <button type="submit">Confirmar Pedido</button>
          </OrderFooter>
        </CoffeeOrderContainer>
      </FormContainer>
    </CheckoutContainer>
  )
}
