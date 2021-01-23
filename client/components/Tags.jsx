import React from 'react';
import propTypes from 'prop-types';
import styles from '../styles/reviewAvgs.module.css';

const Tags = ({ tag }) => (
  <button type="button" className={styles.tag}>
    {tag}
  </button>
);

export default Tags;

Tags.defaultProps = {
  tag: '',
};

Tags.propTypes = {
  tag: propTypes.string,
};
