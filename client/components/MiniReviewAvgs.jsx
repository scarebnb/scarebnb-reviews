/* eslint-disable import/extensions */
import React from 'react';
import propTypes from 'prop-types';
import styles from '../styles/miniReviewAvgs.module.css';
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
    <div className={styles.miniReviewAvgs}>
      <div>
        <h2>
          <span>☆</span>
          {' '}
          {overall}
          {' '}
          (
          {`${totalReviews} Reviews`}
          )
        </h2>
      </div>
      <div>
        cleanliness
        {' '}
        {cleanliness}
      </div>
      <div>
        accuracy
        {' '}
        {accuracy}
      </div>
      <div>
        communication
        {' '}
        {comm}
      </div>
      <div>
        location
        {' '}
        {location}
      </div>
      <div>
        Check-in
        {' '}
        {checkIn}
      </div>
      <div>
        value
        {' '}
        {value}
      </div>
      <div className={styles.wrapperWidth}>
        <div className={styles.nestedTags}>
          {tags.map((tag, i) => (
            <Tags tag={tag} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewAvgs;
