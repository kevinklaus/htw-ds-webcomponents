import { newSpecPage } from '@stencil/core/testing';
import { HTWLink } from './htw-link';

describe('htw-link', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [HTWLink],
      html: '<htw-link></htw-link>',
    });
    expect(root).toEqualHtml(`
      <htw-link>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </htw-link>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [HTWLink],
      html: `<htw-link first="Stencil" last="'Don't call me a framework' JS"></htw-link>`,
    });
    expect(root).toEqualHtml(`
      <htw-link first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </htw-link>
    `);
  });
});
