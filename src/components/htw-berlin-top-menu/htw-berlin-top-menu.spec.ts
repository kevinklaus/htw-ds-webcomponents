import { newSpecPage } from '@stencil/core/testing';
import { HTWTopMenu } from './htw-berlin-top-menu';

describe('htw-berlin-top-menu', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [HTWTopMenu],
      html: '<htw-berlin-top-menu></htw-berlin-top-menu>',
    });
    expect(root).toEqualHtml(`
      <htw-berlin-top-menu>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </htw-berlin-top-menu>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [HTWTopMenu],
      html: `<htw-berlin-top-menu first="Stencil" last="'Don't call me a framework' JS"></htw-berlin-top-menu>`,
    });
    expect(root).toEqualHtml(`
      <htw-berlin-top-menu first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </htw-berlin-top-menu>
    `);
  });
});
