module.exports = {
  testRunner: 'jest',
  runnerConfig: require.resolve('./e2e/jest.config.js'),
  specs: 'e2e',
  behavior: {
    init: {
      exposeGlobals: false,
    },
  },
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

    android: {
      type: 'android.apk',
      binaryPath: 'android/app/build/outputs/apk/release/app-release.apk',
      build:
        // List out the path to the final APK to trigger a failure of the
        // action step as well, in case the Gradle build fails
        //
        // Gradle has failed before here without causing the action step
        // to also fail
        'pushd android; ./gradlew app:assembleRelease app:assembleAndroidTest -DtestBuildType=release; popd; ls android/app/build/outputs/apk/release/app-release.apk',

      // FIXME: As of April 2022, EAS builds (both local and cloud)
      // do not work with Detox
      // build:
      //   'eas build --platform=android --profile emulator --non-interactive --local --output=e2e/bin/app-test.apk',
      // binaryPath: 'e2e/app.apk',
    },
  },
  devices: {
    simulator: {
      type: 'ios.simulator',
      device: {
        type: 'iPhone 13 Pro',
      },
    },
    emulator: {
      type: 'android.emulator',
      device: {
        avdName: 'Pixel_3a_API_30_AOSP',
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
  artifacts: {
    rootDir: '.detoxArtifacts',
    plugins: {
      log: { enabled: true },
      uiHierarchy: 'enabled',
      screenshot: {
        shouldTakeAutomaticSnapshots: true,
        keepOnlyFailedTestsArtifacts: true,
        takeWhen: {
          testStart: false,
          testDone: true,
        },
      },
    },
  },
};
