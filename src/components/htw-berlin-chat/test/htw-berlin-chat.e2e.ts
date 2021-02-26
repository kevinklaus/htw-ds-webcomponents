import { newE2EPage } from '@stencil/core/testing';

describe('htw-berlin-chat', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<htw-berlin-chat></htw-berlin-chat>');

    const element = await page.find('htw-berlin-chat');
    expect(element).toHaveClass('hydrated');
  });
});
