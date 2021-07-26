import playGame from '../game-runner.js';
import { getRandomValue } from '../helpers/math-helper.js';

const gameRule = 'What number is missing in the progression?';

const generateProgressionWithHiddenElement = (
  startElement,
  progressionStep,
  missedIndex,
) => {
  let value = startElement;
  const progression = [];
  for (let i = 0; i < 10; i += 1) {
    progression.push(value);
    value += progressionStep;
  }
  progression[missedIndex] = '..';
  return progression;
};

const gameData = () => {
  const startElement = getRandomValue(0, 100);
  const progressionStep = getRandomValue(1, 10);
  const missedIndex = getRandomValue(0, 10);
  const progression = generateProgressionWithHiddenElement(
    startElement,
    progressionStep,
    missedIndex,
  );

  const correctAnswer = startElement + progressionStep * missedIndex;
  const gameQuestion = progression.join(' ');

  return [gameQuestion, String(correctAnswer)];
};

export default () => playGame(gameRule, gameData);
