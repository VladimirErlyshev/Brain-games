const getRandomValue = (range = 101) => Math.floor(Math.random() * range);

const isEven = (number) => number % 2 === 0;

export { getRandomValue, isEven };
