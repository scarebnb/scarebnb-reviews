import React from 'react';
import propTypes from 'prop-types';
import styles from '../styles/reviewAvg.module.css';

const Tags = ({ tag }) => (
  <div className={styles.column}>
    {tag}
  </div>
);

export default Tags;

Tags.defaultProps = {
  tag: '',
};

Tags.propTypes = {
  tag: propTypes.string,
};
