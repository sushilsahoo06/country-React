import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
      <Link to='/home'><li>Home</li></Link>
        <Link to='/products'><li>Product</li></Link>
        <Link to='/about'><li>About</li></Link>
        <Link to='/contact'><li>Contact</li></Link>
      </ul>
      <button>Get Started</button>
    </div>
  )
}

export default Navbar;