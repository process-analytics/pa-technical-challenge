// TODO Use as template for your e2e test
import { MatchImageSnapshotOptions } from 'jest-image-snapshot';

describe('test something', () => {
  it('should initialize grid when...', async () => {
    const response = await page.goto(`http://localhost:10002`);

    expect(response.status()).toBe(200);
    await expect(page.title()).resolves.toEqual('BINGO challenge');

    const image = await page.screenshot({ fullPage: true });
    const config = {
      diffDirection: 'vertical',
      // locally and on CI, see diff images folder directly
      dumpDiffToConsole: false,
      // use SSIM to limit false positive
      // https://github.com/americanexpress/jest-image-snapshot#recommendations-when-using-ssim-comparison
      comparisonMethod: 'ssim',
      failureThresholdType: 'percent',
      failureThreshold: 0.004,
    };
    expect(image).toMatchImageSnapshot(config);
  });
});
