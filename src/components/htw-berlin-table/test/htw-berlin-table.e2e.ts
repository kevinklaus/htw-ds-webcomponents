import { newE2EPage } from '@stencil/core/testing';

describe('htw-berlin-table', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<htw-berlin-table></htw-berlin-table>');

    const element = await page.find('htw-berlin-table');
    expect(element).toHaveClass('hydrated');
  });
});
