/* eslint-disable import/extensions */
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
            <span>☆</span>
            {' '}
            {makeDec(overall)}
            {' '}
            (
            {`${totalReviews} Reviews`}
            )
          </h2>
        </div>
        <div>
          cleanliness
          <div className={styles.right}>
            <progress max="100" value={percent(cleanliness)} />
            {' '}
            {makeDec(cleanliness)}
          </div>
        </div>
        <div>
          accuracy
          <div className={styles.right}>
            <progress max="100" value={percent(cleanliness)} />
            {' '}
            {makeDec(accuracy)}
          </div>
        </div>
        <div>
          communication
          <div className={styles.right}>
            <progress max="100" value={percent(cleanliness)} />
            {' '}
            {makeDec(comm)}
          </div>
        </div>
        <div>
          location
          <div className={styles.right}>
            <progress max="100" value={percent(cleanliness)} />
            {' '}
            {makeDec(location)}
          </div>
        </div>
        <div>
          check-in
          <div className={styles.right}>
            <progress max="100" value={percent(cleanliness)} />
            {' '}
            {makeDec(checkIn)}
          </div>
        </div>
        <div>
          value
          <div className={styles.right}>
            <progress max="100" value={percent(cleanliness)} />
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
