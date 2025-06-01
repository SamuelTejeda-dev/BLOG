import { Link } from "react-router-dom";
import { Image } from "../image/Image";
import { IoSearchSharp } from "react-icons/io5";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="navbar-logo">
        <Image className="logo" src="logo.jpg" alt="logo" />
      </div>
      <div className="navbar-search-bar">
        <input
          className="navbar-search-input"
          type="text"
          placeholder="Search"
        />
        <IoSearchSharp fontSize={"1.3rem"} />
      </div>
      <div className="navbar-links-section">
        <Link className="navbar-links" to="/">
          HOME
        </Link>
        <Link className="navbar-links" to="/about">
          ABOUT
        </Link>
        <Link className="navbar-links" to="/contact">
          CONTACT
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
