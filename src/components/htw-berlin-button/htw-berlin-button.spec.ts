import { newSpecPage } from '@stencil/core/testing';
import { Button } from './htw-berlin-button';

describe('htw-berlin-button', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [Button],
      html: '<htw-berlin-button></htw-berlin-button>',
    });
    expect(root).toEqualHtml(`
      <htw-berlin-button>
        <mock:shadow-root>
        </mock:shadow-root>
      </htw-berlin-button>
    `);
  });

});
