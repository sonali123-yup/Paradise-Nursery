import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateQuantity, clearCart } from './CartSlice';

export default function CartItem({ onNavigate = () => {} }) {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const totalQuantity = items.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = items.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="page-shell">
      <nav className="top-nav">
        <button className="brand-button" onClick={() => onNavigate('home')}>🌿 Paradise Nursery</button>
        <div className="nav-actions">
          <button onClick={() => onNavigate('products')}>Continue Shopping</button>
          <button onClick={() => onNavigate('about')}>About Us</button>
        </div>
      </nav>
      <header className="page-heading">
        <p className="eyebrow">YOUR GREEN PICKS</p>
        <h1>Shopping Cart</h1>
        <p>{totalQuantity} {totalQuantity === 1 ? 'item' : 'items'} in your cart</p>
      </header>
      {items.length === 0 ? (
        <section className="empty-cart">
          <h2>Your cart is waiting for a little green.</h2>
          <p>You haven't added any plants yet. Browse the collection to find one you love.</p>
          <button className="primary-button" onClick={() => onNavigate('products')}>Browse Plants</button>
        </section>
      ) : (
        <section className="cart-layout">
          <div className="cart-list">
            {items.map((item) => (
              <article className="cart-row" key={item.id}>
                <img src={item.image} alt={item.name} />
                <div>
                  <h2>{item.name}</h2>
                  <p>${item.price.toFixed(2)} each</p>
                  <div className="quantity-controls" aria-label={`Quantity controls for ${item.name}`}>
                    <button aria-label={`Decrease ${item.name} quantity`} onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}>−</button>
                    <span>{item.quantity}</span>
                    <button aria-label={`Increase ${item.name} quantity`} onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}>+</button>
                  </div>
                </div>
                <div>
                  <p className="price">${(item.price * item.quantity).toFixed(2)}</p>
                  <button className="remove-button" onClick={() => dispatch(removeItem(item.id))}>Remove</button>
                </div>
              </article>
            ))}
          </div>
          <aside className="summary-card">
            <h2>Order Summary</h2>
            <div className="summary-line"><span>Items</span><span>{totalQuantity}</span></div>
            <div className="summary-line"><span>Subtotal</span><span>${totalPrice.toFixed(2)}</span></div>
            <div className="summary-line"><span>Delivery</span><span>Free</span></div>
            <div className="summary-line summary-total"><span>Total</span><span>${totalPrice.toFixed(2)}</span></div>
            <button className="primary-button" style={{ width: '100%', marginTop: 18 }} onClick={() => window.alert('Thank you! Checkout is a demo for this course project.')}>Checkout</button>
            <button className="text-button" style={{ color: '#174d36', width: '100%' }} onClick={() => dispatch(clearCart())}>Clear Cart</button>
          </aside>
        </section>
      )}
    </div>
  );
}
