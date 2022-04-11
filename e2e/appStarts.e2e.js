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
      .withTimeout(30000);
    await expect(element(by.id('HeaderView'))).toBeVisible();
  });
});
