import { newSpecPage } from '@stencil/core/testing';
import { Avatar } from '../htw-berlin-avatar';

describe('htw-berlin-avatar', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Avatar],
      html: `<htw-berlin-avatar></htw-berlin-avatar>`,
    });
    expect(page.root).toEqualHtml(`
      <htw-berlin-avatar>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </htw-berlin-avatar>
    `);
  });
});
