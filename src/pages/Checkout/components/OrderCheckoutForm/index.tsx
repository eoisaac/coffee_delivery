import {
  DeliveryContainer,
  FieldsetContainer,
  Header,
  InputWrap,
  InputRow,
  Input,
  ErrorMessage,
  PaymentMethodsContainer,
  PaymentMethod,
} from './styles'
import { MapPin, CurrencyDollar, CreditCard, Bank, Money } from 'phosphor-react'
import { useFormContext } from 'react-hook-form'

interface OrderCheckoutFormProps {
  formErrors: any
}

export const OrderCheckoutForm = ({ formErrors }: OrderCheckoutFormProps) => {
  const { register } = useFormContext()

  return (
    <>
      <DeliveryContainer>
        <FieldsetContainer>
          <Header iconColor="yellow">
            <MapPin size={22} />
            <div>
              <legend>Endereço de Entrega</legend>
              <span>Informe o endereço de onde deseja receber seu pedido</span>
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
                {formErrors.cep && (
                  <ErrorMessage>{formErrors.cep.message}</ErrorMessage>
                )}
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
              {formErrors.street && (
                <ErrorMessage>{formErrors.street.message}</ErrorMessage>
              )}
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
                {formErrors.number && (
                  <ErrorMessage>{formErrors.number.message}</ErrorMessage>
                )}
              </Input>
              <Input>
                <label htmlFor="complement">Complemento</label>
                <input
                  type="text"
                  {...register('complement', { required: false })}
                  id="complement"
                  placeholder="Complemento"
                />
                {formErrors.complement && (
                  <ErrorMessage>{formErrors.complement.message}</ErrorMessage>
                )}
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
                {formErrors.district && (
                  <ErrorMessage>{formErrors.district.message}</ErrorMessage>
                )}
              </Input>
              <Input>
                <label htmlFor="city">Cidade</label>
                <input
                  type="text"
                  {...register('city', { required: true })}
                  id="city"
                  placeholder="Cidade"
                />
                {formErrors.city && (
                  <ErrorMessage>{formErrors.city.message}</ErrorMessage>
                )}
              </Input>
              <Input>
                <label htmlFor="state">Estado</label>
                <input
                  type="text"
                  {...register('state', { required: true })}
                  id="state"
                  placeholder="UF"
                />
                {formErrors.state && (
                  <ErrorMessage>{formErrors.state.message}</ErrorMessage>
                )}
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
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
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
          {formErrors.paymentMethod && (
            <ErrorMessage>{formErrors.paymentMethod.message}</ErrorMessage>
          )}
        </FieldsetContainer>
      </DeliveryContainer>
    </>
  )
}
