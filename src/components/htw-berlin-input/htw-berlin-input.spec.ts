import { newSpecPage } from '@stencil/core/testing';
import { Input } from './htw-berlin-input';

describe('htw-berlin-input', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [Input],
      html: '<htw-berlin-input></htw-berlin-input>',
    });
    expect(root).toEqualHtml(`
      <htw-berlin-input>
      </htw-berlin-input>
    `);
  });

});
