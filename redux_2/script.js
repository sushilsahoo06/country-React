import {createstore} from 'redux'
import {productList} from './productList'

const initialstate={
  product:productList,

  cartItems:[],
  wishList:[]
}
