module.exports = {
  maxWorkers: 1,
  testEnvironment: './environment',
  testRunner: 'jest-circus/runner',
  testTimeout: 120000,
  testRegex: '\\.e2e\\.js$',
  reporters: ['detox/runners/jest/streamlineReporter'],
  verbose: true,
};
