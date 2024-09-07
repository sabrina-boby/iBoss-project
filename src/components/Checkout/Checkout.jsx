import React, { useContext } from "react";
import "./Checkout.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { AppContext } from '../../context/AppContext';
import chair1 from "../../Assets/chair1.png";
import chair2 from "../../Assets/chair2.png";
import chair3 from "../../Assets/chair3.png";
import chair4 from "../../Assets/chair4.png";
import chair5 from "../../Assets/chair5.png";
import chair6 from "../../Assets/chair6.png";

const AddToCard = () => {
  const { cart, updateQuantity, removeFromCart } = useContext(AppContext);
  const imageMap = {
    chair1: chair1,
    chair2: chair2,
    chair3: chair3,
    chair4: chair4,
    chair5: chair5,
    chair6: chair6,
  };
  const calculateTotal = () => {
    // Check if cart is an array and has valid items
    if (!Array.isArray(cart)) return '0.00';
    return cart.reduce((total, item) => {
      const itemPrice = item.price || 0;
      const itemQuantity = item.quantity || 0;
      return total + (itemPrice * itemQuantity);
    }, 0).toFixed(2);
  };

  return (
    <>
      <Header />
      <div className="container">
        <div className="title">
          <h2>An overview of your order</h2>
          {cart.length > 0 ? (
            <div className="all-cart-items">
              {cart.map(item => (
                <div className="cart-item" key={item.id}>
                  <div className="product-align">
                    <div className="product">
                      <div className="item-quantity">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)} 
                          disabled={item.quantity <= 1}
                        >
                          -
                        </button>
                        <span className="quantity">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          +
                        </button>
                      </div>
                      <div className="item-details">
                        <img 
                          src={imageMap[item.image]} // Provide a default image if item.image is null
                          className="item-image" 
                          alt={item.name || 'Item'} // Provide a default alt text
                        />
                        <span className="item-name">{item.name || 'Unknown Item'}</span>
                      </div>
                    </div>
                    <button 
                      className="remove-btn" 
                      onClick={() => removeFromCart(item.id)}
                    >
                      &times;
                    </button>
                  </div>
                  <span className="item-price">€{(item.price * item.quantity || 0).toFixed(2)}</span>
                </div>
              ))}
            </div>
          ) : (
            <p>Your cart is empty</p>
          )}
        </div>

        <div className="title">
          <h2>Order details</h2>
          <div className="summary-full-box">
            <div className="summary-box">
              <div className="summary-item">
                <span className="label">Subtotal</span>
                <span className="value">€ {calculateTotal()}</span>
              </div>
              <div className="summary-item">
                <span className="label">Shipping</span>
                <span className="value">Free</span>
              </div>
              <div className="summary-item">
                <span className="label">
                  Estimated Tax <span className="info-icon">ⓘ</span>
                </span>
                <span className="value">€ -</span>
              </div>
              <hr />
              <div className="summary-item total">
                <span className="label">Total</span>
                <span className="value">€ {calculateTotal()}</span>
              </div>
            </div>
            <div>
              <button className="checkout-btn">Go to Checkout</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AddToCard;
