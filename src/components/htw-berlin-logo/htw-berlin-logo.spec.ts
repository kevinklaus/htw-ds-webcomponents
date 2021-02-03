import { newSpecPage } from '@stencil/core/testing';
import { HTWLogo } from './htw-berlin-logo';

describe('htw-berlin-logo', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [HTWLogo],
      html: '<htw-berlin-logo></htw-berlin-logo>',
    });
    expect(root).toEqualHtml(`
      <htw-berlin-logo>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </htw-berlin-logo>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [HTWLogo],
      html: `<htw-berlin-logo first="Stencil" last="'Don't call me a framework' JS"></htw-berlin-logo>`,
    });
    expect(root).toEqualHtml(`
      <htw-berlin-logo first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </htw-berlin-logo>
    `);
  });
});
