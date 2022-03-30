import { ContactsOutlined } from "@ant-design/icons";
import styles from "./Desc.module.css";
import React from "react";
import { useLocation } from "react-router-dom";

export const Desc = () => {
  const location = useLocation();
  const ob = location.state;
  return (
    <div className={styles.container}>
      <div>
        <img className={styles.display_img} src={ob.display} />
        <div>{ob.name}</div>
      </div>
      <div>
        <div>{ob.name}</div>
        <div>Monthly Rental</div>
        <div>₹{ob.discounted_price}</div>
        <div>ADD TO CART</div>
        <div></div>
      </div>
    </div>
  );
};
