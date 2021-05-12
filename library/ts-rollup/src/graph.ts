import { mxgraph } from './initializer';

export class BingoGraph extends mxgraph.mxGraph {
  constructor(container: HTMLElement) {
    super(container);
    this.configure();
    this.generateWelcomeGrid();
  }

  private configure(): void {
    this.setCellsLocked(true);
    this.setCellsSelectable(false);

    // taken from bpmn-visualization
    // Disable folding for container mxCell (pool, lane, sub process, call activity) because we don't need it.
    // This also prevents requesting unavailable images (see #185) as we don't override BpmnMxGraph folding default images.
    // like http 404 http://localhost:8080/images/expanded.gif (mxgraph default)
    this.foldingEnabled = false;

    const defaultVertexStyle = this.getStylesheet().getDefaultVertexStyle();
    // defaultVertexStyle[mxgraph.mxConstants.STYLE_FONTFAMILY] = '';
    defaultVertexStyle[mxgraph.mxConstants.STYLE_FONTSIZE] = 15;
    defaultVertexStyle[mxgraph.mxConstants.STYLE_FONTCOLOR] = 'MidnightBlue';
    defaultVertexStyle[mxgraph.mxConstants.STYLE_FILLCOLOR] = 'White';
    defaultVertexStyle[mxgraph.mxConstants.STYLE_STROKECOLOR] = 'Black';
  }

  private generateWelcomeGrid(): void {
    // Gets the default parent for inserting new cells.
    // This is normally the first child of the root (ie. layer 0).
    const parent = this.getDefaultParent();

    // Adds cell to the model in a single step
    this.getModel().beginUpdate();
    try {
      this.insertVertex(
        parent,
        null,
        'Welcome to the BINGO!',
        0,
        0,
        this.container.clientWidth,
        this.container.clientHeight,
        'strokeOpacity=0',
      );
    } finally {
      // Updates the display
      this.getModel().endUpdate();
    }
  }
}
