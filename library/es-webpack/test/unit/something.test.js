import { Bingo } from '../../src';

let bingo;

beforeEach(() => {
  bingo = new Bingo('containerId');
});

// TODO Use as template for your unit test
describe('test something', () => {
  it('should reset the grid when...', () => {
    bingo.resetGrid();

    expect(0).toEqual(0);
  });
});
