import React from 'react';
import propTypes from 'prop-types';

const Tags = ({ tag }) => (
  <div>
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
