import readlineSync from 'readline-sync';
import acquaintance from '../src/cli.js';
import getRandomNumber from '../helpers/mathHelper/getRandomNumber.js';
import isEven from '../helpers/mathHelper/isEven.js';
import showWrongAnswerMessage from '../helpers/messagesHelper/showWrongAnswerMessage.js';
import showCongratulationsMessage from '../helpers/messagesHelper/showCongratulationsMessage.js';

export default () => {
  const userName = acquaintance();
  const tryAgainMessage = `Let's try again, ${userName}!`;

  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let countRightAnswer = 0;

  for (let round = 1; round <= 3; round += 1) {
    const randomNumber = getRandomNumber();
    console.log(`Question: ${randomNumber}`);
    const answer = readlineSync.question('Your answer ');

    if (
      (isEven(randomNumber) && answer === 'yes')
      || (!isEven(randomNumber) && answer === 'no')
    ) {
      console.log('Correct');
      countRightAnswer += 1;
    } else if (isEven(randomNumber)) {
      showWrongAnswerMessage(answer, 'yes');
      console.log(tryAgainMessage);
      break;
    } else {
      showWrongAnswerMessage(answer, 'no');
      console.log(tryAgainMessage);
      break;
    }
  }

  if (countRightAnswer === 3) {
    showCongratulationsMessage(userName);
  }
};
