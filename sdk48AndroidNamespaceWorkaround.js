// Workaround for Expo SDK 48 Android namespace build failures
// https://github.com/expo/expo/issues/21477#issuecomment-1454260119
const { withAppBuildGradle } = require('@expo/config-plugins');

function withAndroidNamespace(pluginConfig) {
  return withAppBuildGradle(pluginConfig, (config) => {
    const buildGradle = config.modResults.contents;
    const namespace = config.android.package.toString();
    const newContents = buildGradle.replace(
      /namespace (.*)\n/,
      `namespace '${namespace}'\n`,
    );
    config.modResults.contents = newContents;
    console.log(`withAndroidNamespace: change namespace to ${namespace}`);
    return config;
  });
}

module.exports = withAndroidNamespace;
