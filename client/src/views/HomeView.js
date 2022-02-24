import { useFetch } from '../hooks/useFetch';

// styles
import './HomeView.css';

// components
import Product from '../components/Product';

export default function HomeView() {
  const { data: products, isPending, error } = useFetch('https://mern-vr-games-webshop.herokuapp.com');

  return (
    <div className="homeview">
      <h2 className="homeview__title">Improve your health and skills from the comfort of your home.</h2>
      <div className="homeview__products">
        {isPending && <div>Loading...</div>}
        {error && <div>{error}</div>}
        {products && products.map(product => (
          <Product 
            key={product._id}
            productId={product._id}
            name={product.name}
            price={product.price}
            description={product.description}
            imageUrl={product.imageUrl}
          />))
        }
      </div>
    </div>
  )
}
