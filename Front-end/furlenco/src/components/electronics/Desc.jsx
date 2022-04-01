import styles from "./Desc.module.css";
import React from "react";
import { useLocation } from "react-router-dom";

export const Desc = () => {
  const location = useLocation();
  const ob = location.state;
  const handleAddCart = () => {
    console.log("added");
    const { id, ...others } = { ...ob };
    // console.log(others);
    fetch(`http://localhost:8000/cart`, {
      method: "POST",
      body: JSON.stringify(others),
      headers: { "content-type": "application/json;charset=UTF-8" },
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log("done");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.rightDiv}>
          <img className={styles.display_img} src={ob.display} alt='display' />
          <div className={styles.devide}>
            <div>
              <div className={styles.name_}>{ob.name}</div>
              <div className={styles.desc}>
                Rent our Flex sofa, sit back, relax, and put your feet up.
                Includes a comfortable, teal fabric sofa.
              </div>
              <div className={styles.name__}>PACKAGE CONTENTS</div>
              <div>
                <img src={ob.basic_item} className={styles.boxImage} alt='display' />
              </div>
            </div>
            <div>
              <div style={{ margin: "10px", color: "#346aa0" }}>
                Save to Wishlist
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.sidebar}>
        <div className={styles.formContainer}>
          <div className={styles.name}>{ob.name}</div>
          <div className={styles.monthlyrent}>Monthly Rental</div>
          <div className={styles.price_}>₹{ob.discounted_price}</div>
          <div>
            <span className={styles.price}>₹{ob.price}</span>
            <span className={styles.month}>/month</span>
            <span className={styles.save}>
              Save ₹{ob.price - ob.discounted_price} every month
            </span>
          </div>
          <div>( Inclusive of delivery & setup )</div>
          <div>
            Free delivery in <span className={styles.hours}>72 hours</span>
          </div>
          <div className={styles.addtocart} onClick={handleAddCart}>
            ADD TO CART
          </div>
          <div className={styles.selectApplication}>
            SELECT APPLIANCES & ADD ONS
          </div>
          <div className={styles.needHelp}>Need Help?</div>
        </div>
      </div>
    </div>
  );
};
