const getRand = (min, max) =>  {
  return Math.floor(
      Math.random() * (max - min) + min);
}

const tagGenerator = () => {
  tagSelection = ['Reponsive host', 'Romfortable bends', 'Easy check-in',
    'Great location', 'Great restaurants', 'Great views', 'Helpful host',
    'Thoughful touches', 'Friendly host', 'A guiet neighborhood'];

    return tagSelection[getRand(1, tagSelection.length)];
}

module.exports = {
  getRand,
  tagGenerator
}