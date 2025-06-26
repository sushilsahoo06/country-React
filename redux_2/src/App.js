import { useSelector } from 'react-redux';
import ProductCard from '../components/Product';
import '../App.css';

export default function App() {
  const productList = useSelector((state) => state.product);

  return (
    <div className="products-container">
      {Array.isArray(productList) && productList.length > 0 ? (
        productList.map(({ title, rating, price, image }, index) => (
          <ProductCard
            key={index}
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
  );
}


