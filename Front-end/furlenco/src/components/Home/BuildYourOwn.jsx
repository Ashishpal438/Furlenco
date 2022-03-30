import React from 'react'
import styles from './BuildYourOwn.module.css'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export const BuildYourOwn = () => {
    return (
        <div className={styles.container}>
            <div className={styles.description}>
                Unleash the designer in you and create a package that suits your needs.
            </div>

            <div className={styles.select}>
                <div className={styles.selectItem}>
                    <div className={styles.imageContainer}>
                        <img src="https://www.svgrepo.com/show/205444/bed.svg" alt="img" />
                    </div>
                    <div>
                        Choose a soft furniture
                    </div>
                </div>

                <div className={styles.icon}>
                <ArrowForwardIosIcon/>
                </div>

                <div className={styles.selectItem}>
                    <div className={styles.imageContainer}>
                        <img src="https://www.svgrepo.com/show/287638/pillow.svg" alt="img" />
                    </div>
                    <div>Add soft-furninshings</div>
                </div>

                <div className={styles.icon}>
                <ArrowForwardIosIcon/>
                </div>

                <div className={styles.selectItem}>
                    <div className={styles.imageContainer}>
                        <img src="https://www.svgrepo.com/show/217052/oven.svg" alt="img" />
                    </div>
                    <div>Select Applainces</div>
                </div>
            </div>
            <button>Get Started</button>
        </div>
    )
}
