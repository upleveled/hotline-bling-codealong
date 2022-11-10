module.exports = {
  maxWorkers: 1,
  testEnvironment: require.resolve('./environment.js'),
  testTimeout: 120000,
  rootDir: '..',
  testMatch: ['<rootDir>/e2e/**/*.e2e.ts'],
  transform: {
    '\\.tsx?$': 'ts-jest',
  },
  reporters: [require.resolve('detox/runners/jest/streamlineReporter')],
  verbose: true,
};
