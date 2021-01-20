import React from 'react';
import moment from 'moment';

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
  let totalReviews = 0;
  if (JSON.stringify(reviews) !== '{}') {
    totalReviews = reviews.reviews.length;
  }
  const latest6 = top6(reviews);
  return (
    <div>
      {latest6.map((review) => (
        <div>
          <span>
            {review.reviewer_name}
            {' '}
            {moment(review.date).format('MMMM Do YYYY')}
          </span>
          <p>{review.review}</p>
        </div>
      ))}
      <button type="button">
        Show all
        {' '}
        {totalReviews}
        {' '}
        reviews
      </button>
    </div>
  );
};

export default LatestReviews;
