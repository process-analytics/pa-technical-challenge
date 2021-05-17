import './static/css/main.css';
import { Bingo } from '../src';

function startBingoApp() {
  const container = document.getElementById('bingo-container');
  if (container) {
    return new Bingo('bingo-container');
  } else {
    alert('Container must be provided');
  }
}

const bingo = startBingoApp();

// reset grid
document.getElementById('btn-new-grid').addEventListener('click', () => {
  bingo.resetGrid();
});

// update background
const updateBackground = document.getElementById('field-update-bckgd');
updateBackground.onchange = () => {
  bingo.updateBackgroundColor(updateBackground.value, 'Pink');
  updateBackground.value = ''; // reset
};

// register handler on grid
bingo.registerHandler(cell => {
  alert(`You click on square ${cell.value}`);
});
