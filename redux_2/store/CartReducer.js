// Action Types
export const Cart_Add_Items = 'card/addItem';
export const Cart_Remove_Items = 'card/removeItem';
export const Inc_Item_Quantity = 'card/incItem';
export const Dec_Item_Quantity = 'card/decItem';

// ✅ Action Creators
export const addItemToCart = (product) => ({
  type: Cart_Add_Items,
  payload: product,
});

export const removeItemFromCart = (productId) => ({
  type: Cart_Remove_Items,
  payload: { productId },
});

export const increaseItemQuantity = (productId) => ({
  type: Inc_Item_Quantity,
  payload: { productId },
});

export const decreaseItemQuantity = (productId) => ({
  type: Dec_Item_Quantity,
  payload: { productId },
});



const initialstate={
  cartItems:[],
}
export default function CartReducer(state=initialstate,action){
   switch (action.type) {
    case Cart_Add_Items:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload]
      };
    case Cart_Remove_Items:
      return{
        ...state,cartItems:state.cartItems.filter(cartItems=>cartItems.productId !==action.payload.productId)
      }
    case Inc_Item_Quantity:
      return{
        ...state,cartItems:state.cartItems.map((cartItems)=>{
          if(cartItems.productId===action.payload.productId){
            return {...cartItems,quantity:cartItems.quantity+1}
          }
          return cartItems
        })
      }
    case Dec_Item_Quantity:
      return{
        ...state,cartItems:state.cartItems.map
        ((cartItems)=>{
          if(cartItems.productId===action.payload.productId){
            return{...cartItems,quantity:cartItems.quantity-1}
          }
          return cartItems;
        })
      }
    default:
      return state; // ✅ Always return state for unrecognized actions
  }
}