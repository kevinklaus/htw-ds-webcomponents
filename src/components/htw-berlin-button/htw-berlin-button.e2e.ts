import { newE2EPage } from '@stencil/core/testing';

describe('htw-berlin-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<htw-berlin-button></htw-berlin-button>');
    const element = await page.find('htw-berlin-button');
    expect(element).toHaveClass('hydrated');
  });
});
