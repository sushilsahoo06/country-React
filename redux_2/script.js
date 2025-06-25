import { createStore } from 'redux';
import productList from './FakeProduct.js';


const initialstate = {
  product:productList,
  cartItems: [],
  wishList: []
};
const Cart_Add_Items='card/addItem';
const Cart_Remove_Items='card/removeItem';

function reducer(state = initialstate, action) {
  // console.log('Reducer triggered:', action);
  console.log(state)

  switch (action.type) {
    case Cart_Add_Items:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload]
      };
    case Cart_Remove_Items:
      return{
        ...state,cartItems:state.cartItems.fill(item=>item.productId !==action.payload.productId)
      }

    default:
      return state; // ✅ Always return state for unrecognized actions
  }
}

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


store.dispatch({
  type: Cart_Add_Items,
  payload: { productId: 1, quantity: 1 }
});
store.dispatch({
  type: Cart_Add_Items,
  payload: { productId: 12, quantity: 3 }
});
store.dispatch({
  type: Cart_Add_Items,
  payload: { productId: 10, quantity: 6 }
});
store.dispatch({
  type: Cart_Add_Items,
  payload: { productId: 6, quantity: 9 }
});
store.dispatch({
  type: Cart_Remove_Items,
  payload: { productId: 6, quantity: 9 }
});


console.log(store.getState());


