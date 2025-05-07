import { useState } from 'react';
import './Cart.css'; // You'll need to create this CSS file

function Cart({ cart }) {
  const [isOpen, setIsOpen] = useState(false);
  
  function toggleCart() {
    setIsOpen(!isOpen);
  }
  
  // Calculate total items in cart
  const totalItems = cart.reduce((sum, item) => sum + item.count, 0);
  
  return (
    <div className="cart-container">
      <button className="cart-button" onClick={toggleCart}>
        Cart ({totalItems})
      </button>
      
      {isOpen && (
        <div className="cart-popup">
          <div className="cart-header">
            <h3>Your Cart</h3>
            <button className="close-button" onClick={toggleCart}>×</button>
          </div>
          
          <div className="cart-items">
            {cart.length === 0 ? (
              <p>Your cart is empty</p>
            ) : (
              cart.map(item => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.title} className="cart-item-image" />
                  <div className="cart-item-details">
                    <p className="cart-item-title">{item.title}</p>
                    <p className="cart-item-count">Qty: {item.count}</p>
                  </div>
                </div>
              ))
            )}
          </div>
          
          {cart.length > 0 && (
            <div className="cart-footer">
              <button className="checkout-button">Checkout</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Cart;