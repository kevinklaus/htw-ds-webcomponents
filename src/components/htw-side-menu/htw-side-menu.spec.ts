import { newSpecPage } from '@stencil/core/testing';
import { HTWSideMenu } from './htw-side-menu';

describe('htw-side-menu', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [HTWSideMenu],
      html: '<htw-side-menu></htw-side-menu>',
    });
    expect(root).toEqualHtml(`
      <htw-side-menu>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </htw-side-menu>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [HTWSideMenu],
      html: `<htw-side-menu first="Stencil" last="'Don't call me a framework' JS"></htw-side-menu>`,
    });
    expect(root).toEqualHtml(`
      <htw-side-menu first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </htw-side-menu>
    `);
  });
});
