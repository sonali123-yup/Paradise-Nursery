import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import AboutUs from './AboutUs';
import ProductList from './ProductList';
import CartItem from './CartItem';

export default function App() {
  const [page, setPage] = useState('home');
  const cartItems = useSelector((state) => state.cart.items);
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  if (page === 'products') {
    return <ProductList onNavigate={setPage} cartCount={cartCount} />;
  }
  if (page === 'cart') {
    return <CartItem onNavigate={setPage} />;
  }
  if (page === 'about') {
    return <AboutUs onNavigate={setPage} cartCount={cartCount} />;
  }

  return (
    <main className="landing-page">
      <nav className="top-nav">
        <button className="brand-button" onClick={() => setPage('home')}>🌿 Paradise Nursery</button>
        <div className="nav-actions">
          <button onClick={() => setPage('about')}>About Us</button>
          <button onClick={() => setPage('products')}>Plants</button>
          <button onClick={() => setPage('cart')}>🛒 Cart ({cartCount})</button>
        </div>
      </nav>
      <section className="hero">
        <div className="hero-card">
          <p className="eyebrow">BRING NATURE HOME</p>
          <h1>Paradise Nursery</h1>
          <h2>Find your perfect plant.</h2>
          <p className="hero-copy">Thoughtfully chosen houseplants to bring a little more calm, colour, and life into your space.</p>
          <button className="primary-button" onClick={() => setPage('products')}>Get Started</button>
          <button className="text-button" onClick={() => setPage('about')}>Learn about us →</button>
        </div>
      </section>
    </main>
  );
}
