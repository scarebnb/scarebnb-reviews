
// format api to desired structure

const format = (res) => {
  let data = {}; // formated data
  let review_ids = []; // keep track of ids (avoid duplicates)
  let currentReview = 0;

  res.forEach((v, i) => {
    // add location and name
    if (data.location_id === undefined) {
      data.location_id = v.location_id;
      data.address = v.location_name;
    }

    // init reviews array
    if (data.reviews === undefined) {
      data.reviews = [];
    }

    // if review has not been traversed create review obj and
    // add to reviews key in data obj
    if (review_ids.indexOf(v.review_id) === -1) {
      let obj = {
        review_id: v.review_id,
        reviewer_name: v.reviewer_name,
        avatar: v.avatar,
        date: v.date,
        review: v. review,
        cleanliness: v.cleanliness,
        accuracy: v.accuracy,
        comm: v.comm,
        location: v.location,
        check_in: v.check_in,
        value: v.value,
        tags: []
      }

      data.reviews.push(obj);
      review_ids.push(v.review_id);
    }

    // add corresponding tags to review
    data.reviews[currentReview].tags.push(v.tag);

    // add tags based on review id
    if (review_ids[currentReview] !== v.review_id) {
      // convert reviews to set then back to array to ignore
      // potential duplicates
      data.reviews[currentReview].tags =
        [...new Set(data.reviews[currentReview].tags)];

      currentReview++;
    }

  });

  return data;
};

module.exports = {
  format
}

// sample format
/*
  data = {
    location_id: 1
    location:  "123 street name, city,st zip ",
    reviews: [
      {
        reviewer_name: "john doe",
        avatar: "url",
        ... more stuff
        tags: [
          {tag: ""}, {tag: ""},{tag: ""}
        ]
      }
    ]
  }

 */