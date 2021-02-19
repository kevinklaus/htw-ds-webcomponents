import { Component, h, Prop, Watch } from '@stencil/core';

@Component({
  tag: 'htw-berlin-table',
  styleUrl: 'htw-berlin-table.css',
  shadow: false,
})
export class HtwBerlinTable {

    /**
   * use dark mode if true
   */
  @Prop() dark: boolean = false;

  /**
   *  color scheme of table
   */
  @Prop() color: "green" | "orange" | "blue" = "green";
  @Watch('color')
  validateColor(newValue: string) {
    const colors = ['green', 'orange', 'blue'];
    const colorIsValid = colors.indexOf(newValue) > -1;
    
    if (!colorIsValid) { throw new Error('color: not a valid color (green, orange, blue)') }
  }

  @Function()  getStyleClasses() {
    var classList = []
    classList.push("htw-berlin-table")
    if (this.dark) classList.push("dark")
    classList.push(this.color)
    return classList.join(" ")
  }

  render() {
    return (
      <div class={this.getStyleClasses()}>
       <slot/>
      </div>
    );
  }

}
