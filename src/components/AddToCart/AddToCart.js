import React, { useState, useEffect } from "react";

const AddToCart = () => {
  const [cart, setCart] = useState([]);
  const products = [
    { id: 1, product: "egg" },
    { id: 2, product: "milk" },
    { id: 3, product: "bread" },
    { id: 4, product: "cake" },
    { id: 5, product: "chips" },
    { id: 6, product: "chocolate" },
  ];

  const cartHandler = (id) => {
    const data = products.filter((prod) => prod.id === id);
    setCart([...cart, ...data]);
  };

  const removeCartHandler = (id) => {
    const data = cart.filter((prod) => prod.id !== id);
    setCart([...data]);
  };

  return (
    <div>
      <div>
        {products.map((product) => {
          return (
            <p key={product.id}>
              {product.product}
              <button onClick={() => cartHandler(product.id)}>
                Add to Cart
              </button>
            </p>
          );
        })}
      </div>
      <br />
      <br />
      <br />
      <div>
        {cart &&
          cart.map((product) => {
            return (
              <p key={product.id}>
                {product.product}
                <button onClick={() => removeCartHandler(product.id)}>
                  Remove from Cart
                </button>
              </p>
            );
          })}
      </div>
    </div>
  );
};

export default AddToCart;
