import { newSpecPage } from '@stencil/core/testing';
import { Table } from '../htw-berlin-table';

describe('htw-berlin-table', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Table],
      html: `<htw-berlin-table></htw-berlin-table>`,
    });
    expect(page.root).toEqualHtml(`
      <htw-berlin-table>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </htw-berlin-table>
    `);
  });
});
