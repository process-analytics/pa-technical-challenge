# Technical Challenge to apply at Bonitasoft

You can find, in this repository, in different folders, the same challenge with different environments.
This challenge enables the Process Analytics team working at Bonitasoft to find a new collaborator to increase this team.

## Story

You work on a new Open Source project as a frontend developer. This project is destined to the Bingo players.

Your mission, if you accept it, is to create a new library and a demonstrator of this library to permit the Bingo players to display a new grid with random numbers, add a new token on a square, and change the background & add an interaction when a row/column is completed.

## Technical Overview
There are 2 parts:
- a new library which is a layer on top of the mxGraph
- a demonstrator of this library

### The library
#### Requirements
You can find, in the folder [library](./library), the same challenge with different environments. \
If you are more comfortable with another build/test tool, you are free to create your own environment based on existing ones with the following constraints:
- ES6+ or TypeScript (no Angular, no React, no Vue)
- MxGraph

You can use the IDE and the test tools that you want, but you need to provide the information necessary to install your project, to build & to test the library.

#### What already exists

#### What to do
- Add a new api method that generates & displays a new grid with random numbers on each square. \
  It should be called with: `<library object>.generateNewGrid(htmlContainerWhereDisplayTheGrid);` \
  The result should be something like this:
  <p align="center">
    <img title="Grid" src="images/grid.png">
  </p>
  
- Add a new api method that adds a new token on a square. \
  It should be called with: `<library object>.addNewToken(“23”);` \
  The result should be something like this:
  <p align="center">
    <img title="Token" src="images/token.png">
  </p>

- Add a new api method that updates the background color of a square, without redrawing all the grid. \
  It should be called with: `<library object>.updateBackgroundColor(“16”, “Pink”);` \
  The result should be something like this:
  <p align="center">
    <img title="Background color" src="images/background-color.png">
  </p>

- Add a new api method that adds a handler on click on square. \
  It should be called with: `<library object>.addHandler(squareLabel, (event) => {....});`
  
- Add a new api method that returns the label of the squares with no token on the same row of a specific square. \
  It should be called with: `<library object>.getLabelsWithNoTokenOnSameRow(squareLabel);` \
  The result should be something like this: `[5, 8, 3]` or `[]`

- Add a new api method that returns the label of the squares with no token on the same column of a specific square. \
  It should be called with: `<library object>.getLabelsWithNoTokenOnSameColumn(squareLabel);` \
  The result should be something like this: `[7, 2, 4]` or `[]`
  
- **Bonus**: \
  At the initialization of the library, load the MxGraph model dynamically, like done in this [example](https://jgraph.github.io/mxgraph/javascript/examples/dynamicloading.html).

#### References
- npm package of MxGraph: https://www.npmjs.com/package/mxgraph
- npm package of MxGraph type definitions: https://www.npmjs.com/package/@typed-mxgraph/typed-mxgraph
- API documentation of MxGraph: https://jgraph.github.io/mxgraph/docs/js-api/files/index-txt.html
- Examples of MxGraph: https://jgraph.github.io/mxgraph/javascript/index.html


### Demonstrator
#### Requirements
We initialize the folder [demonstrator](./demonstrator), but it's empty.

There is no specific requirement for the demonstrator. \
It can be :
- a HTML page
- a mini application
- done with StoryBook, if you are familiar with
- anything else

#### What to do
Use the previous library to demonstrate the rendering of all its functionalities.

- Display a new grid with random numbers on each square
- Add an interaction: When the user clicks on a square, a new jeton must appear on it.
- Add an interaction: When the user clicks on a square and the row is completed, the color of the background of the whole row must be changed.
- Add an interaction: When the user clicks on a square and the column is completed, the color of the background of the whole column must be changed.
  <p align="center">
    <img title="Column" src="images/column.png">
  </p>
- Add an interaction: When the user clicks on a square and the whole grid is completed, add the interaction that you want to congratulate the user.

As a member of the team, we let you decide the level of completion you think is necessary to promote the library.


✨ Please share your code via GitHub.