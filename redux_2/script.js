import { combineReducers, createStore } from 'redux';
import CartReducer ,{
  Cart_Add_Items,
  Cart_Remove_Items,
  Inc_Item_Quantity,
  Dec_Item_Quantity
}from './CartReducer';

import WishlistReducer ,{
  Add_Wishlist,
  Remove_Wishlist,
}from './WishlistReducer';
import ProductReducer from './ProductsReducer';

// import productList from './FakeProduct.js';


// const initialstate = {
//   product:productList,
//   cartItems: [],
//   wishList: []
// };
// const Cart_Add_Items='card/addItem';
// const Cart_Remove_Items='card/removeItem';
// const Inc_Item_Quantity='card/incItem';
// const Dec_Item_Quantity='card/decItem';
// //wish list
// const Add_Wishlist='card/addwish';
// const Remove_Wishlist='card/removewish';

// function reducer(state = initialstate, action) {
//   // console.log('Reducer triggered:', action);
//   console.log(state)

//   switch (action.type) {
//     case Cart_Add_Items:
//       return {
//         ...state,
//         cartItems: [...state.cartItems, action.payload]
//       };
//     case Cart_Remove_Items:
//       return{
//         ...state,cartItems:state.cartItems.filter(cartItems=>cartItems.productId !==action.payload.productId)
//       }
//     case Inc_Item_Quantity:
//       return{
//         ...state,cartItems:state.cartItems.map((cartItems)=>{
//           if(cartItems.productId===action.payload.productId){
//             return {...cartItems,quantity:cartItems.quantity+1}
//           }
//           return cartItems
//         })
//       }
//     case Dec_Item_Quantity:
//       return{
//         ...state,cartItems:state.cartItems.map
//         ((cartItems)=>{
//           if(cartItems.productId===action.payload.productId){
//             return{...cartItems,quantity:cartItems.quantity-1}
//           }
//           return cartItems;
//         })
//       }
//     case Add_Wishlist:
//       return{
//         ...state,wishList:[...state.wishList,action.payload]
//       }
//     case Remove_Wishlist:
//       return{
//         ...state,wishList:state.wishList.filter(
//           (list)=>
//             list.productId !== action.payload.productId
//         )
//       }
    
//     default:
//       return state; // ✅ Always return state for unrecognized actions
//   }
// }

const reducer=combineReducers({
  product :ProductReducer,
  cartItems:CartReducer,
  wishlist:WishlistReducer,
})

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
  type: Dec_Item_Quantity,
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

store.dispatch({
  type: Inc_Item_Quantity,
  payload: { productId: 10, quantity: 10 }
});

store.dispatch({
  type:Add_Wishlist,
  payload:{productId:10}
});
store.dispatch({
  type:Add_Wishlist,
  payload:{productId:6}
});
store.dispatch({
  type:Add_Wishlist,
  payload:{productId:12}
});
store.dispatch({
  type:Remove_Wishlist,
  payload:{productId:12}
});


console.log(store.getState());


