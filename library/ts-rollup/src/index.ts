import { mxgraph } from './initializer';

export class Bingo {
  initializeGrid(container: HTMLElement): void {
    const graph = new mxgraph.mxGraph(container);

    // Gets the default parent for inserting new cells. This
    // is normally the first child of the root (ie. layer 0).
    const parent = graph.getDefaultParent();

    // Adds cells to the model in a single step
    graph.getModel().beginUpdate();
    try {
      const v1 = graph.insertVertex(parent, null, 'Hello,', 500, 50, 600, 600);
    } finally {
      // Updates the display
      graph.getModel().endUpdate();
    }
  }
}
