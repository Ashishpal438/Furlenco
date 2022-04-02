import React from 'react'
import Bottom from './Bottom'
import Content from './Content'
import styled from './electronics.module.css'

function Footer() {
  return (
    <div className={styled.footer_page_}>
        <Bottom/>      
        <div className={styled.footer}> 
            <div className={styled.footer_border}>
                <p>NEED HELP?</p> 
                <div className={styled.footer_help}>
                    <p>Help Centre</p>
                    <p>Chat with us</p>
                </div>    
            </div> 
            <div className={styled.footer_border}>
                <p>EXPERIENCE OUR APP ON MOBILE</p>
                <div className={styled.footer_help}>
                    <img src='https://assets.furlenco.com/s3-furlenco-images/optimus/footer/ic-google-play-hover.svg' alt='app_address' />
                    <img src='https://assets.furlenco.com/s3-furlenco-images/optimus/footer/ic-app-store-hover.svg' alt='app_address'/>
                </div>
            </div>  
            <div>
                <p>FOLLOW US ON</p>  
                <div>
                    <img src='https://assets.furlenco.com/s3-furlenco-images/optimus/footer/facebook-hover.svg' alt='social_media' />
                    <img src='https://assets.furlenco.com/s3-furlenco-images/optimus/footer/twitter-hover.svg' alt='social_media' />  
                    <img src='https://assets.furlenco.com/s3-furlenco-images/optimus/footer/linkedin-hover.svg' alt='social_media' />  
                    <img src='https://assets.furlenco.com/s3-furlenco-images/optimus/footer/instagram-hover.svg' alt='social_media' />  
                    <img src='https://assets.furlenco.com/s3-furlenco-images/optimus/footer/youtube-hover.svg' alt='social_media'/>  
                </div>  
            </div>  
        </div>  
        <Content/>  
        <div className={styled.copy_write_section} >
          <img src='https://assets.furlenco.com/s3-furlenco-images/optimus/footer/footer-illustration.svg' alt='footer' />
        </div> 
        <p>Copyright © 2022 Kieraya Furnishing Solutions Pvt. Ltd.</p>  
    </div>
  )
}

export default Footer