import { by, device, element, expect, waitFor } from 'detox';

describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have header element', async () => {
    await waitFor(element(by.id('HeaderView')))
      .toBeVisible()
      // Wait for element for 30 seconds to work
      // around "System UI isn't responding" ANR
      // (Application Not Responding) error
      // https://github.com/ReactiveCircus/android-emulator-runner/issues/129
      // https://github.com/upleveled/hotline-bling-codealong/pull/26#issuecomment-1094659722
      .withTimeout(30000);

    await expect(element(by.id('HeaderView'))).toBeVisible();
  });
});
