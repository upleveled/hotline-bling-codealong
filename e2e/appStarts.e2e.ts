import { by, device, element, expect } from 'detox';

describe('App', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have header element', async () => {
    await expect(element(by.id('HeaderView'))).toBeVisible();
  });
});
