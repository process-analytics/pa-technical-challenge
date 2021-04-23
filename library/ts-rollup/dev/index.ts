import { initializeBingo } from '../src';

function startBingoApp(): void {
  const container = document.getElementById('bingo-container');
  if (container) {
    initializeBingo(container);
  } else {
    alert('Container must be provided');
  }
}

startBingoApp();
