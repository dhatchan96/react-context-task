import React from 'react';
import './CartPage.css';
import { useCart } from './CartContext';

const CartPage = () => {
  const { state, updateQuantity, removeItem, totalQuantity, totalAmount } = useCart();

  return (
    <div className="cart-page">
      {state.items.map(item => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.title} className="image" />
          <div className="cart-details">
            <h2 className="title">{item.title}</h2>
            <p className="text">{item.description}</p>
          </div>
          <div className="cart-actions">
            <input
              type="number"
              value={item.quantity}
              min="1"
              onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
              className="quantity-input"
            />
            <p className="price">${(item.price * item.quantity).toFixed(2)}</p>
            <button onClick={() => removeItem(item.id)} className="remove-button">REMOVE</button>
          </div>
        </div>
      ))}
      <div className="cart-summary">
        <div className="summary-row">
          <p>Total Quantity:</p>
          <p>{totalQuantity}</p>
        </div>
        <div className="summary-row">
          <p>Total Amount:</p>
          <p>${totalAmount}</p>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
