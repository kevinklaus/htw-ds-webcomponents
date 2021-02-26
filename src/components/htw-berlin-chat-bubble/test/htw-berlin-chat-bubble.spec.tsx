import { newSpecPage } from '@stencil/core/testing';
import { HtwBerlinChatBubble } from '../htw-berlin-chat-bubble';

describe('htw-berlin-chat-bubble', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [HtwBerlinChatBubble],
      html: `<htw-berlin-chat-bubble></htw-berlin-chat-bubble>`,
    });
    expect(page.root).toEqualHtml(`
      <htw-berlin-chat-bubble>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </htw-berlin-chat-bubble>
    `);
  });
});
