import playGame from '../game-runner.js';
import { isEven, getRandomValue } from '../helpers/math-helper.js';

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';

const gameData = () => {
  const gameQuestion = getRandomValue(0, 100);
  const correctAnswer = isEven(gameQuestion) ? 'yes' : 'no';
  return [gameQuestion, correctAnswer];
};

export default () => playGame(gameRule, gameData);
