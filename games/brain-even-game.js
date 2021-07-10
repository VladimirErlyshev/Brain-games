import readlineSync from 'readline-sync';
import acquaintance from '../src/cli.js';
import getRandomNumber from '../helpers/getRandomNumber.js';
import isEven from '../helpers/isEven.js';

export default () => {
  const userName = acquaintance();
  const tryAgainMessage = `Let's try again, ${userName}!`;
  const congratulationsMessage = `Congratulations, ${userName}!`;

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
      console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'.`);
      console.log(tryAgainMessage);
      break;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'.`);
      console.log(tryAgainMessage);
      break;
    }
  }

  if (countRightAnswer === 3) {
    console.log(congratulationsMessage);
  }
};
