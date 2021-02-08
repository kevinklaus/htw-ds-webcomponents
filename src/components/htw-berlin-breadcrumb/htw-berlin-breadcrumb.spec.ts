import { newSpecPage } from '@stencil/core/testing';
import { HTWBreadcrumb } from './htw-berlin-breadcrumb';

describe('htw-berlin-breadcrumb', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [HTWBreadcrumb],
      html: '<htw-berlin-breadcrumb></htw-berlin-breadcrumb>',
    });
    expect(root).toEqualHtml(`
      <htw-berlin-breadcrumb>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </htw-berlin-breadcrumb>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [HTWBreadcrumb],
      html: `<htw-berlin-breadcrumb first="Stencil" last="'Don't call me a framework' JS"></htw-berlin-breadcrumb>`,
    });
    expect(root).toEqualHtml(`
      <htw-berlin-breadcrumb first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </htw-berlin-breadcrumb>
    `);
  });
});
