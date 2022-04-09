module.exports = {
  testRunner: 'jest',
  runnerConfig: require.resolve('./e2e/jest.config.js'),
  skipLegacyWorkersInjection: true,
  apps: {
    ios: {
      type: 'ios.app',
      // build:
      //   'eas build --platform ios --profile simulator --non-interactive --local --output=e2e/bin/hotlineblingcodealong.app',
      // binaryPath: './e2e/bin/hotlineblingcodealong.app',
      build: './scripts/build-detox-ios.sh hotlineblingcodealong Release YES',
      binaryPath:
        'ios/build/Build/Products/Release-iphonesimulator/hotlineblingcodealong.app',
    },
    android: {
      type: 'android.apk',
      build:
        'eas build --platform=android --profile emulator --non-interactive --local --output=e2e/bin/app-test.apk',
      // These both need to be configured for Detox to not
      // auto-generate an incorrect, nonexistent path
      // https://github.com/wix/Detox/issues/2274
      binaryPath: 'e2e/bin/app-test.apk',
      testBinaryPath: 'e2e/bin/app-test.apk',
    },
  },
  devices: {
    simulator: {
      type: 'ios.simulator',
      device: {
        type: 'iPhone 11',
      },
    },
    emulator: {
      type: 'android.emulator',
      device: {
        avdName: 'Pixel_3a_API_30_x86',
      },
    },
  },
  configurations: {
    ios: {
      device: 'simulator',
      app: 'ios',
    },
    android: {
      device: 'emulator',
      app: 'android',
    },
  },
};
