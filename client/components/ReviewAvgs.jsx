import React from 'react';
import propTypes from 'prop-types';
import styles from '../styles/reviewAvg.module.css';
import Tags from './Tags.jsx';

const ReviewAvgs = ({ averages, tags }) => {
  const {
    overall,
    totalReviews,
    cleanliness,
    accuracy,
    comm,
    location,
    checkIn,
    value,
  } = averages;
  return (
    <div className={styles.spacing}>
      <div className={styles.header}>
        <span className={styles.star}>☆</span>
        {' '}
        {overall}
        {' '}
        (
        {`${totalReviews} Reviews`}
        )
      </div>
      <div className={styles.row}>
        <div className={styles.column}>
          <div className={styles.row}>
            <div className={styles.column}>
              cleanliness
            </div>
            <div className={styles.column}>
              {cleanliness}
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.column}>
              accuracy
            </div>
            <div className={styles.column}>
              {accuracy}
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.column}>
              communication
            </div>
            <div className={styles.column}>
              {comm}
            </div>
          </div>
        </div>
        <div className={styles.column}>
          <div className={styles.row}>
            <div className={styles.column}>
              location
            </div>
            <div className={styles.column}>
              {location}
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.column}>
              Check-in
            </div>
            <div className={styles.column}>
              {checkIn}
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.column}>
              value
            </div>
            <div className={styles.column}>
              {value}
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.row} ${styles.spacing}`}>
        {tags.map((tag, i) => (
          <Tags tag={tag} key={i} />
        ))}
      </div>
    </div>
  );
};

export default ReviewAvgs;
