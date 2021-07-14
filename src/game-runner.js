import readlineSync from 'readline-sync';
import { showMessage } from './helpers/messages-helper.js';

const roundsCount = 3;

const gameRunner = (gameRule, gameData) => {
  showMessage('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  showMessage(`Hello, ${userName}!`);
  showMessage(gameRule);
  for (let i = 0; i < roundsCount; i += 1) {
    const [gameQuestion, correctAnswer] = gameData();
    showMessage(`Question: ${gameQuestion}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      showMessage('Correct!');
    } else {
      showMessage(`${answer}  is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      showMessage(`Let's try again, ${userName}!`);
      return;
    }
  }

  showMessage(`Congratulations, ${userName}`);
};

export default gameRunner;
