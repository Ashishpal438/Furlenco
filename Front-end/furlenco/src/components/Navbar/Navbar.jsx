import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./Navbar.module.css";
import cx from "classnames";
import { useNavigate } from "react-router-dom";
import { Modal } from 'antd';
import Login from "../Login/Login";

export const Navbar = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:8000/cart`)
      .then((r) => r.json())
      .then((d) => setCart([...d]))
      .catch((e) => console.log(e));
  }, []);


  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };




  return (
    <>
      <div className={styles.offers}>
        <img
          src="https://assets.furlenco.com/s3-furlenco-images/lenco-icons/static-icons/ic_offer_rounded.svg"
          alt="img"
        />
        <span>
          Get Flat Rs. 400 off on your rent. Hurry! offer ends soon. T&C apply*
        </span>
        <button>Explore</button>
      </div>
      <nav className={styles.nav_container}>
        <div className={styles.left}>
          <div className={styles.logo} onClick={() => navigate("/")}>
            <svg width="29" height="33" viewBox="0 0 29 33">
              <path
                d="M13.138 13.744c.22.328.55.6.936.82.055.054.166.054.22.108h.056c.055 0 .055 0 .11.055.44.164.991.273 1.597.273C20.133 15 29 13.744 29 12.161c0-1.42-7.435-2.62-11.786-2.784C15.12 5.555 10.66-.56 9.393.04c-1.432.71 1.377 9.117 3.194 12.72.166.437.33.765.551.983m2.771 4.259c-.444 0-.777.054-1.11.163-.388.055-.832.272-1.165.544-.055 0-.055.054-.11.054-.056.055-.112.055-.167.11l-.056.054a3.34 3.34 0 00-.943 1.305c-1.775 3.644-4.382 12.075-2.94 12.727 1.332.599 5.603-5.547 7.656-9.355 4.382-.272 11.981-1.577 11.926-3.046-.056-1.523-8.987-2.61-13.091-2.556m-6.089-.144c.16-.454.213-.966.16-1.533-.053-.568-.265-1.136-.637-1.704C7.22 11.101 1.54 4.173.266 5.081c-1.167.795 1.752 7.893 3.928 11.811-2.017 3.975-4.67 11.3-3.503 12.039 1.327.851 6.688-6.36 8.705-9.994.16-.398.319-.739.425-1.08"
                fill="#346AA0"
              ></path>
            </svg>
          </div>

          <div className={styles.handleSearch}>
            <input type="text" placeholder="What are you searching for?" />
            <SearchIcon />
          </div>
        </div>

        <div className={styles.right}>
          <div className={cx(styles.nav_item, styles.unlimited)}>UNLMTD</div>

          <div className={styles.nav_item}>
            <img
              src="https://assets.furlenco.com/s3-furlenco-images/lenco-icons/static-icons/ic_offer_rounded.svg"
              alt="img"
            />
          </div>
          <div className={styles.nav_item} onClick={showModal}>
            <img
              src="	https://assets.furlenco.com/s3-furlenco-images/lenco-icons/static-icons/ic_user_circle.svg"
              alt="img"
            />
          </div>

          {/* modal */}
          <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
            <Login setIsModalVisible={setIsModalVisible} />
          </Modal>

          <div
            className={styles.nav_item}
            onClick={() => {
              navigate("/cart");
            }}
          >
            <img
              src="https://assets.furlenco.com/s3-furlenco-images/desktop_web/hulk/icons/ic-cart.svg"
              alt="img"
            />
            {cart.length !== 0 && (
              <div className={styles.cartNumber}>{cart.length}</div>
            )}
          </div>

          <div className={cx(styles.nav_item, styles.location)}>
            <img
              src="https://assets.furlenco.com/s3-furlenco-images/lenco-icons/static-icons/ic_location.svg"
              alt="img"
            />
            BENGALURU
          </div>
        </div>
      </nav>
    </>
  );
};
