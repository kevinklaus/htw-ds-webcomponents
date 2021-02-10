import { Component, Prop, h, Watch } from '@stencil/core';

@Component({
  tag: 'htw-berlin-dropdown',
  styleUrl: 'htw-berlin-dropdown.css',
  shadow: true,
})
export class HTWDropdown {
  /**
   * use dark mode if true
   */
  @Prop() dark: boolean = false;

  /**
  *  color scheme
  */
  @Prop() color: "green" | "orange" | "blue" | "disabled" = "green";
  @Watch('color')
  validateColor(newValue: string) {
    const colors = ['green', 'orange', 'blue', 'disabled'];
    const colorIsValid = colors.indexOf(newValue) > -1;
    
    if (!colorIsValid) { throw new Error('color: not a valid color (green, orange, blue, disabled)') }
  }


  @Function() getVariantClasses() {
    var classList = []
    if (this.dark) classList.push("dark")
    classList.push(this.color)
    return classList.join(" ")
  }

  render() {
    return <div class={"htw-berlin-dropdown " + this.getVariantClasses()}>
      <a class="anker" title="open dropdown menu">
        Dropdown
        <span class="icon">
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-down" class="svg-inline--fa fa-chevron-down fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path></svg>
        </span>
      </a>
      <div class="content">
        <slot></slot>
      </div>
    </div>;
  }
}
