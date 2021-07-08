import readlineSync from 'readline-sync';
import acquaintance from '../src/cli.js';
import getRandomNumber from '../helpers/getRandomNumber.js';
import isEven from '../helpers/isEven.js';

export default () => {
  const userName = acquaintance();
  const randomNumber = getRandomNumber();
  const tryAgainMessage = `Let's try again, ${userName}!`;
  const congratulationsMessage = `Congratulations, ${userName}!`;

  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let countRightAnswer = 0;

  for (let round = 1; round <= 3; round += 1) {
    console.log(`Question: ${randomNumber}`);
    const answer = readlineSync.question('Your answer ');

    if (
      (isEven(randomNumber) && answer === 'yes')
      || (!isEven(randomNumber) && answer === 'no')
    ) {
      console.log('Correct');
      countRightAnswer += 1;
    } else if (answer === 'yes') {
      console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
      console.log(tryAgainMessage);
      break;
    } else {
      console.log("'no' is wrong answer ;(. Correct answer was 'yes'.");
      console.log(tryAgainMessage);
      break;
    }
  }

  if (countRightAnswer === 3) {
    console.log(congratulationsMessage);
  }
};
