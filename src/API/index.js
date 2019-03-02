import { products } from '../products/products'

var API  = {}

API.fetchProducts = function () {
  console.log('IN API', products )
  return new Promise((res, rej) => {
    setTimeout(function () {
      res(products)
    }, 2000)
  })
}

export default API