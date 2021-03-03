import { newE2EPage } from '@stencil/core/testing';

describe('htw-berlin-content-box', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<htw-berlin-content-box></htw-berlin-content-box>');
    const element = await page.find('htw-berlin-content-box');
    expect(element).toHaveClass('hydrated');
  });
});
