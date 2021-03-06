import { Component, h } from '@stencil/core';

@Component({
  tag: 'htw-berlin-breadcrumb',
  styleUrl: 'htw-berlin-breadcrumb.css',
  shadow: true,
})
export class Breadcrumb {
  render() {
    return <div class={"htw-berlin-breadcrumb"}>
      <slot></slot>
    </div>;
  }
}
