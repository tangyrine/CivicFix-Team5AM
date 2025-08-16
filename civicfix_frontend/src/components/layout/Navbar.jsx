import { Link } from "react-router-dom";
import "../../styles/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container navbar-content">
        <Link to="/" className="navbar-brand">
          CivicFix
        </Link>

        <div className="navbar-links">
          <Link to="/" className="navbar-link">
            Home
          </Link>
          <Link to="/about" className="navbar-link">
            About
          </Link>
          <Link to="/features" className="navbar-link">
            Features
          </Link>
          <Link to="/how-to-use" className="navbar-link">
            How to use
          </Link>
          <Link to="/auth/signin" className="navbar-link sign-in-button">
            Sign In
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
