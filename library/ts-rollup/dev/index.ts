import { Bingo } from '../src';

function startBingoApp(): Bingo {
  const container = document.getElementById('bingo-container');
  if (container) {
    return new Bingo('bingo-container');
  } else {
    alert('Container must be provided');
  }
}

const bingo = startBingoApp();

document.getElementById('btn-new-grid').addEventListener('click', () => {
  bingo.initializeGrid();
});
