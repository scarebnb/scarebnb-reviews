const getRand = (min, max) => Math.floor(Math.random() * (max - min) + min);

const tagGenerator = () => {
  const tagSelection = ['Responsive host', 'Comfortable beds', 'Easy check-in',
    'Great location', 'Great restaurants', 'Great views', 'Helpful host',
    'Thoughtful touches', 'Friendly host', 'A quiet neighborhood'];

  return tagSelection[getRand(1, tagSelection.length)];
};

module.exports = {
  getRand,
  tagGenerator,
};
