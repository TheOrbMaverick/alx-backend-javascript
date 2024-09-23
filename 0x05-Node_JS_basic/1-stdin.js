#!/usr/bin/node

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

process.stdout.write('Welcome to Holberton School, what is your name?\n');

rl.on('line', (input) => {
  const cleanedInput = input.replace(/\r/, ''); // Remove carriage return
  process.stdout.write(`Your name is: ${cleanedInput}\r\n`);
  rl.close();
});

rl.on('close', () => {
  process.stdout.write('This important software is now closing\n');
});
