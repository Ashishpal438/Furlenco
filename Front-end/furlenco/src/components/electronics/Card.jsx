import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Card.module.css";

export const Card = ({ ob }) => {
  const [entered, setEntered] = useState(false);
  const [itemsList, setItemList] = useState("basic_item");
  const [img_, setImg_] = useState("basic_img");
  const navigate = useNavigate();
  const handleMouseEnter = () => {
    setEntered(!entered);
    setItemList("basic_item");
  };
  function handleItem(element) {
    setItemList(element + "_item");
    setImg_(element + "_img");
  }
  const hoverElements = entered ? "" : "notShow";
  const handleClick = () => {
    navigate(`/details/${ob.name}`, { state: ob });
    console.log("moved");
  };
  return (
    <section
      className={styles.cardContainer}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseEnter}
      onClick={handleClick}
    >
      <img src={ob[img_]} alt="" className={styles.image_main} />
      <div className={styles.name}>{ob.name}</div>
      <div className={styles.hours}>72 hours</div>

      <div className={styles[hoverElements]}>
        <div className={styles.btn_div}>
          <button onMouseEnter={handleItem.bind(this, "basic")}>Basic</button>
          <button onMouseEnter={handleItem.bind(this, "value")}>Value</button>
          <button onMouseEnter={handleItem.bind(this, "prime")}>Prime</button>
        </div>
        <div className={styles.itemCount}>
          {ob[itemsList].length} {ob[itemsList].length == 1 ? "item" : "items"}
        </div>
        <div className={styles.item_image_div}>
          {ob[itemsList].map((ele) => (
            <img src={ele} alt="" className={styles.item_image} />
          ))}
        </div>
      </div>

      <hr />
      <div className={styles.details}>
        <span className={styles.price}>₹{ob.price} /mo</span>
        <span className={styles.off}>{ob.off}% Off</span>
        <span className={styles.discounted_price}>
          ₹{ob.discounted_price} /mo
        </span>
      </div>
    </section>
  );
};
