import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Cart.module.css";
import { cartActions } from "../../store/cart-slice";
import { BankDetail } from "./BankDetail";
export const Cart = () => {
  const cart = useSelector((state) => state.cart);
  console.log(cart);
  const dispatch = useDispatch();
  const handleremove = (id_) => {
    dispatch(cartActions.removeItem(id_));
  };
  const [show, setShow] = useState(false);
  const openPayment = () => {
    setShow(!show);
  };
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.payDetails}>
          <div className={styles.Odetaisl}>Order Details</div>
          {cart.items.map((e) => (
            <div className={styles.payslip}>
              <div>{e.name}</div>
              <div>₹{e.discounted_price}/mo</div>
              <div onClick={handleremove} className={styles.del}>
                cancel
              </div>
            </div>
          ))}
          <div className={styles.payslip_}>
            <div>Total monthly rent</div>
            <div>
              ₹{cart.items.reduce((acc, e) => acc + e.discounted_price, 0)}/-
            </div>
          </div>
          <button className={styles.continue} onClick={openPayment}>
            Continue
          </button>
        </div>
      </div>
      {show && (
        <div className={styles.payment}>
          <BankDetail
            total={cart.items.reduce((acc, e) => acc + e.discounted_price, 0)}
          />
        </div>
      )}
    </div>
  );
};
