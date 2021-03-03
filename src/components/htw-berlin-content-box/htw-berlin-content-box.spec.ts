import { newSpecPage } from '@stencil/core/testing';
import { ContentBox } from './htw-berlin-content-box';

describe('htw-berlin-content-box', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [ContentBox],
      html: '<htw-berlin-content-box></htw-berlin-content-box>',
    });
    expect(root).toEqualHtml(`
      <htw-berlin-content-box>
      </htw-berlin-content-box>
    `);
  });
});
