#!/usr/bin/node

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false, // This will help control the output formatting
});

process.stdout.write('Welcome to Holberton School, what is your name?\n');

rl.on('line', (input) => {
  process.stdout.write(`Your name is: ${input}\r\n`);
  rl.close();
});

rl.on('close', () => {
  process.stdout.write('This important software is now closing\r\n');
});
