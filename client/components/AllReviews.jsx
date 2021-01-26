import React from 'react';
import moment from 'moment';
import styles from '../styles/allReviews.module.css';

const AllReviews = ({ reviews }) => (
  <div className={styles.wrapper}>
    <div className={styles.rightSection}>
      {reviews.map((review, i) => (
        <div className={styles.reviewWrapper} key={i}>
          <div className={styles.avatar}>
            <img
              src={review.avatar}
              className={styles.profileImg}
              alt="profile pic"
            />
          </div>
          <div className={styles.info}>
            <div className={styles.name}>
              {review.reviewer_name}
            </div>
            <div className={styles.date}>
              {moment(review.date).format('MMMM YYYY')}
            </div>
          </div>
          <p className={styles.review}>{review.review}</p>
        </div>
      ))}
    </div>
  </div>
);

export default AllReviews;
