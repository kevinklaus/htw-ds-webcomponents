import { newE2EPage } from '@stencil/core/testing';

describe('htw-berlin-avatar', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<htw-berlin-avatar></htw-berlin-avatar>');

    const element = await page.find('htw-berlin-avatar');
    expect(element).toHaveClass('hydrated');
  });
});
