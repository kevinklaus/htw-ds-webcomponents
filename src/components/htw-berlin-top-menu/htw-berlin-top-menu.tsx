import { Component, Prop, h, Watch } from '@stencil/core';

@Component({
  tag: 'htw-berlin-top-menu',
  styleUrl: 'htw-berlin-top-menu.css',
  shadow: false,
})


export class TopMenu {
  /**
   * use dark mode if true
   */
  @Prop() dark: boolean = false;

  /**
   * Menu fixed at top by default. Set true to scroll with content
   */
  @Prop() shouldscroll: boolean = false;

  /**
   *  color scheme of menu
   */
  @Prop() color: 'green' | 'orange' | 'blue' = 'green';
  @Watch('color')
  validateColor(newValue: string) {
    const colors = ['green', 'orange', 'blue'];
    const colorIsValid = colors.indexOf(newValue) > -1;
    
    if (!colorIsValid) { throw new Error('color: not a valid color (green, orange, blue)') }
  }

  /**
   * set to false to hide htw logo
   */
  @Prop() logo: boolean = true;


  @Function()  getStyleClasses() {
    var classList = []
    if (this.dark) classList.push('dark')
    if (this.shouldscroll) classList.push('scroll')
    classList.push(this.color)
    return classList.join(' ')
  }

  topMenu!: HTMLDivElement;

  @Function() toggleResponsiveMenu() {
    if (this.topMenu.classList.contains("responsive")) {
      this.topMenu.classList.remove("responsive");
    } else {
      this.topMenu.classList.add("responsive");
    }
  }

  render() {
    return <div 
      class={"htw-berlin-top-menu " + this.getStyleClasses()}
      ref={(el) => this.topMenu = el as HTMLDivElement}>
      {this.logo ? <htw-berlin-logo dark={this.dark} color={this.color} size="s"></htw-berlin-logo> : "" } 
      <span class="spacer"></span>
      <a class="closeMenu" href="javascript:void(0);" onClick={() => this.toggleResponsiveMenu()}>
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times" class="svg-inline--fa fa-times fa-w-11" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"/></svg>
        Close
      </a>
      <slot name="links"></slot>
      <slot name="avatar"></slot>
      <slot name="dropdown"></slot>        
      <a class="responsiveMenu" href="javascript:void(0);" onClick={() => this.toggleResponsiveMenu()}>
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" class="svg-inline--fa fa-bars fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"/></svg>
        Menu
      </a>
    </div>;
  }
}
