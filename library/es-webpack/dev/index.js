import './static/css/main.css';
import { Bingo } from '../src';

function startBingoApp() {
  const container = document.getElementById('bingo-container');
  if (container) {
    new Bingo().initializeGrid(container);
  } else {
    alert('Container must be provided');
  }
}

startBingoApp();
