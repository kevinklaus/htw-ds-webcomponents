import { newE2EPage } from '@stencil/core/testing';

describe('htw-berlin-link', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<htw-berlin-link></htw-berlin-link>');
    const element = await page.find('htw-berlin-link');
    expect(element).toHaveClass('hydrated');
  });
});
