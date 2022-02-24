import { Link }  from 'react-router-dom';

// styles
import './CartView.css';

export default function CartView({ cartItems, editCallback, removeCallback }) {
  
  // Use callback function to plus or minus number of items in cart
  const updateItem = (i, q) => {
    editCallback(i, q);
  }

  // Use callback function to remove item from cart
  const removeItem = (i) => {
    removeCallback(i);
  }

  return (
    <div className="cartview">
      <p>Your Shopping Cart</p>
      {cartItems ? (
        cartItems.map((cartItem) => (
        <div key={cartItem._id + 1} className="cartview__item">
          <Link to={`/product/${cartItem._id}`}><img src={cartItem.imageUrl} alt="cart item" /></Link>
          <p>{cartItem.name} ({cartItem.quantity})</p>
          <div className="cartview__buttons">
            <i className="fa-solid fa-square-plus" onClick={() => updateItem(cartItem, 1)}></i>
            <i className="fa-solid fa-square-minus" onClick={() => updateItem(cartItem, -1)}></i>
            <i className="fa-solid fa-trash-can" onClick={() => removeItem(cartItem)}></i>
          </div>
        </div>
      ))) : (
      <div>"There are no items in your cart."</div>
      )
      }
    </div>);
}
