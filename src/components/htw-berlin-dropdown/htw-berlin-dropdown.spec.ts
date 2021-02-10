import { newSpecPage } from '@stencil/core/testing';
import { HTWDropdown } from './htw-berlin-dropdown';

describe('htw-berlin-dropdown', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [HTWDropdown],
      html: '<htw-berlin-dropdown></htw-berlin-dropdown>',
    });
    expect(root).toEqualHtml(`
      <htw-berlin-dropdown>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </htw-berlin-dropdown>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [HTWDropdown],
      html: `<htw-berlin-dropdown first="Stencil" last="'Don't call me a framework' JS"></htw-berlin-dropdown>`,
    });
    expect(root).toEqualHtml(`
      <htw-berlin-dropdown first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </htw-berlin-dropdown>
    `);
  });
});
