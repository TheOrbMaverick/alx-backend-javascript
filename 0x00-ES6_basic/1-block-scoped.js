export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    let task;
    let task2;
    
    task = true;
    task2 = false;
  }

  return [task, task2];
}
