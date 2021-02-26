import { newE2EPage } from '@stencil/core/testing';

describe('htw-berlin-chat-bubble', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<htw-berlin-chat-bubble></htw-berlin-chat-bubble>');

    const element = await page.find('htw-berlin-chat-bubble');
    expect(element).toHaveClass('hydrated');
  });
});
