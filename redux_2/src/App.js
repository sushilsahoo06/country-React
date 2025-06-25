import ProductCard from '../components/Product';
import productList from '../store/FakeProduct';
import '../App.css';

export default function App() {
  console.log(productList);

  return (
    <div className='products-container'>
      {productList.map(({ title, rating, price, image }, index) => (
        <ProductCard
          key={index}
          title={title}
          rating={rating.rate}
          price={price}
          imageUrl={image}
        />
      ))}
    </div>
  );
}


