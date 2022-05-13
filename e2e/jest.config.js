module.exports = {
  testEnvironment: require.resolve('./environment.js'),
  testTimeout: 120000,
  testRegex: '\\.e2e\\.ts$',
  transform: {
    '\\.tsx?$': 'ts-jest',
  },
  reporters: [require.resolve('detox/runners/jest/streamlineReporter')],
  verbose: true,
};
