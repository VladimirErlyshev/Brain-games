const showCongratulationsMessage = (name) => {
  console.log(`Congratulations, ${name}!`);
};

const showTryAgainMessage = (name) => {
  console.log(`Let's try again, ${name}!`);
};

const showWrongAnswerMessage = (incorrectAnswer, correctAnswer) => {
  console.log(
    `${incorrectAnswer}  is wrong answer ;(. Correct answer was '${correctAnswer}'.`
  );
};

export {
  showCongratulationsMessage,
  showWrongAnswerMessage,
  showTryAgainMessage,
};
