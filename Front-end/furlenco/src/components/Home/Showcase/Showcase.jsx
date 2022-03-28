import React from 'react'
import "antd/dist/antd.css";
import { Carousel } from "antd";
import styles from './Showcase.module.css';

const contentStyle = {
  height: "340px",
  width: "100%",
};

export const Showcase = () => {
    return (
        <div className={styles.showcase}>
            <div className={styles.leftContainer} >
                <Carousel autoplay>
                    <div>
                        <img
                            src="https://assets.furlenco.com/image/upload/dpr_1.0,f_auto,q_auto/v1/s3-furlenco-images/optimus/home/upfront-super-saver-banner_new.jpg"
                            alt="img"
                            style={contentStyle}
                        />
                    </div>
                    <div>
                        <img
                            src="https://assets.furlenco.com/image/upload/dpr_1.0,f_auto,q_auto/v1/s3-furlenco-images/optimus/home/2220x1110_nocostemi_new_homepagebanner.jpg"
                            alt="img"
                            style={contentStyle}
                        />
                    </div>
                    <div>
                        <img
                            src="https://assets.furlenco.com/image/upload/dpr_1.0,f_auto,q_auto/v1/s3-furlenco-images/optimus/home/2220x1110_living_room_banner.jpeg"
                            alt="img"
                            style={contentStyle}
                        />
                    </div>
                </Carousel>
            </div>

            <div className={styles.rightContainer}>
                <img src="https://assets.furlenco.com/image/upload/dpr_1.0,f_auto,q_auto/v1/s3-furlenco-images/optimus/home/Desktop-1_v2.png" alt="img" />
            </div>
        </div>
    )
}
