import { newSpecPage } from '@stencil/core/testing';
import { Typography } from '../htw-berlin-typography';

describe('htw-berlin-typography', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Typography],
      html: `<htw-berlin-typography></htw-berlin-typography>`,
    });
    expect(page.root).toEqualHtml(`
      <htw-berlin-typography>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </htw-berlin-typography>
    `);
  });
});
