import { ADD_TO_CART } from '../actions/products'

export default function cart(state = [], action) {
  switch (action.type) {
    case ADD_TO_CART :
      return state.concat([action.sneaker])
    default :
      return state
  }
}