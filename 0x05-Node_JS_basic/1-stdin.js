process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdout.on('line', (input) => {
  process.stdout.write(`Your name is: ${input}`);
});

process.stdout.on('close', () => {
  process.stdout.write('This important software is now closing\n');
});
