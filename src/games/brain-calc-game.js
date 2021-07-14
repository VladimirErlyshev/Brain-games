import gameRunner from '../game-runner.js';
import { getRandomValue } from '../helpers/math-helper.js';

const gameRule = 'What is the result of the expression?';

const gameData = () => {
  const mathActions = ['+', '-', '*'];
  const randomMathAction = mathActions[getRandomValue(3)];
  const firstValue = getRandomValue();
  const secondValue = getRandomValue();
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

export default () => gameRunner(gameRule, gameData);
