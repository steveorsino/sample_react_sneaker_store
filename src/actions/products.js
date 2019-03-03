import API from '../API'

export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS'
export const ADD_TO_CART = 'ADD_TO_CART'

export function receiveProducts(products) {
  return {
    type: RECEIVE_PRODUCTS,
    products
  }
}

export function addToCart(sneaker) {
  return {
    type: ADD_TO_CART,
    sneaker
  }
}

export function handleInitialData () {
  return (dispatch) => {
    return API.fetchProducts()
   // API.fetchProducts()
      .then((products)=> {
        console.log('HANDLE INITIAL DATA', products)
        dispatch(receiveProducts(products));
      })
  }
}