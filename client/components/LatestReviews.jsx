import React from 'react';
import moment from 'moment';
import styles from '../styles/latestReviews.module.css';

const LatestReviews = ({ reviews }) => {
  const top6 = (revs) => {
    // avoid empty obj before mounting
    if (JSON.stringify(revs) !== '{}') {
      const latest = [...revs.reviews];

      latest.sort((a, b) => new Date(b.date) - new Date(a.date));
      return latest.slice(0, 6);
    }
    return [];
  };

  const latest6 = top6(reviews);
  return (
    <div className={styles.wrapper}>
      {latest6.map((review, i) => (
        <div className={styles.reviewWrapper} key={i}>
          <div className={styles.avatar}>
            <img src={review.avatar} alt="profile pic" />
          </div>
          <div className={styles.info}>
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
  );
};

export default LatestReviews;
