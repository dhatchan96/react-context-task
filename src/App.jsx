import React from 'react';
import CartPage from './CartPage';
import { CartProvider } from './CartContext';

function App() {
  return (
    <CartProvider>
      <div className="App">
        <CartPage />
      </div>
    </CartProvider>
  );
}

export default App;
