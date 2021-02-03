import { newSpecPage } from '@stencil/core/testing';
import { HTWInput } from './htw-berlin-input';

describe('htw-berlin-input', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [HTWInput],
      html: '<htw-berlin-input></htw-berlin-input>',
    });
    expect(root).toEqualHtml(`
      <htw-berlin-input>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </htw-berlin-input>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [HTWInput],
      html: `<htw-berlin-input first="Stencil" last="'Don't call me a framework' JS"></htw-berlin-input>`,
    });
    expect(root).toEqualHtml(`
      <htw-berlin-input first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </htw-berlin-input>
    `);
  });
});
