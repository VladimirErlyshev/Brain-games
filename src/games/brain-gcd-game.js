import playGame from '../game-runner.js';
import { getRandomValue, getGCD } from '../helpers/math-helper.js';

const gameRule = 'Find the greatest common divisor of given numbers.';

const gameData = () => {
  const firstValue = getRandomValue(0, 100);
  const secondValue = getRandomValue(0, 100);
  const gameQuestion = `${firstValue} ${secondValue}`;
  const correctAnswer = getGCD(firstValue, secondValue);

  return [gameQuestion, String(correctAnswer)];
};

export default () => playGame(gameRule, gameData);
