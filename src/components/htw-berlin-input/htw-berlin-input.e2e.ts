import { newE2EPage } from '@stencil/core/testing';

describe('htw-berlin-input', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<htw-berlin-input></htw-berlin-input>');
    const element = await page.find('htw-berlin-input');
    expect(element).toHaveClass('hydrated');
  });
});
