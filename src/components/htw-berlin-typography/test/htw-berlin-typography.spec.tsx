import { newSpecPage } from '@stencil/core/testing';
import { HtwBerlinTypography } from '../htw-berlin-typography';

describe('htw-berlin-typography', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [HtwBerlinTypography],
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
