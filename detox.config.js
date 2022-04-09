module.exports = {
  testRunner: 'jest',
  runnerConfig: require.resolve('./e2e/jest.config.js'),
  skipLegacyWorkersInjection: true,
  apps: {
    ios: {
      type: 'ios.app',

      // Run xcodebuild and exit with non-zero if the build fails
      build: './scripts/build-detox-ios.sh hotlineblingcodealong Release YES',
      binaryPath:
        'ios/build/Build/Products/Release-iphonesimulator/hotlineblingcodealong.app',

      // FIXME: As of April 2022, EAS builds (both local and cloud)
      // do not work with Detox
      // build:
      //   'eas build --platform ios --profile simulator --non-interactive --local --output=e2e/bin/hotlineblingcodealong.app',
      // binaryPath: './e2e/bin/hotlineblingcodealong.app',
    },

    // TODO: Set up Android configuration and tests
    android: {
      type: 'android.apk',
      // build:
      //   'eas build --platform=android --profile emulator --non-interactive --local --output=e2e/bin/app-test.apk',
      // These both need to be configured for Detox to not
      // auto-generate an incorrect, nonexistent path
      // https://github.com/wix/Detox/issues/2274
      binaryPath: 'android/app/build/outputs/apk/release/app-release.apk',
      build:
        'pushd android; ./gradlew app:assembleRelease app:assembleAndroidTest -DtestBuildType=release; popd',
      // binaryPath: 'e2e/app.apk',
      // testBinaryPath:
      //   'e2e/89fca8e0-b364-4195-9674-13c0a4394713-bc26edcca6de40eb9c56272be54e70db.apk',
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
