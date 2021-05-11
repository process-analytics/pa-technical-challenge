module.exports = {
  rootDir: '../..',
  roots: ['./test/unit', './src'],
  testMatch: ['**/?(*.)+(spec|test).js'],
  testPathIgnorePatterns: ['/node_modules/', 'dist', 'src'],
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  collectCoverageFrom: ['**/*.{js}'],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    'dist',
    'test',
    'src/app',
    'src/static',
  ],
  coverageReporters: ['lcov', 'text-summary'],
  coverageDirectory: 'build/test-report/unit',
  reporters: [
    'default',
    [
      'jest-html-reporter',
      {
        pageTitle: 'bpmn-visualization Unit Test Report',
        outputPath: 'build/test-report/unit/index.html',
        includeFailureMsg: true,
        includeSuiteFailure: true,
      },
    ],
  ],
};
