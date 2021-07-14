// default value is in between 0 from 100
const getRandomValue = (max = 101) => Math.floor(Math.random() * max);

const isEven = (number) => number % 2 === 0;

const getGCD = (n, m) => {
  if (m !== 0) {
    const k = n % m;
    return getGCD(m, k);
  }
  return n;
};

export { getRandomValue, isEven, getGCD };
