import { newSpecPage } from '@stencil/core/testing';
import { Breadcrumb } from './htw-berlin-breadcrumb';

describe('htw-berlin-breadcrumb', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [Breadcrumb],
      html: '<htw-berlin-breadcrumb></htw-berlin-breadcrumb>',
    });
    expect(root).toEqualHtml(`
      <htw-berlin-breadcrumb>
      </htw-berlin-breadcrumb>
    `);
  });
});
