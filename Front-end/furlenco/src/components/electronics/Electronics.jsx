<<<<<<< HEAD
import React, { useEffect, useState } from 'react'
import styled from './electronics.module.css'

function Electronics() {
  const [data, setdata] = useState([]);
    
  useEffect(() => {
    fetch(`http://localhost:3000/items`)
      .then((r) => r.json())
      .then((d) => setdata(d))
      .catch((e) => console.log(e));
  }, [])

  return (
    <>
    <img className={styled.item_nav_img} src='https://assets.furlenco.com/image/upload/dpr_1.0,f_auto,q_auto/v1/s3-furlenco-images/unlmtd/desktop/banners/unlmtd_plp_banner_v4.jpg' alt='heder_img' />  
    <div className={styled.item_nav_wrapper}>
        <h4>ELECTRONICS</h4>
        <img src='https://d26iwjla857pn6.cloudfront.net/hulk/plp-subcategories/electronics/ic-laptops-new.svg' alt='fixed_lap_logo' />
        <p>Laptops</p>
    </div>  
    <div className={styled.item}>
      {
        data.map((e) => {
          return <div key={e.id} className={styled.data_border}>
            <img src={e.lazy_src} alt="icons" />
            <p>{e.tile_main_heading}</p>
            <p>{e.padding_l_s}</p>
            <div className={styled.p_bottom_content}>
              <p>{e.rental}</p>
              <p>{e.benefit_amount}</p>
            </div>
          </div>  
        })
      }
      </div>
    </>  
  )
}
export default Electronics
=======
import { Style } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { Card } from "./Card";
import styled from "./electronics.module.css";
var ob = [
  {
    name: "The Lounger",
    basic_img:
      "https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/exjjCsgJ_mobile_New-Recliner-Basic-Mobile.jpg",
    value_img:
      "https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/H29VSALE_mobile_New-Recliner-Value-Mobile.jpg",
    prime_img:
      "https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/Tya92x75_mobile_Mobile__7_.jpg",
    basic_item: [
      "https://d26iwjla857pn6.cloudfront.net/uploads/production/furniture_item/48/1440w_d46ed351.jpg",
    ],
    value_item: [
      "https://d26iwjla857pn6.cloudfront.net/uploads/production/furniture_item/173/1440w_03bafca7.jpg",
      "https://d26iwjla857pn6.cloudfront.net/uploads/production/furniture_item/48/1440w_d46ed351.jpg",
    ],
    prime_item: [
      "https://d26iwjla857pn6.cloudfront.net/uploads/production/soft_furnishing_bundle/837/1440w_cd991af9.jpg",
      "https://d26iwjla857pn6.cloudfront.net/uploads/production/furniture_item/173/1440w_03bafca7.jpg",
      "https://d26iwjla857pn6.cloudfront.net/uploads/production/furniture_item/48/1440w_d46ed351.jpg",
    ],
    price: 2299,
    off: 60,
    discounted_price: 920,
  },
];
export function Electronics() {
  const [data, setdata] = useState([...ob]);

  useEffect(() => {
    fetch(`http://localhost:8000/items`)
      .then((r) => r.json())
      .then((d) => setdata([...d]))
      .catch((e) => console.log(e));
  }, []);

  return (
    <>
      <img
        className={styled.item_nav_img}
        src="https://assets.furlenco.com/image/upload/dpr_1.0,f_auto,q_auto/v1/s3-furlenco-images/unlmtd/desktop/banners/unlmtd_plp_banner_v4.jpg"
        alt="heder_img"
      />
      <div className={styled.item_nav_wrapper}>
        <h4>ELECTRONICS</h4>
        <img
          src="https://d26iwjla857pn6.cloudfront.net/hulk/plp-subcategories/electronics/ic-laptops-new.svg"
          alt="fixed_lap_logo"
        />
        <p>Laptops</p>
      </div>

      <div className={styled.container_}>
        {data.map((e, index) => (
          <Card key={index} ob={e} />
        ))}
      </div>
    </>
  );
}
>>>>>>> 5580690e896bc7bdc45eecaad6ecfc8082ed1c0f
