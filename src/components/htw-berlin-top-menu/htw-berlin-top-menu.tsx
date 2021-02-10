import { Component, Prop, h, Watch } from '@stencil/core';

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
   *  color scheme of menu
   */
  @Prop() color: "green" | "orange" | "blue" = "green";
  @Watch('color')
  validateColor(newValue: string) {
    const colors = ['green', 'orange', 'blue', 'disabled'];
    const colorIsValid = colors.indexOf(newValue) > -1;
    
    if (!colorIsValid) { throw new Error('color: not a valid color (green, orange, blue)') }
  }

  /**
   * hide htw logo if true
   */
  @Prop() logo: boolean = true;


  @Function()  getVariantClasses() {
    var classList = []
    if (this.dark) classList.push("dark")
    classList.push(this.color)
    return classList.join(" ")
  }

  render() {
    if (this.logo) {
      return <div class={"htw-berlin-top-menu " + this.getVariantClasses()}>
        <htw-berlin-logo dark={this.dark} color={this.color}></htw-berlin-logo>
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
