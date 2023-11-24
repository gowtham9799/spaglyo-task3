
import React, { useState, useEffect } from 'react';


function ShoppingCart() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/')
      .then((res) => res.json())
      .then((res) => setUsers(res));
  }, []);

  return (
    <div className="shopping-cart-container">
      {users.map((user) => (
        <div key={user.id} className="cart-item">
          <img
            className="product-image"
            alt={user.title}
            src={user.image}
          />
          <div className="product-details">
            <div>{user.name}</div>
            <div className='product-tittle'>{user.title}</div>
            <button className='button'>Add to Card</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ShoppingCart;

