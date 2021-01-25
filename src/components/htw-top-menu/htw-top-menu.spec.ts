import { newSpecPage } from '@stencil/core/testing';
import { HTWTopMenu } from './htw-top-menu';

describe('htw-top-menu', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [HTWTopMenu],
      html: '<htw-top-menu></htw-top-menu>',
    });
    expect(root).toEqualHtml(`
      <htw-top-menu>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </htw-top-menu>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [HTWTopMenu],
      html: `<htw-top-menu first="Stencil" last="'Don't call me a framework' JS"></htw-top-menu>`,
    });
    expect(root).toEqualHtml(`
      <htw-top-menu first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </htw-top-menu>
    `);
  });
});
