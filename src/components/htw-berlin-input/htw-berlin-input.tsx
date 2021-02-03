import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'htw-berlin-input',
  styleUrl: 'htw-berlin-input.css',
  shadow: true,
})

export class HTWInput {

  /**
   * text to be displayed in button
   */
  @Prop() dark: boolean;

  /**
   * text to be displayed in button
   */
  @Prop() value: string;

  /**
   * text to be displayed in button
   */
  @Prop() label: string;

  /**
   * text to be displayed in button
   */
  @Prop() type: string = "text";

  /**
   * alternative title
   */
  @Prop() altTitle: string;


  render() {    
    var classes = this.dark ? "dark" : ""

    return <div class="htw-berlin-input-wrapper">
      <label>{this.label}</label>
      <input
        class={"htw-berlin-input " + classes}
        title={this.altTitle} 
        value={this.value}
        type={this.type}
      />
    </div>;
  }
}
