/* eslint-disable import/extensions */
import React from 'react';
import ReviewAvgs from './ReviewAvgs.jsx';
import LatestReviews from './LatestReviews.jsx';
import styles from '../styles/app.module.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: {},
      averages: {},
    };
  }

  componentDidMount() {
    const getRand = (min, max) => Math.floor(Math.random() * (max - min) + min);

    fetch(`reviews/${getRand(1, 100)}`)
      .then((res) => res.json())
      .then((data) => {
        const avg = this.averages(data);
        this.setState({
          reviews: data,
          averages: avg,
        });
      })
      .catch((err) => console.error(err));
  }

  // eslint-disable-next-line class-methods-use-this
  averages(data) {
    const allReviews = data.reviews;
    const totalReviewsCount = allReviews.length;

    const value = {
      cleanliness: 0,
      accuracy: 0,
      comm: 0,
      location: 0,
      checkIn: 0,
      value: 0,
    };

    allReviews.forEach((review) => {
      value.cleanliness += review.cleanliness;
      value.accuracy += review.accuracy;
      value.comm += review.comm;
      value.location += review.location;
      value.checkIn += review.check_in;
      value.value += review.value;
    });

    value.cleanliness /= totalReviewsCount;
    value.accuracy /= totalReviewsCount;
    value.comm /= totalReviewsCount;
    value.location /= totalReviewsCount;
    value.checkIn /= totalReviewsCount;
    value.value /= totalReviewsCount;

    const round = (num, dec) => Math.round(num * dec) / dec;
    let overall = 0;
    Object.entries(value).forEach((val) => {
      value[val[0]] = round(val[1], 10);
      overall += val[1];
    });

    value.overall = round(overall / 6, 100);
    value.totalReviews = totalReviewsCount;

    return value;
  }

  render() {
    const { averages } = this.state;
    return (
      <div>
        <ReviewAvgs averages={averages} />
        <LatestReviews />
      </div>
    );
  }
}

export default App;
