import gameRunner from '../game-runner.js';
import { isEven, getRandomValue } from '../helpers/math-helper.js';

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';

const gameData = () => {
  const gameQuestion = getRandomValue();
  const correctAnswer = isEven(gameQuestion) ? 'yes' : 'no';
  return [gameQuestion, correctAnswer];
};

export default () => gameRunner(gameRule, gameData);
