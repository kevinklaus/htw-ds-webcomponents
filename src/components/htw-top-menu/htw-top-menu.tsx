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
    return <div class={this.dark ? "htw-top-menu dark" : "htw-top-menu"}>
      <htw-link dark={this.dark} 
        title="Nothing will happen if you click." 
        href="#"
        text="Click me.">
      </htw-link>
      <htw-link dark={this.dark} 
        title="Nothing will happen if you click." 
        href="#"
        text="Click me.">
      </htw-link>
    </div>;
  }
}
