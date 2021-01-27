import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'htw-link',
  styleUrl: 'htw-link.css',
  shadow: true,
})
export class HTWLink {
  /**
   * use dark mode if true
   */
  @Prop() dark: boolean = false;

  /**
   * text to be displayed in link
   */
  @Prop() text: string;

    /**
   * alternative title
   */
  @Prop() title: string;

  /**
   * href property
   */
  @Prop() href: string;

  render() {
    return <a 
        class={this.dark ? "htw-link dark" : "htw-link"} 
        title={this.title} 
        href={this.href}
      >
        {this.text}
      </a>;
  }
}
