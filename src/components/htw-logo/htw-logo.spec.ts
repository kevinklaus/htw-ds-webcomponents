import { newSpecPage } from '@stencil/core/testing';
import { HTWLogo } from './htw-logo';

describe('htw-logo', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [HTWLogo],
      html: '<htw-logo></htw-logo>',
    });
    expect(root).toEqualHtml(`
      <htw-logo>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </htw-logo>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [HTWLogo],
      html: `<htw-logo first="Stencil" last="'Don't call me a framework' JS"></htw-logo>`,
    });
    expect(root).toEqualHtml(`
      <htw-logo first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </htw-logo>
    `);
  });
});
