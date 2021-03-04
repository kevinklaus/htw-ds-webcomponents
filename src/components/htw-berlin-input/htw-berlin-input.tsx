import { Component, Prop, h, State, Watch } from '@stencil/core';

@Component({
  tag: 'htw-berlin-input',
  styleUrl: 'htw-berlin-input.css',
  shadow: true,
})

export class Input {

  /**
   * use dark color theme if true
   */
  @Prop() dark: boolean;

  /**
   * color applied to the input field
   */
  @Prop() color: 'green' | 'orange' | 'blue' = 'green';
  @Watch('color')
  validateColor(newValue: string) {
    const colors = ['green', 'orange', 'blue'];
    const colorIsValid = colors.indexOf(newValue) > -1;
    
    if (!colorIsValid) { throw new Error('color: not a valid color (green, orange, blue)') }
  }

  /**
   * set the state of the input field
   */
  @Prop() state: 'normal' | 'active' | 'disabled' = 'normal';

  /**
   * placeholder text to be displayed in input
   */
  @Prop() placeholder: string = "Type...";

  /**
   * label text to be displayed above input field
   */
  @Prop() label: string = "";

  /**
   * type of input
   */
  @Prop() type: string = "text";

  /**
   * alternative title shown on hover
   */
  @Prop() altTitle: string = "Enter information here";

  /**
   * user input string
   */
  @State() value: string = '';

  handleChange(event) {
    this.value = event.target.value;
  }

  render() {    
    var classes = this.color + ' ' + this.state
    classes += this.dark ? ' dark' : '' 
    var disabled = false
    if (this.state == 'disabled') {
      disabled = true
    } 

    if (this.label === '') { 
      return <input
        class={"htw-berlin-input " + classes}
        title={this.altTitle} 
        value={this.value}
        type={this.type}
        placeholder={this.placeholder}
        disabled={disabled}
      />; 
    }
    else { 
      return <div>
        <label class={this.dark? "dark" : ""}>{this.label}</label> 
        <input
          class={"htw-berlin-input " + classes}
          title={this.altTitle} 
          value={this.value} 
          onInput={(event) => this.handleChange(event)}
          type={this.type}
          placeholder={this.placeholder}
          disabled={disabled}
        />
      </div>; 
    }
  }
}