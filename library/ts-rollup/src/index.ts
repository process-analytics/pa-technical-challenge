import { Grid } from './grid';

export class Bingo {
  private readonly grid: Grid;

  constructor(container: string) {
    this.grid = new Grid(container);
  }

  initializeGrid(): void {
    this.grid.initializeGrid();
  }
}
