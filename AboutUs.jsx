import React from 'react';

export default function AboutUs({ onNavigate = () => {}, cartCount = 0 }) {
  return (
    <div className="page-shell">
      <nav className="top-nav">
        <button className="brand-button" onClick={() => onNavigate('home')}>🌿 Paradise Nursery</button>
        <div className="nav-actions">
          <button onClick={() => onNavigate('products')}>Plants</button>
          <button onClick={() => onNavigate('cart')}>🛒 Cart ({cartCount})</button>
        </div>
      </nav>
      <section className="about-section">
        <p className="eyebrow">OUR STORY</p>
        <h1>Helping you grow a greener home</h1>
        <p>Paradise Nursery is a plant shop created for anyone who wants to bring the beauty of nature indoors. We believe plants can make everyday spaces feel more welcoming, peaceful, and alive.</p>
        <p>Our collection focuses on popular indoor plants for different spaces and experience levels, from easy-care favourites to leafy statement plants. We aim to make choosing, caring for, and enjoying plants a simple and joyful experience.</p>
        <div className="about-values">
          <article><h3>Thoughtfully selected</h3><p>Plant choices for desks, shelves, and bright corners.</p></article>
          <article><h3>Beginner friendly</h3><p>Discover plants that fit your routine and space.</p></article>
          <article><h3>Greener living</h3><p>Small natural touches can make a home feel special.</p></article>
        </div>
        <button className="primary-button" onClick={() => onNavigate('products')}>Explore Plants</button>
      </section>
    </div>
  );
}
