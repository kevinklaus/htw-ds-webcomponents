import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'htw-berlin-content-box',
  styleUrl: 'htw-berlin-content-box.css',
  shadow: false,
})
export class HtwContentBox {
  /**
   * pick style to apply to content box
   */
  @Prop() variant: "default" | "green" | "grey" | "dark" = "default";


  render() {
    return <div class={"htw-berlin-content-box " + this.variant}
      >
        <slot></slot>
      </div>;
  }
}
