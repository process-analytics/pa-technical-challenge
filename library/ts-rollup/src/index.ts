import { BingoGraph } from './graph';

const titleHeight = 70;

const columnWidth = 130;
const rowHeight = 100;
const columnNumber = 5;
const rowNumber = 5;

export class Bingo {
  private readonly graph: BingoGraph;

  constructor(container: string) {
    this.graph = new BingoGraph(document.getElementById(container));
  }

  resetGrid(): void {
    // Clear the whole grid for a full reset
    this.graph.getModel().clear();

    const width = columnWidth * columnNumber;
    const height = rowHeight * rowNumber + titleHeight;

    // Adds cells to the model in a single step
    this.graph.getModel().beginUpdate();
    try {
      // use mxgraph parent/child to easily manage coordinates of square relatively to the grid origin (top left corner)
      const grid = this.graph.insertVertex(
        this.graph.getDefaultParent(),
        null,
        null,
        500,
        50,
        width,
        height,
      );

      // display the title on first row
      const title = 'BINGO';
      for (let columnsCount = 0; columnsCount < columnNumber; columnsCount++) {
        const label = title.charAt(columnsCount);
        this.graph.insertVertex(
          grid,
          null,
          label,
          columnsCount * columnWidth,
          0,
          columnWidth,
          titleHeight,
          'fontColor=Snow;fontSize=36;fillColor=SlateGray',
        );
      }

      // display the rest of the grid with numbers
      for (let rowsCount = 0; rowsCount < rowNumber; rowsCount++) {
        for (
          let columnsCount = 0;
          columnsCount < columnNumber;
          columnsCount++
        ) {
          this.graph.insertVertex(
            grid,
            null,
            `${getRandomInteger()}`,
            columnsCount * columnWidth,
            (rowsCount + 1) * rowHeight - (rowHeight - titleHeight),
            columnWidth,
            rowHeight,
          );
        }
      }
    } finally {
      // Updates the display
      this.graph.getModel().endUpdate();
    }
  }
}

// naive implementation, doesn't prevent duplicates in grid
export function getRandomInteger(): number {
  const min = 1;
  const max = 90;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
