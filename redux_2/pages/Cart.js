import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from '../components/Cartltem'; // Make sure spelling is correct!

export default function Cart() {
  const cartItems = useSelector((state) => state.cartItems.cartItems); // ✅ Check shape

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <h2>Items in Your Cart</h2>
      <div className="cart-items-container">
        <div className="cart-header cart-item-container">
          <div className="cart-item">Item</div>
          <div className="item-price">Price</div>
          <div className="quantity">Quantity</div>
          <div className="total">Total</div>
        </div>

        {cartItems.map(({ id, title, rating, price, imageUrl, quantity }) => (
          <CartItem
            key={id}
            title={title}
            price={price}
            quantity={quantity}
            imageUrl={imageUrl}
            rating={rating}
          />
        ))}

        <div className="cart-header cart-item-container">
          <div></div>
          <div></div>
          <div></div>
          <div className="total">${totalPrice.toFixed(2)}</div>
        </div>
      </div>
    </div>
  );
}
