import { ADD_TO_CART, DELETE_FROM_CART } from '../actions/products'

export default function cart(state = [], action) {
  console.log('in cart reducer ',action, state)
  switch (action.type) {
    case ADD_TO_CART :
      return state.concat([action.sneaker])
    case DELETE_FROM_CART :
      return state.filter((item) => item.id !== action.id)
    default :
      return state
  }
}