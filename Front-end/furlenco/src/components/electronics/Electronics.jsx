import { Style } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { Card } from "./Card";
import styled from "./electronics.module.css";

export function Electronics() {
  const [data, setdata] = useState([]);

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
