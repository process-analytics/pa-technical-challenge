process.env.JEST_PLAYWRIGHT_CONFIG = './test/e2e/jest-playwright.config.js';

module.exports = {
  rootDir: '../..',
  roots: ['./test/e2e', './src'],
  preset: 'jest-playwright-preset',
  testMatch: ['**/?(*.)+(spec|test).[t]s'],
  testPathIgnorePatterns: ['/node_modules/', 'dist', 'src'],
  testTimeout: 200000,
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  collectCoverageFrom: ['**/*.{ts,js}'],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    'dist',
    'test',
    'src/app',
    'src/static',
  ],
  coverageReporters: ['lcov', 'text-summary'],
  coverageDirectory: 'build/test-report/e2e',
  setupFilesAfterEnv: [
    // jest-image-snapshot configuration doesn't work with setupFiles, fix with setupFilesAfterEnv: see https://github.com/testing-library/jest-dom/issues/122#issuecomment-650520461
    './test/e2e/config/jest.image.ts',
    // need playwright globals to be available, so after environment
    './test/e2e/config/playwright.ts',
  ],
  reporters: [
    'default',
    [
      'jest-html-reporter',
      {
        pageTitle: 'bpmn-visualization E2E Test Report',
        outputPath: 'build/test-report/e2e/index.html',
        includeFailureMsg: true,
        includeSuiteFailure: true,
      },
    ],
  ],
};
