import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => (
  <div>
    <div className="ulDiv">
      <ul>
        <h2 style={{ fontWeight: 'bold' }}>BookStore CMS</h2>
        <li><Link to="/" className="links">BOOKS</Link></li>
        <li><Link to="categories" className="links">CATEGORIES</Link></li>
      </ul>
    </div>
  </div>
);

export default Navbar;
