import getRandomNumber from './getRandomNumber.js';

export default () => {
  switch (getRandomNumber(3)) {
    case 1: {
      return '+';
    }

    case 2: {
      return '-';
    }

    default: {
      return '*';
    }
  }
};
