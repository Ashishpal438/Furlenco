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