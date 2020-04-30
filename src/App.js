import React from 'react';
import './App.css';
import ProductList from './components/product-list';
import computersData from './static-data/computers';
import moviesData from './static-data/movies';

function App() {
  return (
    <div>
      <header className="primary-header">
        <h1 className="primary-heading">Logo</h1>
      </header>
      <main>
        <div className="products-wrapper">
          <h2 className="products-heading">Computers</h2>
          <ProductList products={computersData} />
        </div>
        <div className="products-wrapper products-wrapper--large-gap-top">
          <h2 className="products-heading">Movies</h2>
          <ProductList products={moviesData} />
        </div>
      </main>
      <footer className="primary-footer">
        <h2 className="footer-heading">Logo</h2>
      </footer>
    </div>
  );
}

export default App;
