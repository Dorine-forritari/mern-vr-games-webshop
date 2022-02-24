import { Link } from 'react-router-dom';
import img from '../images/vr-glasses.png';

//styles
import './Navbar.css';

const Navbar = ({ click, totalCartItems }) => {
    
    return(
        <nav className="navbar">
        <div className="navbar__logo">
        {/*Icon made by Vitaly Gorbachev https://www.flaticon.com/authors/vitaly-gorbachev from https://www.flaticon.com/*/}
            <img src={img} alt="VR glasses" className="logo__image"/>
            <Link to="/">
            <h2>Feel Good Games</h2>
            </Link>
        </div>
        <div className="cart__and__menu">
        <div className="navbar__cart">   
                <Link to="/cart" className="cart__link">
                    <i className="fa-solid fa-cart-shopping"></i>
                    <span className="cart__count">({totalCartItems})</span>
                </Link>
        </div>
        <div className="hamburger__menu" onClick={click}>
            <div></div>
            <div></div>
            <div></div>
        </div>
        </div>
        </nav>
    )
}

export default Navbar;