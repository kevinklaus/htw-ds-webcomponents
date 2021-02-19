import { newE2EPage } from '@stencil/core/testing';

describe('htw-berlin-typography', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<htw-berlin-typography></htw-berlin-typography>');

    const element = await page.find('htw-berlin-typography');
    expect(element).toHaveClass('hydrated');
  });
});
