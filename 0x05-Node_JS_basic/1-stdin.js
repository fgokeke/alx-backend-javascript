// Import the readline module to handle input from the command line
const readline = require('readline');

// Create an interface to read lines from the standard input
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Display the welcome message
console.log('Welcome to Holberton School, what is your name?');

// Handle the input from the user
r1.on('line', (input) => {
  // Display the user's input
  console.log(`Your name is: ${input}`);

  // Close the readline interface
  rl.close();
});

// Handle the close event to display the closing message
r1.on('close', () => {
  console.log('This important software is now closing');
});
