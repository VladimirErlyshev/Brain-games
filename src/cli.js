import readlineSync from 'readline-sync';

const welcomeMessage = 'Welcome to the Brain Games!';
console.log(welcomeMessage);
const acquaintance = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
};

export default acquaintance;
