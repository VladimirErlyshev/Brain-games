import getRandomNumber from './getRandomNumber.js';

export default () => {
  const action = ['+', '-', '*'];
  return action[getRandomNumber(3)];
};
