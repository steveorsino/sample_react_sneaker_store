import { products } from '../products/products'
import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://sample-react-sneaker-store.firebaseio.com/'
})

var API  = {}
// const productList = {
//   products: products
// }
// instance.post('/products.json',productList)
//   .then(res => console.log('res = ',res))

API.fetchProducts = function () {
  // if (instance.get('/products') === undefined) console.log('undefined')
  instance.get('/products.json')
    .then((response) => {
      console.log('response data',response.data)
      const products = [];
      for (let key in response.data){
        products.push(response.data[key].products)
      }
      return products;
      // console.log('products data',products)
      // return new Promise((res, rej) => {
      //   res(products)
      // })
    })

  // console.log('IN API', products )
  // return new Promise((res, rej) => {
  //   setTimeout(function () {
  //     res(products)
  //   }, 2000)
  // })
}

export default API