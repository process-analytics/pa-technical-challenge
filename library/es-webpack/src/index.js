import { Grid } from './grid';

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

export class Bingo {
  constructor(container) {
    this.grid = new Grid(container);
  }

  resetGrid() {
    this.grid.resetGrid();
  }
}
