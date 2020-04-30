import React from 'react';
import ordinal from '../ordinal';
import './product-card.css';

function ProductCard({ product }) {
  return (
    <li className="product-card">
      <h3 className="product-card__heading">{product.name}</h3>
      <p className="product-card__description">{product.description}</p>
      <div className="stats">
        {/*
          FIXME: I don't know what component this should be.
          It looks like a <progress>, but I don't have enough information
          to give it a label and make it accessible.
          For now I will make it purely visual.
        */}
        <div className="progress"><div className="progress__inner"></div></div>
        {/*
          FIXME: I couldn't figure out how to extract assests from XD.
          So rather than trying to find a similar icon library or craft my own SVGs,
          I cheated a bit and took screenshots of a few icons.
        */}
        <p>
          <span className="sr-only">total favorites: </span>
          {product.favorites}
          <img src="/images/star.png" alt="" role="presentation" className="margin-left-small"></img>
        </p>
        <p>
          <span className="sr-only">rank: </span>
          {ordinal(product.rank)}
          <img src="/images/bar-graph.png" alt="" role="presentation" className="margin-left-small"></img>
        </p>
      </div>
      <a href="#placeholder" className="link link--centered-graphic" aria-label="continue to full product page">
        Continue
        <img src="/images/chevron.png" alt="" role="presentation" className="margin-left-small"></img>
      </a>
    </li>
  );
}

export default ProductCard;
