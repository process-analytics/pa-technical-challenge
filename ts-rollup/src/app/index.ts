import {initializeBingo} from '../lib';

export function startBingoApp() {
  const container = document.getElementById('bingo-container');
  if (container) {
    initializeBingo(container);
  } else {
    alert('Container must be provided');
  }
}
