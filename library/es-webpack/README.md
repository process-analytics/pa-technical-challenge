# Environment with vanilla Javascript and Webpack

## ♻️ Usage

The production bundle is available in (./dist/main.bundle.js).

### Initialize the library
```javascript
    import { Bingo } from 'main.bundle.js';
    
    // Initialize bingo-generator
    // 'bingo-container' is the id of the HTMLElement that renders the Bingo
    const bingo = new Bingo('bingo-container');
```

### Generate a new grid with random numbers on each square
```javascript
    bingo.resetGrid();
```
The result should be something like this:
  <p align="center">
    <img title="Grid" src="../../images/grid.png">
  </p>

## Technical part

The project is configured with Jest for the tests, Playwright & Jest-image-snapshot for the visual tests, ESLint for the code formatting.

### IDE Configuration Tips

#### IntelliJ/WebStorm
If you have a problem with IntelliJ, try to change the configuration of ESLint in the IntelliJ preferences, like:
![eslint-config.png](../../images/es-webpack-eslint-config.png)

### Commands

#### Build and start a development server
`npm run start`

A server is launched with an HTML page to test the library manually. \
Livereload/watch is enabled. \
A new tab is automatically open in the browser with the url http://localhost:8080/ and with the following rendering:

![Grid](../../images/start_library_rendering.png)


#### Format the code
`npm run lint`

#### Clean the built directories
`npm run clean`

#### Launch tests
##### All tests 
`npm run test`

##### Unit tests
`npm run test:unit`

##### Unit tests + Coverage
`npm run test:unit:coverage`

##### E2E tests
`npm run test:e2e`

##### E2E tests + Coverage
`npm run test:e2e:coverage`

#### Build the _production_ bundle
`npm run build`

#### All commands
Run a clean production build with lint and test

`npm run all`
