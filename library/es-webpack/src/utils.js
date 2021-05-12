// naive implementation, doesn't prevent duplicates in grid
export function getRandomInteger() {
  const min = 1;
  const max = 90;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
