import React, { useContext } from 'react'
import { DataContext } from '../../../Contexts/DataContext';
import './Reviews.css';

export const Review = () => {

  const { comments } = useContext(DataContext);

  return (
    <div className='reviews'>
      <h2>Our Customers Love Our Products</h2>
      <div className='reviewContainer'>
        {comments.map((comment, index) => (
          <div key={index} className='reviewCard'>
            <div className="review-image">
              <img src={comment.image} alt="img" />
            </div>

            <div className="review-content">
              <img src="https://assets.furlenco.com/s3-furlenco-images/thorin/testimony/quote-icon.png" alt="img" />
              <p> <i>{comment.description} </i> </p>
              <p> <b>{comment.name} </b> ({comment.location})</p>
              <img src={comment.viaImg} alt="" /> {comment.via ? <span> via {comment.via} </span> : null}
            </div>
          </div>
        ))}

        {/* <div className='btn'>
            <button><img src="https://assets.furlenco.com/s3-furlenco-images/lenco-icons/interaction-icons/ic_down_white.svg" alt="button" /></button>
          </div> */}

      </div>
    </div>
  )
}
