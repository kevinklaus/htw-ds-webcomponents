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

  /**
   * use orange color scheme if true
   */
  @Prop() orange: boolean = false;


  @Function()  getVariantClasses() {
    var classList = []
    if (this.dark) classList.push("dark")
    if (this.orange) classList.push("orange")
    return classList.join(" ")
  }

  render() {
    return <div class={"htw-top-menu " + this.getVariantClasses()}>
      <htw-logo dark={this.dark} orange={this.orange}></htw-logo>
      <span class="spacer"></span>
      <htw-link dark={this.dark} orange={this.orange} 
        title="Nothing will happen if you click." 
        href="#"
        text="Click me.">
      </htw-link>
      <htw-link dark={this.dark} orange={this.orange} 
        title="Nothing will happen if you click." 
        href="#"
        text="Second link">
      </htw-link>
      <htw-link dark={this.dark} orange={this.orange} 
        title="Nothing will happen if you click." 
        href="#"
        text="Third very long link">
      </htw-link>
      <htw-link dark={this.dark} orange={this.orange} 
        title="Nothing will happen if you click." 
        href="#"
        text="Last link">
      </htw-link>
    </div>;
  }
}
