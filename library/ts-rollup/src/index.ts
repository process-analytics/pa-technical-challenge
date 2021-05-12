import { mxgraph } from './initializer';

export class Bingo {
  private graph;

  constructor(container: string) {
    this.graph = new mxgraph.mxGraph(document.getElementById(container));
  }

  initializeGrid(): void {
    // Gets the default parent for inserting new cells. This
    // is normally the first child of the root (ie. layer 0).
    const parent = this.graph.getDefaultParent();

    // Adds cells to the model in a single step
    this.graph.getModel().beginUpdate();
    try {
      this.graph.insertVertex(parent, null, 'Hello,', 500, 50, 600, 600);
    } finally {
      // Updates the display
      this.graph.getModel().endUpdate();
    }
  }
}
