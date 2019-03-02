import API from '../API'

export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS'

function receiveProducts(products) {
  console.log('recieveProducts ',products)
  return {
    type: RECEIVE_PRODUCTS,
    products
  }
}

export function handleInitialData () {
  return (dispatch) => {
    return API.fetchProducts()
      .then((products)=> {
        console.log('HANDLE INITIAL DATA', products)
        dispatch(receiveProducts(products));
    })
  }
}