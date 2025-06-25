import { createStore } from 'redux';
import {Product} from './FakeProduct';

const initialstate = {
  product:Product,
  cartItems: [],
  wishList: []
};

function reducer(state = initialstate, action) {
  // console.log('Reducer triggered:', action);
  console.log(state)

  switch (action.type) {
    case 'card/addItem':
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload]
      };

    default:
      return state; // ✅ Always return state for unrecognized actions
  }
}

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


store.dispatch({
  type: 'card/addItem',
  payload: { productId: 1, quantity: 1 }
});
store.dispatch({
  type: 'card/addItem',
  payload: { productId: 12, quantity: 3 }
});



