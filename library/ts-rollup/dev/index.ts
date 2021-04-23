import { Bingo } from '../src';

function startBingoApp(): void {
  const container = document.getElementById('bingo-container');
  if (container) {
    new Bingo().initializeGrid(container);
  } else {
    alert('Container must be provided');
  }
}

startBingoApp();
