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
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </htw-berlin-button>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [Button],
      html: `<htw-berlin-button first="Stencil" last="'Don't call me a framework' JS"></htw-berlin-button>`,
    });
    expect(root).toEqualHtml(`
      <htw-berlin-button first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </htw-berlin-button>
    `);
  });
});
