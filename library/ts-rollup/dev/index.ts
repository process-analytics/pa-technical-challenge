import { Bingo } from '../src';

function startBingoApp(): void {
  const container = document.getElementById('bingo-container');
  if (container) {
    new Bingo('bingo-container').initializeGrid();
  } else {
    alert('Container must be provided');
  }
}

startBingoApp();
