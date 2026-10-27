import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';

const products = [
  { id: 1, name: 'Snake Plant', category: 'Easy Care', price: 18.99, image: 'https://images.unsplash.com/photo-1593482892290-f54927ae2b7a?auto=format&fit=crop&w=800&q=80', description: 'A resilient architectural plant that thrives with little attention.' },
  { id: 2, name: 'Monstera Deliciosa', category: 'Statement Plants', price: 29.99, image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=800&q=80', description: 'Iconic split leaves bring a lush tropical feel to your room.' },
  { id: 3, name: 'Peace Lily', category: 'Flowering Plants', price: 22.50, image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=800&q=80', description: 'Elegant green leaves and graceful white blooms.' },
  { id: 4, name: 'Golden Pothos', category: 'Trailing Plants', price: 16.00, image: 'https://images.unsplash.com/photo-1616690249683-3b1c2c6c6b7c?auto=format&fit=crop&w=800&q=80', description: 'A beautiful trailing plant for shelves and hanging planters.' },
  { id: 5, name: 'Rubber Plant', category: 'Statement Plants', price: 26.00, image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=800&q=80', description: 'Glossy, deep-green foliage makes a bold indoor accent.' },
  { id: 6, name: 'Aloe Vera', category: 'Succulents', price: 14.50, image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=800&q=80', description: 'A sun-loving succulent with sculptural, fleshy leaves.' },
  { id: 7, name: 'ZZ Plant', category: 'Easy Care', price: 21.00, image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=80', description: 'Low-maintenance glossy foliage for home or office.' },
  { id: 8, name: 'Bird of Paradise', category: 'Statement Plants', price: 42.00, image: 'https://images.unsplash.com/photo-1597055181300-8b8f1f2d9b9b?auto=format&fit=crop&w=800&q=80', description: 'Large tropical leaves create a striking focal point.' },
  { id: 9, name: 'Jade Plant', category: 'Succulents', price: 12.99, image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=800&q=80', description: 'A compact succulent with rounded, fleshy leaves.' }
];

export { products };

export default function ProductList({ onNavigate = () => {}, cartCount = 0 }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const quantityInCart = (id) => cartItems.find((item) => item.id === id)?.quantity || 0;

  return (
    <div className="page-shell">
      <nav className="top-nav">
        <button className="brand-button" onClick={() => onNavigate('home')}>🌿 Paradise Nursery</button>
        <div className="nav-actions">
          <button onClick={() => onNavigate('about')}>About Us</button>
          <button onClick={() => onNavigate('cart')}>🛒 Cart ({cartCount})</button>
        </div>
      </nav>
      <header className="page-heading">
        <p className="eyebrow">GROW YOUR OWN OASIS</p>
        <h1>Find your new favourite plant</h1>
        <p>Explore our indoor plant collection, selected for every kind of space.</p>
      </header>
      <section className="product-grid" aria-label="Plant products">
        {products.map((product) => {
          const quantity = quantityInCart(product.id);
          return (
            <article className="product-card" key={product.id}>
              <img src={product.image} alt={product.name} loading="lazy" />
              <div className="product-content">
                <p className="eyebrow">{product.category}</p>
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <div className="price-row">
                  <span className="price">${product.price.toFixed(2)}</span>
                  <button className="add-button" onClick={() => dispatch(addItem(product))}>
                    {quantity > 0 ? `Add another (${quantity})` : 'Add to Cart'}
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </div>
  );
}
