import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'htw-side-menu',
  styleUrl: 'htw-side-menu.css',
  shadow: true,
})
export class HTWSideMenu {
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
    return <div class={"htw-side-menu " + this.getVariantClasses()}>
      <htw-link dark={this.dark} orange={this.orange} sideMenu={true} 
        title="Nothing will happen if you click." 
        href="#"
        text="Click me.">
      </htw-link>
      <htw-link dark={this.dark} orange={this.orange} sideMenu={true} 
        title="Nothing will happen if you click." 
        href="#"
        text="Second link">
      </htw-link>
      <htw-link dark={this.dark} orange={this.orange} sideMenu={true} 
        title="Nothing will happen if you click." 
        href="#"
        text="Third very long link">
      </htw-link>
      <htw-link dark={this.dark} orange={this.orange} sideMenu={true} 
        title="Nothing will happen if you click." 
        href="#"
        text="Last link">
      </htw-link>
    </div>;
  }
}
