import React, { useEffect, useState } from "react";
import styles from "./Cart.module.css";
export const Cart = () => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:8000/cart`)
      .then((r) => r.json())
      .then((d) => setCart([...d]))
      .catch((e) => console.log(e));
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.form}>Enter Your Details</div>
      <div className={styles.payDetails}>
        <div>Order Details</div>
        {cart.map((e) => (
          <div className={styles.payslip}>
            <img src={e.basic_img} />
            <div>{e.name}</div>
            <div>
              ₹{e.discounted_price}/mo x{e.quantity}
            </div>
            <div>-</div>
          </div>
        ))}
      </div>
    </div>
  );
};
