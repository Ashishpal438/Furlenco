import React from 'react'
import { Showcase } from './Showcase/Showcase'
import styles from './Home.module.css'
import { useState } from 'react'
import { useContext } from 'react'
import { DataContext } from '../../Contexts/DataContext'
import { BuildYourOwn } from './BuildYourOwn'
import { useNavigate } from 'react-router-dom'
import { AwesomeFurniture } from './Awesome/AwesomeFurniture'
import { Link } from 'react-router-dom'

export const Home = () => {

  const navigate = useNavigate()

  const { products, collections } = useContext(DataContext)
  const [data, setData] = useState([...products])

  const handleData = (query, index) => {
    const allActiveClasses = document.querySelectorAll('.active')
    console.log(allActiveClasses);
    for (let i = 0; i < allActiveClasses.length; i++) {
      allActiveClasses[i].style = 'border-bottom: 2px solid #fff'
    }
    allActiveClasses[index].style = 'border-bottom: 2px solid #FFCD32'

    if (query === null) {
      setData([])
    }
    else {
      setData(query)
    }
  }

  return (
    <>
      <Showcase />
      <div className={styles.productContainer}>
        <div onClick={() => handleData(products, 0)} className='active'>PRODUCTS</div>
        <div onClick={() => handleData(collections, 1)} className='active' >COLLECTIONS</div>
        <div onClick={() => handleData(null, 2)} className='active'> BUILD YOUR OWN</div>
      </div>

      {/* display products in a single row */}
      <div className={styles.productRow}>
        {
          data.length === 0 ? <div> <BuildYourOwn /> </div> :
            data.map(product => {
              return (
                <div className={styles.product} onClick={() => navigate('/item')} >
                  <img src={product.image} alt="product" />
                  <div className={styles.productTitle}>{product.title}</div>
                  {/* display new launch or not */}
                  {
                    product.newlaunch ? <div className={styles.newLaunch}>NEW LAUNCH</div> : null
                  }
                </div>
              )
            })
        }
      </div>

      <div className={styles.bannerContainer}>
        <span>Rent Furniture & Appliances in Bengaluru</span>
        <img src="https://assets.furlenco.com/image/upload/dpr_1.0,f_auto,q_auto/v1/s3-furlenco-images/optimus/home/3645x550_AFDS_banner_2022.jpeg" alt="img" />
      </div>



      <div className={styles.rentContainer}>
        <span>WHY YOU SHOULD RENT!</span>
        <div className={styles.cardContainer}>
          <div>
            <img src="https://assets.furlenco.com/image/upload/dpr_1.0,f_auto,q_auto/v1/s3-furlenco-images/common/why_rent_1.jpg" alt="img" />
            <h2>LIVE BETTER NOW</h2>
            <p>With our award-winning furniture, create your dream home today. Without waiting for that elusive tomorrow.
            </p>
            <Link to='/item'>EXPLORE PRODUCTS</Link>
          </div>

          <div>
            <img src="https://assets.furlenco.com/image/upload/dpr_1.0,f_auto,q_auto/v1/s3-furlenco-images/common/why_rent_2.jpg" alt="img" />
            <h2>HAVE EVERYTHING, WITHOUT BUYING</h2>
            <p>Bed or sofa? It’s not a choice anymore. With our wallet-friendly packages, you can have that perfect home at a fraction of the cost and effort.</p>
            <Link to='/item'>EXPLORE PRODUCTS</Link>
          </div>

          <div>
            <img src="https://assets.furlenco.com/image/upload/dpr_1.0,f_auto,q_auto/v1/s3-furlenco-images/common/why_rent_3.jpg" alt="img" />
            <h2>CHANGE, AS YOUR NEEDS EVOLVE</h2>
            <p>Keep things flexible and change your furniture as your needs change.</p>
            <Link to='/item'>EXPLORE PRODUCTS</Link>
          </div>

        </div>

      </div>


      <AwesomeFurniture />
    </>
  )
}