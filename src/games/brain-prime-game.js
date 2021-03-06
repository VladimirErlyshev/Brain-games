import playGame from '../game-runner.js';
import { getRandomValue, isPrime } from '../helpers/math-helper.js';

const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const gameData = () => {
  const gameQuestion = getRandomValue(0, 100);
  const correctAnswer = isPrime(gameQuestion) ? 'yes' : 'no';

  return [gameQuestion, correctAnswer];
};

export default () => playGame(gameRule, gameData);
