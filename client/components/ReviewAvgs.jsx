/* eslint-disable import/extensions */
import React from 'react';
import propTypes from 'prop-types';
import styles from '../styles/reviewAvgs.module.css';
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

  const percent = (val) => ((val / 5) * 100).toString();
  // db values ignore .0 in value and throw off balance of the force
  // function add .0 to those values
  const makeDec = (val) => {
    if (JSON.stringify(averages) !== '{}') {
      if (val.toString().indexOf('.') !== -1) {
        return val;
      }
      return `${val.toString()}.0`;
    }
    return null;
  };
  return (
    <div className={styles.avgs}>
      <div className={styles.nestedAvgs}>
        <div className={styles.fullWidth}>
          <h2>
            <span className={styles.star}>&#x2605;</span>
            {' '}
            {makeDec(overall)}
            {' '}
            (
            {`${totalReviews} Reviews`}
            )
          </h2>
        </div>
        <div className={styles.rating}>
          cleanliness
          <div className={styles.right}>
            <progress max="100" value={percent(cleanliness)} />
            {' '}
            {makeDec(cleanliness)}
          </div>
        </div>
        <div className={styles.rating}>
          accuracy
          <div className={styles.right}>
            <progress max="100" value={percent(accuracy)} />
            {' '}
            {makeDec(accuracy)}
          </div>
        </div>
        <div className={styles.rating}>
          communication
          <div className={styles.right}>
            <progress max="100" value={percent(comm)} />
            {' '}
            {makeDec(comm)}
          </div>
        </div>
        <div className={styles.rating}>
          location
          <div className={styles.right}>
            <progress max="100" value={percent(location)} />
            {' '}
            {makeDec(location)}
          </div>
        </div>
        <div className={styles.rating}>
          check-in
          <div className={styles.right}>
            <progress max="100" value={percent(checkIn)} />
            {' '}
            {makeDec(checkIn)}
          </div>
        </div>
        <div className={styles.rating}>
          value
          <div className={styles.right}>
            <progress max="100" value={percent(value)} />
            {' '}
            {makeDec(value)}
          </div>
        </div>
        <div className={styles.fullWidth}>
          <div className={styles.nestedTags}>
            {tags.map((tag, i) => (
              <Tags tag={tag} key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewAvgs;
