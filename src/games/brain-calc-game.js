import playGame from '../game-runner.js';
import { getRandomValue } from '../helpers/math-helper.js';

const gameRule = 'What is the result of the expression?';

const gameData = () => {
  const mathActions = ['+', '-', '*'];
  const randomMathAction = mathActions[getRandomValue(0, 2)];
  const firstValue = getRandomValue(0, 100);
  const secondValue = getRandomValue(0, 100);
  const gameQuestion = `${firstValue} ${randomMathAction} ${secondValue}`;
  let correctAnswer;

  switch (randomMathAction) {
    case '+':
      correctAnswer = firstValue + secondValue;
      break;

    case '-':
      correctAnswer = firstValue - secondValue;
      break;

    case '*':
      correctAnswer = firstValue * secondValue;
      break;

    default:
      return console.error('not implemented math action!');
  }

  return [gameQuestion, String(correctAnswer)];
};

export default () => playGame(gameRule, gameData);
