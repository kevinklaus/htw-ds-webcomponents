import { Component, Prop, Watch, h } from '@stencil/core';

@Component({
  tag: 'htw-berlin-logo',
  styleUrl: 'htw-berlin-logo.css',
  shadow: true,
})
export class HTWLogo {
  /**
   * use dark mode if true
   */
  @Prop() dark: boolean = false;

  /**
   * color scheme
   */
  @Prop() color: "green" | "orange" | "blue" = "green";
  @Watch('color')
  validateColor(newValue: string) {
    const colors = ['green', 'orange', 'blue'];
    const colorIsValid = colors.indexOf(newValue) > -1;
    
    if (!colorIsValid) { throw new Error('color: not a valid color (green, orange, blue)') }
  }

  /**
   * render logo in different sizes
   */
  @Prop() size: "s" | "m" | "l" = "s";
  @Watch('size')
  validateSize(newValue: string) {
    const sizes = ['s', 'm', 'l'];
    const sizeIsValid = sizes.indexOf(newValue) > -1;
    
    if (!sizeIsValid) { throw new Error('Size: not a valid size (s, m, l)') }
  }

  /**
   * href property
   */
  @Prop() href: string;
  

  @Function()  getStyleClasses() {
    var classList = []
    if (this.dark) { 
      classList.push("dark") 
    }
    else classList.push(this.color)
    classList.push(this.size)
    return classList.join(" ")
  }

  render() {
    return <a 
      class={"htw-berlin-logo " + this.getStyleClasses() }
      href={this.href}
      >
        <svg width="49" height="15" viewBox="0 0 49 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M40.8976 3.75026H44.6152V11.2503H40.8976V3.75026ZM48.3333 11.2503V15H44.6152V11.2503H48.3333ZM14.8715 0H18.5897V3.75026H22.3078V7.5H18.5897V11.2503H22.3078V15H18.5897C18.1014 15.0001 17.618 14.9031 17.1669 14.7147C16.7157 14.5263 16.3059 14.2501 15.9606 13.9019C15.6153 13.5537 15.3414 13.1403 15.1546 12.6853C14.9677 12.2304 14.8715 11.7427 14.8715 11.2503C14.8862 11.2519 14.8715 0 14.8715 0Z" fill="#76B900"/>
          <path d="M26.0255 3.75026H29.7436V11.2503H33.4618V3.75026H37.1794V11.2503H40.8976L40.8976 15H29.7436C28.7576 15 27.812 14.605 27.1147 13.9018C26.4174 13.1986 26.0256 12.2448 26.0255 11.2503V3.75026ZM3.71815 7.5V14.9995H0V7.5H3.71815ZM3.71815 0V3.75026H0V0H3.71815Z" fill="#76B900"/>
          <path d="M3.71606 3.75023L7.43421 3.7497C8.42047 3.7497 9.36636 4.14477 10.0639 4.84803C10.7614 5.5513 11.1535 6.50519 11.1539 7.49997V14.9994H7.43579V7.49997L3.71815 7.5L3.71606 3.75023Z" fill="#76B900"/>
        </svg>
    </a>;
  }
}
