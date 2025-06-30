import { act } from "react";

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



const initialstate = {
  cartItems: [],
};

export default function CartReducer(state = initialstate, action) {
  switch (action.type) {
    case Cart_Add_Items:
      const existingItem = state.cartItems.find(
        (item) => item.productId === action.payload.productId
      );

      if (existingItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.productId === existingItem.productId
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }

      return {
        ...state,
        cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
      };

    case Cart_Remove_Items:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.productId !== action.payload.productId
        ),
      };

    case Inc_Item_Quantity:
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.productId === action.payload.productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };

    case Dec_Item_Quantity:
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.productId === action.payload.productId
            ? { ...item, quantity: Math.max(item.quantity - 1, 1) }
            : item
        ),
      };

    default:
      return state;
  }
}
