import { Link } from 'react-router-dom';

// styles
import './Product.css';

const Product = ({imageUrl, name, price, description, productId}) => {
    return (
        <div className="product">
            <img src={imageUrl} alt={name} />
            <div className="product__details">
                <p className="details__name">{name}</p>
                <p className="details__description">{description.substring(0, 100)}...</p>
                <p className="details__price">Price: &euro;{price},-</p>
                <Link to={`/product/${productId}`}><button className="details__button">View</button></Link>
            </div>
        </div>
    )
}

export default Product;