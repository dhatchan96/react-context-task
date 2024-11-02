import React, { createContext, useContext, useReducer } from 'react';
import productsData from './products.json';

const CartContext = createContext();

const initialState = {
  items: productsData.products.map(product => ({ ...product, quantity: 1 }))
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_QUANTITY':
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: Math.max(1, action.payload.quantity) }
            : item
        )
      };
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload.id)
      };
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const updateQuantity = (id, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  };

  const removeItem = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { id } });
  };

  const totalQuantity = state.items.reduce((acc, item) => acc + item.quantity, 0);
  const totalAmount = state.items.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);

  return (
    <CartContext.Provider value={{ state, updateQuantity, removeItem, totalQuantity, totalAmount }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
