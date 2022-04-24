# Hotline Bling Codealong

Simple demo showing how an Expo (React Native) app is built

## Tests

The test setup for this app showcases

1. A managed Expo app
2. GitHub Actions
3. Detox end to end / integration tests (using `expo prebuild`)
   1. [Android](https://github.com/upleveled/hotline-bling-codealong/blob/main/.github/workflows/detox-android.yml) (uses [Gradle builds](https://github.com/upleveled/hotline-bling-codealong/blob/69527c96401cf138ef4b58b85daa36a902da06fe/detox.config.js#L35) and [the Android ATD emulator images](https://android-developers.googleblog.com/2021/10/whats-new-in-scalable-automated-testing.html#:~:text=Slimmer%20Emulator%20System%20Images))
   2. [iOS](https://github.com/upleveled/hotline-bling-codealong/blob/main/.github/workflows/detox-ios.yml) (uses [XCode builds](https://github.com/upleveled/hotline-bling-codealong/blob/69527c96401cf138ef4b58b85daa36a902da06fe/detox.config.js#L15) and Simulator.app)
4. [A workflow](https://github.com/upleveled/hotline-bling-codealong/blob/main/.github/workflows/expo-start-android.yml) testing that the `expo start` dev server does not crash (by running [this script](https://github.com/upleveled/hotline-bling-codealong/blob/main/scripts/test-expo-dev-server.sh))
5. [A weekly CRON workflow](https://github.com/upleveled/hotline-bling-codealong/blob/main/.github/workflows/cron-expo-install-new-versions.yml) that runs `expo upgrade` to upgrades to the latest Expo-supported versions of packages and creates pull requests (similar to Renovate bot or Dependabot, but only with the Expo-supported versions, because [Renovate doesn't yet support this](https://github.com/renovatebot/renovate/issues/7417))

## Credits

- App icon credit goes to Oksana Latysheva: https://thenounproject.com/search/?q=party&i=1004872
- Credit for structure and inspiration comes from: https://github.com/andreas-arkulpa/my-favorite-food
