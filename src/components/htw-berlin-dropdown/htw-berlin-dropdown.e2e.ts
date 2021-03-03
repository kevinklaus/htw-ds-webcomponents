import { newE2EPage } from '@stencil/core/testing';

describe('htw-berlin-dropdown', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<htw-berlin-dropdown></htw-berlin-dropdown>');
    const element = await page.find('htw-berlin-dropdown');
    expect(element).toHaveClass('hydrated');
  });
});
