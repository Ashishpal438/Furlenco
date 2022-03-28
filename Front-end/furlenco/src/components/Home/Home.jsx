import React from 'react'
import { Showcase } from './Showcase/Showcase'
import styles from './Home.module.css'

export const Home = () => {
  return (
    <>
      <Showcase/>
      <div className={styles.productContainer}>
          <div>PRODUCTS</div>
          <div>COLLECTIONS</div>
          <div>BUILD YOUR OWN</div>
      </div>
    </>
  )
}
