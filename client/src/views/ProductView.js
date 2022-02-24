import { useParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';

// styles
import './ProductView.css';

export default function ProductView({ addCallback }) {
  const { id } = useParams();
  const url = 'https://mern-vr-games-webshop.herokuapp.com/' + id;
  const { error, isPending, data: product } = useFetch(url);

  // Use callback function to add product to cart
  const sendItemInfo = () => {
    addCallback(product);
  }

  return (
    <div>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="pending">Loading...</p>}
      {product && (
        <div className="product__overview">  
          <div className="overview__left">
            <h2 className="product__name">{product.name}</h2>
            <p>{product.description}</p>
            <p>Price: &euro;{product.price},-</p>
            <button className="overview__button" onClick={sendItemInfo}>Add to Cart</button>
          </div>
          <div className="overview__right">
            <img src={product.imageUrl} alt={product.name} />
          </div>
        </div>
      )}
    </div>
  );
}
