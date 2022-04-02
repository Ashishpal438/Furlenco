import React from 'react'
import './AwesomeFurniture.css'

export const Spotlight = () => {
    return (
        <div className='showContainer'>
            <div className='showContainerLeft'>
                <iframe width="650" height="360" src="https://www.youtube.com/embed/T4n9CKOieb0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>

            <div className='showContainerright'>
                <h2>FLOAT</h2>
                <p>Furlenco's own invention, the Float is the most stunning recliner in the market. Polyfill, sandwiched between two layers of high-quality foam, ensures once you sit on this, you will float away! A smooth 180 degree recline is backed by a high-end international mechanism and sturdy wooden legs which add character to this gorgeous addition to your home.</p>
                <button>Explore Products</button>
            </div>
        </div>
    )
}
