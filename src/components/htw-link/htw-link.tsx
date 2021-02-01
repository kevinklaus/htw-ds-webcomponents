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
   * use orange color scheme if true
   */
  @Prop() orange: boolean = false;

  /**
   * use side-menu styling if true
   */
  @Prop() sideMenu: boolean = false;

  /**
   * text to be displayed in link
   */
  @Prop() text: string;

    /**
   * alternative title
   */
  @Prop() altTitle: string;

  /**
   * href property
   */
  @Prop() href: string;

    @Function()  getVariantClasses() {
      var classList = []
      if (this.dark) classList.push("dark")
      if (this.orange) classList.push("orange")
      if (this.sideMenu) classList.push("side-menu")
      return classList.join(" ")
  }

  render() {
    return <a 
        class={"htw-link " + this.getVariantClasses() }
        title={this.altTitle} 
        href={this.href}
      >
        {this.text}
      </a>;
  }
}
