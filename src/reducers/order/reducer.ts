import { OrderState } from '../../contexts/OrderContext'
import { ActionTypes } from './actions'

export const orderReducer = (state: OrderState, action: any) => {
  switch (action.type) {
    case ActionTypes.ADD_COFFEE_TO_CART: {
      const coffeeInCart = state.cart.find(
        (coffee) => action.payload.coffee.id === coffee.id,
      )
      return {
        ...state,
        cart: coffeeInCart
          ? state.cart.map((coffee) => {
              return coffee.id === coffeeInCart.id
                ? {
                    ...coffee,
                    amount: coffee.amount + action.payload.coffee.amount,
                  }
                : coffee
            })
          : [...state.cart, action.payload.coffee],
      }
    }

    case ActionTypes.REMOVE_COFFEE_FROM_CART: {
      return {
        ...state,
        cart: state.cart.filter(
          (coffee) => coffee.id !== action.payload.coffeeId,
        ),
      }
    }

    case ActionTypes.UPDATE_COFFEE_IN_CART: {
      return {
        ...state,
        cart: state.cart.map((coffee) => {
          return coffee.id === action.payload.coffeeId
            ? { ...coffee, amount: action.payload.newCoffeeAmount }
            : coffee
        }),
      }
    }

    default:
      return state
  }
}
