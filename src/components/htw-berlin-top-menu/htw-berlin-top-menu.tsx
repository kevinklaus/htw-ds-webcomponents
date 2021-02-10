import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'htw-berlin-top-menu',
  styleUrl: 'htw-berlin-top-menu.css',
  shadow: true,
})
export class HTWTopMenu {
  /**
   * use dark mode if true
   */
  @Prop() dark: boolean = false;

  /**
   * use orange color scheme if true
   */
  @Prop() orange: boolean = false;

  /**
   * hide htw logo if true
   */
  @Prop() logo: boolean = true;


  @Function()  getVariantClasses() {
    var classList = []
    if (this.dark) classList.push("dark")
    if (this.orange) classList.push("orange")
    return classList.join(" ")
  }

  render() {
    if (this.logo) {
      return <div class={"htw-berlin-top-menu " + this.getVariantClasses()}>
        <htw-berlin-logo dark={this.dark} orange={this.orange}></htw-berlin-logo>
        <span class="spacer"></span>
        <slot></slot>
      </div>;
    }
    else {
      return <div class={"htw-berlin-top-menu " + this.getVariantClasses()}>
        <slot></slot>
      </div>;
      
    }
  }
}
