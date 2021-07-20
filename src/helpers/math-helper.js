const getRandomValue = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const isEven = (number) => number % 2 === 0;

const getGCD = (n, m) => {
  if (m !== 0) {
    const k = n % m;
    return getGCD(m, k);
  }
  return n;
};

const isPrime = (number) => {
  for (let i = 2, s = Math.sqrt(number); i <= s; i += 1) {
    if (number % i === 0) return false;
  }
  return number > 1;
};

export { getRandomValue, isEven, getGCD };
export { isPrime };
