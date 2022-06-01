import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const data = async () => {
      let r = await fetch(`http://localhost:3004/products`);
      let d = await r.json();
      setProduct(d);
    };
    data();
    return () => {};
  }, []);

  return (
    <div className="products">
      {product.map((p) => (
        <div key={p.id}>
          <Link to={`/products/${p.id}`}>{p.name}</Link>
        </div>
      ))}
      {/* <Outlet/> */}
    </div>
  );
};

export default Products;
