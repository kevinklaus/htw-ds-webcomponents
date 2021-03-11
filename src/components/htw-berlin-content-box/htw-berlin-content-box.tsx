import { Component, Prop, h, Watch } from '@stencil/core';

@Component({
  tag: 'htw-berlin-content-box',
  styleUrl: 'htw-berlin-content-box.css',
  shadow: true,
})
export class ContentBox {

  /**
   * set true to apply dark mode
   */
  @Prop() dark: boolean = false;

  /**
   * set style to apply to the content box
   */
  @Prop() variant: 'default' | 'color' | 'secondary' = 'default';

  /**
  * pick color to apply to content when variant='color'
  */
  @Prop() color: 'green' | 'orange' | 'blue' = 'green';
  @Watch('color')
  validateColor(newValue: string) {
    const colors = ['green', 'orange', 'blue'];
    const colorIsValid = colors.indexOf(newValue) > -1;
    if (!colorIsValid) { throw new Error('color: not a valid color (green, orange, blue)') }
    if (this.variant !== 'color') { throw new Error('color: can only be set for variant: color)') }
  }

  @Function() getStyleClasses() {
    var classList = []
    if (this.variant === "color") classList.push(this.color) 
    else classList.push(this.variant)
    if (this.variant === "default" && this.dark) classList.push("dark")
    return classList.join(" ")
  }

  render() {
    return <div class={"htw-berlin-content-box " + this.getStyleClasses()}>
        <slot></slot>
      </div>;
  }
}
