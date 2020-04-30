import React from 'react';
import './product-list.css';
import ProductCard from './product-card';

function ProductList({ products }) {
  const productCards = products.map((product) => <ProductCard product={product} />);
  return (
    <ol className="product-list">
      {productCards}
    </ol>
  );
}

export default ProductList;
