import { newSpecPage } from '@stencil/core/testing';
import { HTWLink } from './htw-berlin-link';

describe('htw-berlin-link', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [HTWLink],
      html: '<htw-berlin-link></htw-berlin-link>',
    });
    expect(root).toEqualHtml(`
      <htw-berlin-link>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </htw-berlin-link>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [HTWLink],
      html: `<htw-berlin-link first="Stencil" last="'Don't call me a framework' JS"></htw-berlin-link>`,
    });
    expect(root).toEqualHtml(`
      <htw-berlin-link first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </htw-berlin-link>
    `);
  });
});
