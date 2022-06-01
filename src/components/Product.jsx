import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:3004/products/${id}`)
        .then((r) => r.json())
        .then((d) => setProduct(d));
    }

    return () => {};
  }, [id]);

  return (
    <div className="element">
      <h2>{product.name}</h2>
      <h3>Price: {product.price} /unit</h3>
    </div>
  );
};

export default Product;
