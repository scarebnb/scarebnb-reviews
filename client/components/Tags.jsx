import React from 'react';
import propTypes from 'prop-types';

const Tags = ({ tag }) => (
  <button type="button">
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
