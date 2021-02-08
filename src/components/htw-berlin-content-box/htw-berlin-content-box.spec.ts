import { newSpecPage } from '@stencil/core/testing';
import { HtwContentBox } from './htw-berlin-content-box';

describe('htw-berlin-content-box', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [HtwContentBox],
      html: '<htw-berlin-content-box></htw-berlin-content-box>',
    });
    expect(root).toEqualHtml(`
      <htw-berlin-content-box>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </htw-berlin-content-box>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [HtwContentBox],
      html: `<htw-berlin-content-box first="Stencil" last="'Don't call me a framework' JS"></htw-berlin-content-box>`,
    });
    expect(root).toEqualHtml(`
      <htw-berlin-content-box first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </htw-berlin-content-box>
    `);
  });
});
