import { createStore, combineReducers } from 'redux';
import CartReducer, {
  addItemToCart,
  removeItemFromCart,
  increaseItemQuantity,
  decreaseItemQuantity,
} from './CartReducer';

import WishlistReducer, {
  addToWishlist,
  removeFromWishlist,
} from './WishlistReducer';

import ProductReducer from './ProductsReducer';

const reducer = combineReducers({
  product: ProductReducer,
  cartItems: CartReducer,
  wishlist: WishlistReducer,
});

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;

// ✅ Dispatch using action creators
store.dispatch(addItemToCart({ productId: 1, quantity: 1 }));
store.dispatch(addItemToCart({ productId: 12, quantity: 3 }));
store.dispatch(decreaseItemQuantity(12));
store.dispatch(addItemToCart({ productId: 10, quantity: 6 }));
store.dispatch(addItemToCart({ productId: 6, quantity: 9 }));
store.dispatch(removeItemFromCart(6));
store.dispatch(increaseItemQuantity(10));

store.dispatch(addToWishlist(10));
store.dispatch(addToWishlist(6));
store.dispatch(addToWishlist(12));
store.dispatch(removeFromWishlist(12));

console.log(store.getState());

