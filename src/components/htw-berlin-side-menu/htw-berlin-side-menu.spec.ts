import { newSpecPage } from '@stencil/core/testing';
import { HTWSideMenu } from './htw-berlin-side-menu';

describe('htw-berlin-side-menu', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [HTWSideMenu],
      html: '<htw-berlin-side-menu></htw-berlin-side-menu>',
    });
    expect(root).toEqualHtml(`
      <htw-berlin-side-menu>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </htw-berlin-side-menu>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [HTWSideMenu],
      html: `<htw-berlin-side-menu first="Stencil" last="'Don't call me a framework' JS"></htw-berlin-side-menu>`,
    });
    expect(root).toEqualHtml(`
      <htw-berlin-side-menu first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </htw-berlin-side-menu>
    `);
  });
});
