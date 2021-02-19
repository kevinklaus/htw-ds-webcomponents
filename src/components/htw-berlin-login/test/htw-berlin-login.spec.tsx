import { newSpecPage } from '@stencil/core/testing';
import { HtwBerlinLogin } from '../htw-berlin-login';

describe('htw-berlin-login', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [HtwBerlinLogin],
      html: `<htw-berlin-login></htw-berlin-login>`,
    });
    expect(page.root).toEqualHtml(`
      <htw-berlin-login>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </htw-berlin-login>
    `);
  });
});
