import React from 'react';
import ProductCard from './productcard';
import './../styles/ProductGrid.css'; // Adjust path as needed

function ProductGrid({ products }) {
  return (
    <main className="product-grid">
      {/* Navigation for categories visible on top of product grid */}
      <div className="category-navigation">
        <a href="#">Placa Mãe</a>
        <a href="#">Placa de Vídeo</a>
        <a href="#">Processador</a>
        <a href="#">Fonte</a>
        <a href="#">Memória Ram</a>
      </div>
      <div className="products-container">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
        {/* Placeholder for the large phone image */}
        <div className="promo-item">
          <img src="https://via.placeholder.com/300x500?text=FREE+FIRE+Ad" alt="Free Fire Ad" className="promo-image" />
        </div>
      </div>
    </main>
  );
}

export default ProductGrid;