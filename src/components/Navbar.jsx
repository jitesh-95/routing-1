import React from "react";
import { Link, useNavigate } from "react-router-dom";


const Navbar = () => {
  const navigate = useNavigate();
  const handleChange = (id) => {
    if (id === 1) {
      navigate("/products/1");
    }
  };
  

  return (
    <div className="navbar">
      <Link to="/" className="link">Home</Link>
      <Link to="/about" className="link">About</Link>
      <Link to="/products" className="link">Products</Link>
      {/* <button onClick={() => handleChange(1)}>got to product 1</button> */}
    </div>
  );
};

export default Navbar;
