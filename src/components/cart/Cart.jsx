import React, { useState } from "react";
import { Link } from "react-router-dom";
import burger1 from "../../assets/burger1.png";
import burger2 from "../../assets/burger2.png";
import burger3 from "../../assets/burger3.png";
const CartItem = ({ value, title, img, increment, decrement ,onChange}) => (
  <div className="cartItem">
    <div>
      <h4>{title}</h4>
      <img src={img} alt="Item" />
    </div>
    <div>
      <button onClick={decrement}>-</button>
      <input type="number" value={value} onChange={onChange} />
      <button onClick={increment}>+</button>
    </div>
  </div>
);
const Cart = () => {

  const [values, setValues] = useState([0, 0, 0]); // initial values for each item

  const increment = (item) => {
    setValues(values.map((value, i) => i === item ? value + 1 : value));
  };

  const decrement = (item) => {
    setValues(values.map((value, i) => i === item && value > 0 ? value - 1 : value));
  };

  const handleChange = (item) => (event) => {
    const newValue = parseInt(event.target.value, 10);
    setValues(values.map((value, i) => i === item ? newValue : value));
  };

  return (
    <section className="cart">

      <main>
        <CartItem
          title={"Cheese Burger"}
          img={burger1}
          value={0}
          increment={() => increment(1)}
          decrement={() => decrement(1)}
          onChange={handleChange(1)}
        />
        <CartItem
          title={"Veg Cheese Burger"}
          img={burger2}
          value={0}
          increment={() => increment(2)}
          decrement={() => decrement(2)}
          onChange={handleChange(2)}
        />
        <CartItem
          title={"Cheese Burger with French Fries"}
          img={burger3}
          value={0}
          increment={() => increment(3)}
          decrement={() => decrement(3)}
          onChange={handleChange(3)}
        />
        <article>
          <div>
            <h4>Sub Total</h4>
            <p>₹{2000}</p>
          </div>
          <div>
            <h4>Tax</h4>
            <p>₹{2000 * 0.18}</p>
          </div>
          <div>
            <h4>Shipping Charges</h4>
            <p>₹{200}</p>
          </div>{" "}
          <div>
            <h4>Total</h4>
            <p>₹{2000 + 2000 * 0.18 + 200}</p>
          </div>
          <Link to="/shipping">Checkout</Link>
        </article>
      </main>
    </section>
  );
}

export default Cart;
