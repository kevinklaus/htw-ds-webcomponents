import { Component, h, Prop, Watch } from '@stencil/core';

@Component({
  tag: 'htw-berlin-typography',
  styleUrl: 'htw-berlin-typography.css',
  shadow: true,
})

export class HtwBerlinTypography {

  /**
   * use dark mode if true - reverses copy color to white
   */
  @Prop() dark: boolean = false;

  /**
   * link color
   */
  @Prop() color: "copy" | "green" | "orange" | "blue" | "grey" = "copy";
  @Watch('color')
  validateColor(newValue: string) {
    const colors = ['copy', 'green', 'orange', 'blue', 'grey'];
    const colorIsValid = colors.indexOf(newValue) > -1;
    
    if (!colorIsValid) { throw new Error('color: not a valid color (copy, green, orange, blue, grey)') }
    if (newValue === 'blue' && this.dark) { throw new Error('Accessibility: blue should not be used on dark backgrounds') }
  }

  /**
   * specify the html tag of the typogrphy element
   */
  @Prop() tag: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "span" = "span";

  /**
   * specify the font-style of the typogrphy element
   */
  @Prop() fontstyle: "normal" | "bold" |  "italic" = "normal";


  @Function() getStyleClasses() {
    var classList = []
    classList.push("htw-berlin-typography")
    if (this.dark) classList.push("dark")
    classList.push(this.color)
    classList.push(this.fontstyle)
    return classList.join(" ")
  }

  render() {
    switch(this.tag) {
      case "p":
        return <p class={this.getStyleClasses()}>
          <slot></slot>
        </p>;
      case "h1":
        return <h1 class={this.getStyleClasses()}>
          <slot></slot>
        </h1>;
      case "h2":
        return <h2 class={this.getStyleClasses()}>
          <slot></slot>
        </h2>;
      case "h3":
        return <h3 class={this.getStyleClasses()}>
          <slot></slot>
        </h3>;
      case "h4":
        return <h4 class={this.getStyleClasses()}>
          <slot></slot>
        </h4>;
      case "h5":
        return <h5 class={this.getStyleClasses()}>
          <slot></slot>
        </h5>;
      default:
        return <span class={this.getStyleClasses()}>
          <slot></slot>
        </span>;
    } 
  }
}
