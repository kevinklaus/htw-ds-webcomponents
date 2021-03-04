import { Component, Prop, Watch, h } from '@stencil/core';

@Component({
  tag: 'htw-berlin-button',
  styleUrl: 'htw-berlin-button.css',
  shadow: true,
})

export class Button {

  /**
   * button variant
   */
  @Prop() variant: 'filled' | 'outlined' | 'text' = 'filled';
  @Watch('variant')
  validateVariant(newValue: string) {
    const variants = ['filled', 'outlined', 'text'];
    const variantIsValid = variants.indexOf(newValue) > -1;
    
    if (!variantIsValid) { throw new Error('variant: not a valid variant (filled, outlined, text)') }
  }

  /**
   * button color
   */
  @Prop() color: 'green' | 'orange' | 'blue' | 'disabled' = 'green';
  @Watch('color')
  validateColor(newValue: string) {
    const colors = ['green', 'orange', 'blue', 'disabled'];
    const colorIsValid = colors.indexOf(newValue) > -1;
    
    if (!colorIsValid) { throw new Error('color: not a valid color (green, orange, blue, disabled)') }
    if (newValue === 'blue' && this.dark && (this.variant === 'outlined' || this.variant === 'text')) { throw new Error('Accessibility: blue should not be used on dark backgrounds') }
  }

  /**
   * text to be displayed in button
   */
  @Prop() text: string = "Button";

  /**
   * set true to use dark mode styling
   */
  @Prop() dark: boolean = false; 

  /**
   * alternative title
   */
  @Prop() altTitle: string = "Alternative Button Title";

  /**
   * href property
   */
  @Prop() href: string = "javascript:void(0)";

  /**
   * button type, default is anker <a>
   */
  @Prop() type: 'default' | 'submit' = 'default';


  @Function()  getStyleClasses() {
    var classList = []
    if (this.dark) classList.push('dark')
    classList.push(this.color)
    classList.push(this.variant)
    return classList.join(' ')
  }

  render() {  
    if (this.type === 'default') {
      return <a
          class={"htw-berlin-button " + this.getStyleClasses()} 
          title={this.altTitle} 
          href={this.color === "disabled" ? 'javascript:void(0)': this.href}
        >
          {this.text}
        </a>;
    }
    else {
      return <button
        class={"htw-berlin-button " + this.getStyleClasses()}
        title={this.altTitle} 
        type="submit"
      >
        {this.text}
      </button>;
    }
  }
}
