import { newSpecPage } from '@stencil/core/testing';
import { Chat } from '../htw-berlin-chat';

describe('htw-berlin-chat', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Chat],
      html: `<htw-berlin-chat></htw-berlin-chat>`,
    });
    expect(page.root).toEqualHtml(`
      <htw-berlin-chat>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </htw-berlin-chat>
    `);
  });
});
