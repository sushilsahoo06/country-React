export const Add_Wishlist = 'wishlist/add';
export const Remove_Wishlist = 'wishlist/remove';

// ✅ Action Creators
export const addToWishlist = (productId) => ({
  type: Add_Wishlist,
  payload: { productId },
});

export const removeFromWishlist = (productId) => ({
  type: Remove_Wishlist,
  payload: { productId },
});
const initialstate={
  wishList:[],
}

export default function WishlistReducer(state=initialstate,action){
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