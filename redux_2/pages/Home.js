import React from 'react'
import ProductCard from '../components/Product';
import productList from '../store/FakeProduct';

export default function Home() {
  return (
    <div className="products-container">
      {Array.isArray(productList) && productList.length > 0 ? (
        productList.map(({ title, rating, price, image,id }) => (
          <ProductCard

            key={id}
            productId={id}
            title={title}
            rating={rating?.rate}
            price={price}
            imageUrl={image}
          />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}
