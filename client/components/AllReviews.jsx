/* eslint-disable import/extensions */
import React from 'react';
import moment from 'moment';
import styles from '../styles/allReviews.module.css';
import MiniReviewAvgs from './MiniReviewAvgs.jsx';

const AllReviews = ({ reviews, averages, tags }) => (
  <div className={styles.wrapper}>
    <MiniReviewAvgs averages={averages} tags={tags} />
    <div className={styles.reviews}>
      <div className={styles.nestedReviews}>
        {reviews.reviews.map((review, i) => (
          <div className={styles.reviewsWrapper} key={i}>
            <div className={styles.avatar}>
              <img src={review.avatar} alt="profile pic" />
            </div>
            <div className={styles.nameAndDate}>
              <div>
                {review.reviewer_name}
              </div>
              <div>
                {moment(review.date).format('MMMM Do YYYY')}
              </div>
            </div>
            <p className={styles.review}>{review.review}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default AllReviews;
