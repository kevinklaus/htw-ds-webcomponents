import { Component, h, Prop, Watch, State } from '@stencil/core';

@Component({
  tag: 'htw-berlin-login',
  styleUrl: 'htw-berlin-login.css',
  shadow: true,
})
export class HtwBerlinLogin {

  /**
   * use dark mode if true
   */
  @Prop() dark: boolean = false;

  /**
   *  color scheme of login
   */
  @Prop() color: "green" | "orange" | "blue" = "green";
  @Watch('color')
  validateColor(newValue: string) {
    const colors = ['green', 'orange', 'blue', 'disabled'];
    const colorIsValid = colors.indexOf(newValue) > -1;
    
    if (!colorIsValid) { throw new Error('color: not a valid color (green, orange, blue)') }
  }

  @State() userValue: string = "";
  @State() passwordValue: string = "";


  handleSubmit(event) {
    event.preventDefault()
    // send data to our backend
    console.log('Email: ', this.userValue)
  }

  handleUserChange(event) {
    this.userValue = event.target.value;
    if (event.target.validity.typeMismatch) {
      console.log('Email is not valid')
    }
  }

  handlePasswordChange(event) {
    this.passwordValue = event.target.value;
  }

  render() {
    return (
      <div class="htw-berlin-login">
        <div class="header">
          <htw-berlin-typography color={this.color} dark={this.dark} tag="h1" fontstyle="bold">
            Log in
          </htw-berlin-typography>
          <htw-berlin-typography dark={this.dark} tag="p">
            Use your HTW Berlin account to log in.
          </htw-berlin-typography>
        </div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <htw-berlin-input 
            label="HTW email" 
            altTitle="Enter your HTW Berlin email" 
            dark={this.dark}
            color={this.color}
            placeholder="you@htw-berlin.de"
            type="email"
            onInput={(event) => this.handleUserChange(event)}
          >
          </htw-berlin-input>
          <htw-berlin-input 
            label="Password" 
            altTitle="Enter your password" 
            dark={this.dark}
            color={this.color}
            type="password"
            onInput={(event) => this.handlePasswordChange(event)}
          >
          </htw-berlin-input>
          <htw-berlin-button 
            text="Log in" 
            altTitle="Log in with your HTW user account" 
            dark={this.dark}
            color={this.color}
            type="submit"
          >
          </htw-berlin-button>
        </form>
      </div>
    );
  }

}
