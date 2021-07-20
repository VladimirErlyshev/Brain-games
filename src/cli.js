import readlineSync from 'readline-sync';

const acquaintance = () => {
  const welcomeMessage = 'Welcome to the Brain Games!';
  console.log(welcomeMessage);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};

export default acquaintance;
