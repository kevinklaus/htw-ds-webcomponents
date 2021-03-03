import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'htw-berlin-side-menu',
  styleUrl: 'htw-berlin-side-menu.css',
  shadow: true,
})
export class SideMenu {
  /**
   * use dark mode if true
   */
  @Prop() dark: boolean = false;

  render() {
    return <div class={this.dark ? "htw-berlin-side-menu dark" : "htw-berlin-side-menu"}>
      <slot></slot>
    </div>;
  }
}
