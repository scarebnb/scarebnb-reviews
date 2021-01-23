/* eslint-disable import/extensions */
import React from 'react';
import styles from '../styles/reviewsModal.module.css';
import MiniReviewAvgs from './MiniReviewAvgs.jsx';
import AllReviews from './AllReviews.jsx';

const ReviewsModal = ({
  reviews, averages, tags, showAll,
}) => (
  <div className={styles.modal}>
    <div className={styles.modal_content}>
      <div className={styles.wrapper}>
        <div className={styles.closeBtn}>
          <span
            className={styles.close}
            onClick={() => showAll()}
            onKeyPress={showAll}
            role="button"
            tabIndex="0"
          >
            &times;
          </span>
        </div>
        <div className={styles.heading}>
          <h2>
            <span className={styles.star}>&#x2605;</span>
            {' '}
            {averages.overall}
            {' '}
            (
            {`${averages.totalReviews} Reviews`}
            )
          </h2>
        </div>
        <div className={styles.overview}>
          <MiniReviewAvgs averages={averages} tags={tags} />
        </div>
        <div className={styles.all_reviews}>
          <AllReviews reviews={reviews} />
        </div>
      </div>
    </div>
  </div>
);

export default ReviewsModal;
