import { Component, Prop, Watch, h } from '@stencil/core';

@Component({
  tag: 'htw-button',
  styleUrl: 'htw-button.css',
  shadow: true,
})

export class HTWButton {

  /**
   * button variant
   */
  @Prop() variant: "filled" | "outlined" | "text" = "filled";
  @Watch('variant')
  validateVariant(newValue: string) {
    const variants = ['filled', 'outlined', 'text'];
    const variantIsValid = variants.indexOf(newValue) > -1;
    
    if (!variantIsValid) { throw new Error('variant: not a valid variant (filled, outlined, text)') }
  }

  /**
   * button color
   */
  @Prop() color: "green" | "orange" | "blue" | "grey" = "green";
  @Watch('color')
  validateColor(newValue: string) {
    const colors = ['green', 'orange', 'blue', 'grey'];
    const colorIsValid = colors.indexOf(newValue) > -1;
    
    if (!colorIsValid) { throw new Error('color: not a valid color (filled, outlined, text)') }
  }

  /**
   * text to be displayed in button
   */
  @Prop() text: string;

  /**
   * alternative title
   */
  @Prop() altTitle: string;

  /**
   * href property
   */
  @Prop() href: string;

  render() {    
    return <a
        class={"htw-button " + this.variant + " " + this.color}
        title={this.altTitle} 
        href={this.href}
      >
        {this.text}
      </a>;
  }
}
