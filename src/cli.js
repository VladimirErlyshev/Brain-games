import readlineSync from 'readline-sync';

const sayWelcome = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};

export default sayWelcome;
