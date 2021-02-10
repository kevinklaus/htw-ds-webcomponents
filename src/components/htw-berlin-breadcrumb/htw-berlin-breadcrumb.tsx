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
      <slot></slot>
    </div>;
  }
}
