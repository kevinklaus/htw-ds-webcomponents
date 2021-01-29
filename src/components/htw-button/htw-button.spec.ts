import { newSpecPage } from '@stencil/core/testing';
import { HTWButton } from './htw-button';

describe('htw-button', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [HTWButton],
      html: '<htw-button></htw-button>',
    });
    expect(root).toEqualHtml(`
      <htw-button>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </htw-button>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [HTWButton],
      html: `<htw-button first="Stencil" last="'Don't call me a framework' JS"></htw-button>`,
    });
    expect(root).toEqualHtml(`
      <htw-button first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </htw-button>
    `);
  });
});
