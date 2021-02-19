import { newE2EPage } from '@stencil/core/testing';

describe('htw-berlin-login', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<htw-berlin-login></htw-berlin-login>');

    const element = await page.find('htw-berlin-login');
    expect(element).toHaveClass('hydrated');
  });
});
