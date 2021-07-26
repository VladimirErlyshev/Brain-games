import playGame from '../game-runner.js';
import { getRandomValue } from '../helpers/math-helper.js';

const gameRule = 'What number is missing in the progression?';

const generateProgression = (startElement, progressionStep, hiddenIndex) => {
  let value = startElement;
  const progression = [];
  for (let i = 0; i < 10; i += 1) {
    progression.push(value);
    value += progressionStep;
  }
  progression[hiddenIndex] = '..';
  return progression;
};

const gameData = () => {
  const startElement = getRandomValue(0, 100);
  const progressionStep = getRandomValue(1, 10);
  const hiddenIndex = getRandomValue(0, 10);
  const progression = generateProgression(startElement, progressionStep, hiddenIndex);
  const correctAnswer = startElement + progressionStep * hiddenIndex;
  const gameQuestion = progression.join(' ');

  return [gameQuestion, String(correctAnswer)];
};

export default () => playGame(gameRule, gameData);
