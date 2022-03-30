import React from 'react'
import { Showcase } from './Showcase/Showcase'
import styles from './Home.module.css'
import { useState, useEffect } from 'react'
import { useContext } from 'react'
import { DataContext } from '../../Contexts/DataContext'
import { BuildYourOwn } from './BuildYourOwn'

export const Home = () => {


  const {products,collections} = useContext(DataContext)
  const [data,setData] =  useState([])

  useEffect(() => {
    setData(products)
  }, [])



  const handleData = (query,index) => {
    const allActiveClasses = document.querySelectorAll('.active')
    console.log(allActiveClasses);
    for(let i=0;i<allActiveClasses.length;i++){
      allActiveClasses[i].style = 'border-bottom: 2px solid #fff'
    }
    allActiveClasses[index].style = 'border-bottom: 2px solid #FFCD32'

    if(query === null){
      setData([])
    }
    else{
      setData(query)
    }
  }

  return (
    <>
      <Showcase/>
      <div className={styles.productContainer}>
          <div onClick={() => handleData(products,0)}  className='active'>PRODUCTS</div>
          <div onClick={() => handleData(collections,1)}  className='active' >COLLECTIONS</div>
          <div onClick={() => handleData(null,2)}  className='active'> BUILD YOUR OWN</div>
      </div>
     
     {/* display products in a single row */}
      <div className={styles.productRow}>
        {
          data.length=== 0 ? <div> <BuildYourOwn/> </div> :
          data.map(product => {
            return (  
              <div className={styles.product}>
                <img src={product.image} alt="product"/>
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
    </>
  )
}