import { newE2EPage } from '@stencil/core/testing';

describe('htw-berlin-top-menu', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<htw-berlin-top-menu></htw-berlin-top-menu>');
    const element = await page.find('htw-berlin-top-menu');
    expect(element).toHaveClass('hydrated');
  });
});
