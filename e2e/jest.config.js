module.exports = {
  testEnvironment: require.resolve('./environment.js'),
  transform: {},
  testTimeout: 120000,
  testRegex: '\\.e2e\\.mjs$',
  reporters: [require.resolve('detox/runners/jest/streamlineReporter')],
  verbose: true,
};
