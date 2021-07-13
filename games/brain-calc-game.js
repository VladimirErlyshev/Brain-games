import readlineSync from 'readline-sync';
import acquaintance from '../src/cli.js';
import getRandomNumber from '../helpers/mathHelper/getRandomNumber.js';
import showWrongAnswerMessage from '../helpers/messagesHelper/showWrongAnswerMessage.js';
import showCongratulationsMessage from '../helpers/messagesHelper/showCongratulationsMessage.js';
import getRandomMathAction from '../helpers/mathHelper/getRandomMathAction.js';
import showTryAgainMessage from '../helpers/messagesHelper/showTryAgainMessage.js';

export default () => {
  const userName = acquaintance();
  let countRightAnswer = 0;
  console.log('What is the result of the expression?');
  for (let round = 1; round <= 3; round += 1) {
    const fistArgument = getRandomNumber();
    const secondArgument = getRandomNumber();
    const mathAction = getRandomMathAction();
    let expression;

    switch (mathAction) {
      case '+':
        expression = fistArgument + secondArgument;
        break;
      case '-':
        expression = fistArgument - secondArgument;
        break;
      case '*':
        expression = fistArgument * secondArgument;
        break;
      default:
        expression = null;
        break;
    }

    console.log(`Question: ${fistArgument} ${mathAction} ${secondArgument}`);
    const answer = readlineSync.question('Your answer: ');
    if (+answer === expression) {
      console.log('Correct');
      countRightAnswer += 1;
    } else {
      showWrongAnswerMessage(answer, expression);
      showTryAgainMessage(userName);
      break;
    }
  }

  if (countRightAnswer === 3) {
    showCongratulationsMessage(userName);
  }
};
