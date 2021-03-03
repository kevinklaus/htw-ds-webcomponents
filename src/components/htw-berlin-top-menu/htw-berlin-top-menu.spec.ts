import { newSpecPage } from '@stencil/core/testing';
import { TopMenu } from './htw-berlin-top-menu';

describe('htw-berlin-top-menu', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [TopMenu],
      html: '<htw-berlin-top-menu></htw-berlin-top-menu>',
    });
    expect(root).toEqualHtml(`
      <htw-berlin-top-menu>
        <mock:shadow-root>
        </mock:shadow-root>
      </htw-berlin-top-menu>
    `);
  });
});
