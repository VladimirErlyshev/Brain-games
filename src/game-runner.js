import readlineSync from 'readline-sync';

const roundsCount = 3;

const gameRunner = (gameRule, gameData) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gameRule);
  for (let i = 0; i < roundsCount; i += 1) {
    const [gameQuestion, correctAnswer] = gameData();
    console.log(`Question: ${gameQuestion}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== correctAnswer) {
      console.log(`${answer}  is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log('Correct!');
  console.log(`Congratulations, ${userName}!`);
};

export default gameRunner;
