import { Component, Prop, h, Watch } from '@stencil/core';

@Component({
  tag: 'htw-berlin-content-box',
  styleUrl: 'htw-berlin-content-box.css',
  shadow: false,
})
export class HtwContentBox {
  /**
   * set style to apply to the content box
   */
  @Prop() variant: "default" | "color" | "secondary" | "dark" = "default";

  /**
  * pick color to apply to content when variant="color"
  */
  @Prop() color: "green" | "orange" | "blue" = "green";
  @Watch('color')
  validateColor(newValue: string) {
    const colors = ['green', 'orange', 'blue', 'disabled'];
    const colorIsValid = colors.indexOf(newValue) > -1;
    if (!colorIsValid) { throw new Error('color: not a valid color (green, orange, blue, disabled)') }
    if (this.variant !== "color") { throw new Error('color: can only be set for variant: color)') }
  }

  @Function() getStyleClasses() {
    var classList = []
    if (this.variant !== "color") classList.push(this.variant)
    if (this.variant === "color" && this.color !== "green") classList.push(this.color)
    return classList.join(" ")
  }

  render() {
    return <div class={"htw-berlin-content-box " + this.getStyleClasses()}>
        <slot></slot>
      </div>;
  }
}
