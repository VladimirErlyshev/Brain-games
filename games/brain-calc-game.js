import readlineSync from 'readline-sync';
import acquaintance from '../src/cli.js';
import getRandomNumber from '../helpers/mathHelper/getRandomNumber.js';
import showWrongAnswerMessage from '../helpers/messagesHelper/showWrongAnswerMessage.js';
import showCongratulationsMessage from '../helpers/messagesHelper/showCongratulationsMessage.js';
import getMathAction from '../helpers/mathHelper/getMathAction.js';

export default () => {
  const userName = acquaintance();
  console.log('What is the result of the expression?');
  for (let round = 1; round <= 3; round += 1) {
    const fistArgument = getRandomNumber();
    const secondArgument = getRandomNumber();
    const mathAction = getMathAction();
    console.log(`Question: ${fistArgument} ${mathAction} ${secondArgument}`);
    console.log(expression);
    const answer = readlineSync.question('Your answer: ');
  }
};
