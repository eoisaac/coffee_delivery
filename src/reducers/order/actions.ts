import { OrderState } from '../../contexts/OrderContext'
import { Coffee } from '../../pages/Home/components/CoffeeCard'

export enum ActionTypes {
  ADD_COFFEE_TO_CART = 'ADD_COFFEE_TO_CART',
  REMOVE_COFFEE_FROM_CART = 'REMOVE_COFFEE_FROM_CART',
  UPDATE_COFFEE_IN_CART = 'UPDATE_COFFEE_IN_CART',
  CONCLUDE_ORDER = 'CONCLUDE_ORDER',
}

export const addCoffeeToCartAction = (coffee: Coffee) => {
  return {
    type: ActionTypes.ADD_COFFEE_TO_CART,
    payload: {
      coffee,
    },
  }
}

export const removeCoffeeFromCartAction = (coffeeId: string) => {
  return {
    type: ActionTypes.REMOVE_COFFEE_FROM_CART,
    payload: {
      coffeeId,
    },
  }
}

export const updateCoffeeAmountInCartAction = (
  coffeeId: string,
  newCoffeeAmount: number,
) => {
  return {
    type: ActionTypes.UPDATE_COFFEE_IN_CART,
    payload: {
      coffeeId,
      newCoffeeAmount,
    },
  }
}

export const concludeOrderAction = (orderCheckout: OrderState) => {
  return {
    type: ActionTypes.CONCLUDE_ORDER,
    payload: {
      orderCheckout,
    },
  }
}
