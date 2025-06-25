
export const Add_Wishlist='card/addwish';
export const Remove_Wishlist='card/removewish';

export default function WishlistReducer(state=[],action){
  switch (action.type) {
    case Add_Wishlist:
      return{
        ...state,wishList:[...state.wishList,action.payload]
      }
    case Remove_Wishlist:
      return{
        ...state,wishList:state.wishList.filter(
          (list)=>
            list.productId !== action.payload.productId
        )
      }
    
    default:
      return state; // ✅ Always return state for unrecognized actions
  }
}