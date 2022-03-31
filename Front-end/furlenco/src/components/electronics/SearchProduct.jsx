import React from 'react'
import styled from "./electronics.module.css";

function SearchProduct() {
  return (
    <div>
        <img
        className={styled.item_nav_img}
        src="https://assets.furlenco.com/image/upload/dpr_1.0,f_auto,q_auto/v1/s3-furlenco-images/unlmtd/desktop/banners/unlmtd_plp_banner_v4.jpg"
        alt="heder_img"
      />
      <div className={styled.item_nav_wrapper}>
        <h4>LIVING ROOM</h4>
        <div className={styled.item_nav_serching_click}> 
        <div className={styled.item_nav_img_and_p}> 
        <img
          src="https://d26iwjla857pn6.cloudfront.net/hulk/plp-subcategories/living_room/ic_1_sofa.svg"
          alt="fixed_lap_logo"
        />
        <p>Sofa</p>
        </div>
        <div className={styled.item_nav_img_and_p}> 
        <img
          src="https://d26iwjla857pn6.cloudfront.net/hulk/plp-subcategories/living_room/ic_2_sofa_sets.svg"
          alt="fixed_lap_logo"
        />
        <p>Sofa Sets</p>
        </div>   
        <div className={styled.item_nav_img_and_p}>
        <img
          src="https://d26iwjla857pn6.cloudfront.net/hulk/plp-subcategories/living_room/ic_1_recliner.svg"
          alt="fixed_lap_logo"
        /> 
        <p>Recliner</p>              
        </div> 
        <div className={styled.item_nav_img_and_p}>            
        <img
          src="https://d26iwjla857pn6.cloudfront.net/hulk/plp-subcategories/living_room/ic_2_multifunctional.svg"
          alt="fixed_lap_logo"
        />
        <p>Multifunctional</p>
        </div>  
        <div className={styled.item_nav_img_and_p}> 
        <img
          src="https://d26iwjla857pn6.cloudfront.net/hulk/plp-subcategories/living_room/ic_1_deals_and_combos.svg"
          alt="fixed_lap_logo"
        />      
        <p>Deals & Combos</p>
        </div>  
        </div>               
      </div>
    </div>
  )
}

export default SearchProduct