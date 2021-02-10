import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'htw-berlin-link',
  styleUrl: 'htw-berlin-link.css',
  shadow: true,
})
export class HTWLink {
  /**
   * use dark mode if true
   */
  @Prop() dark: boolean = false;

  /**
   * use orange color scheme if true
   */
  @Prop() orange: boolean = false;

  /**
   * use breadcrumb, dropdown or side-menu styling if neccessary
   */
  @Prop() variant: "default" | "side-menu" | "breadcrumb" | "dropdown" = "default";

  /**
   * uset link state if neccessary
   */
  @Prop() state: "default" | "active" | "visited" = "default";

  /**
   * text to be displayed in link
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

  @Function()  getStyleClasses() {
      var classList = []
      if (this.dark) classList.push("dark")
      if (this.orange) classList.push("orange")
      if (["side-menu", "breadcrumb", "dropdown"].includes(this.variant)) classList.push(this.variant)
      if (this.state === "active" || this.state === "visited") classList.push(this.state)
      return classList.join(" ")
  }

  render() {
    return <a 
        class={"htw-berlin-link " + this.getStyleClasses() }
        title={this.altTitle} 
        href={this.href}
      >
        {this.text}
        {this.variant === "breadcrumb" && this.state !== "active" ? <span class="icon"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-right" class="svg-inline--fa fa-chevron-right fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path></svg></span> : ""}
      </a>;
  }
}
