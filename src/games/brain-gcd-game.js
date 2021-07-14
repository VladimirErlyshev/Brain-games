import gameRunner from '../game-runner.js';
import { getRandomValue, getGCD } from '../helpers/math-helper.js';

const gameRule = 'Find the greatest common divisor of given numbers.';

const gameData = () => {
  const firstValue = getRandomValue();
  const secondValue = getRandomValue();
  const gameQuestion = `${firstValue} ${secondValue}`;
  const correctAnswer = getGCD(firstValue, secondValue);

  return [gameQuestion, correctAnswer];
};

export default () => gameRunner(gameRule, gameData);
