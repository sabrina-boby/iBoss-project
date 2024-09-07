import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useContext(AppContext);

  return (
    <div className="cart-container">
      {cart.length > 0 ? (
        cart.map(item => (
          <div className="cart-item" key={item.id}>
            <img src={item.image} alt={item.name} className="cart-image" />
            <div className="cart-details">
              <h2>{item.name}</h2>
              <p>€{item.price}</p>
              <div className="cart-actions">
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                  min="1"
                />
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>Your cart is empty</p>
      )}
    </div>
  );
};

export default Cart;

