import { newE2EPage } from '@stencil/core/testing';

describe('htw-berlin-top-menu', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<htw-berlin-top-menu></htw-berlin-top-menu>');
    const element = await page.find('htw-berlin-top-menu');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<htw-berlin-top-menu></htw-berlin-top-menu>');
    const component = await page.find('htw-berlin-top-menu');
    const element = await page.find('htw-berlin-top-menu >>> div');
    expect(element.textContent).toEqual(`Hello, World! I'm `);

    component.setProperty('first', 'James');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James`);

    component.setProperty('last', 'Quincy');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James Quincy`);

    component.setProperty('middle', 'Earl');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James Earl Quincy`);
  });
});
