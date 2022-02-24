import {Link} from 'react-router-dom';

// styles
import './Sidebar.css';

const Sidebar = ({ show, click }) => {
    return show && (
        <div className="sidebar">
        <ul>
            <li>
                <Link to="/" className="sidebar__link" onClick={click}>
                    <div>Home</div>
                </Link>
            </li>
            <li>
                <Link to="/about" className="sidebar__link" onClick={click}>
                    <div>About</div>
                </Link>
            </li>
            <li>
                <Link to="/cart" className="sidebar__link" onClick={click}>
                    <div>Shopping Cart</div>
                </Link>
            </li>
        </ul>
        </div>
    )
}

export default Sidebar;
