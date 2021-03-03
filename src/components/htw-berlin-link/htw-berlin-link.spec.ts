import { newSpecPage } from '@stencil/core/testing';
import { Link } from './htw-berlin-link';

describe('htw-berlin-link', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [Link],
      html: '<htw-berlin-link></htw-berlin-link>',
    });
    expect(root).toEqualHtml(`
      <htw-berlin-link>
        <mock:shadow-root>
        </mock:shadow-root>
      </htw-berlin-link>
    `);
  });
});
