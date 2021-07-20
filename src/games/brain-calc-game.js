import playGame from '../game-runner.js';
import { getRandomValue } from '../helpers/math-helper.js';

const gameRule = 'What is the result of the expression?';

const getMathAction = (firstValue, secondValue, randomMathAction) => {
  switch (randomMathAction) {
    case '+':
      return firstValue + secondValue;

    case '-':
      return firstValue - secondValue;

    case '*':
      return firstValue * secondValue;

    default:
      return console.error('not implemented math action!');
  }
};

const gameData = () => {
  const mathActions = ['+', '-', '*'];
  const randomMathAction = mathActions[getRandomValue(0, 2)];
  const firstValue = getRandomValue(0, 100);
  const secondValue = getRandomValue(0, 100);
  const gameQuestion = `${firstValue} ${randomMathAction} ${secondValue}`;
  const correctAnswer = getMathAction(firstValue, secondValue, randomMathAction);

  return [gameQuestion, String(correctAnswer)];
};

export default () => playGame(gameRule, gameData);
