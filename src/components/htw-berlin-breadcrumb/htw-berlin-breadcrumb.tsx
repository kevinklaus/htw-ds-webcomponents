import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'htw-berlin-breadcrumb',
  styleUrl: 'htw-berlin-breadcrumb.css',
  shadow: true,
})
export class HTWBreadcrumb {
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
    if (this.orange) classList.push("orange")
    return classList.join(" ")
  }

  render() {
    return <div class={"htw-berlin-breadcrumb " + this.getVariantClasses()}>
      <htw-berlin-link dark={this.dark} 
        variant="breadcrumb"
        state="visited"
        title="Nothing will happen if you click." 
        href="#"
        text="Home">
      </htw-berlin-link>
      <htw-berlin-link dark={this.dark} 
        variant="breadcrumb"
        title="Nothing will happen if you click." 
        href="#"
        text="FB 4">
      </htw-berlin-link>
      <htw-berlin-link dark={this.dark} 
        variant="breadcrumb"
        state="active"
        title="Nothing will happen if you click." 
        href="#"
        text="IMI (B)">
      </htw-berlin-link>
    </div>;
  }
}
