import gameRunner from '../game-runner.js';
import { getRandomValue } from '../helpers/math-helper.js';

const gameRule = 'What number is missing in the progression?';

const gameData = () => {
  let value = getRandomValue(0, 100);
  const progressionStep = getRandomValue(1, 10);
  const progression = [];
  for (let i = 0; i < 10; i += 1) {
    progression.push(value);
    value += progressionStep;
  }
  const hiddenIndex = getRandomValue(0, progression.length);
  const correctAnswer = progression[hiddenIndex];
  progression[hiddenIndex] = '..';
  const gameQuestion = progression.join(' ');

  return [gameQuestion, String(correctAnswer)];
};

export default () => gameRunner(gameRule, gameData);
