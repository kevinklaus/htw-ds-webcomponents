import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'htw-top-menu',
  styleUrl: 'htw-top-menu.css',
  shadow: true,
})
export class HTWTopMenu {
  /**
   * use dark mode if true
   */
  @Prop() dark: boolean = false;

  render() {
    return <div class="htw-top-menu {this.dark}">
      <ul>
        <li></li>
      </ul>
    </div>;
  }
}
