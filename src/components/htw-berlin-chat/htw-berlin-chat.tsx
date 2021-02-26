import { Component, Prop, Watch, h } from '@stencil/core';

@Component({
  tag: 'htw-berlin-chat',
  styleUrl: 'htw-berlin-chat.css',
  shadow: false,
})
export class HtwBerlinChat {
  /**
   * use dark mode if true
   */
  @Prop() dark: boolean = false;

  /**
   * full name of user or group name
   */
  @Prop() fullname: string;

  /**
   *  color scheme of chat
   */
  @Prop() color: "green" | "orange" | "blue" = "green";
  @Watch('color')
  validateColor(newValue: string) {
    const colors = ['green', 'orange', 'blue', 'disabled'];
    const colorIsValid = colors.indexOf(newValue) > -1;
    
    if (!colorIsValid) { throw new Error('color: not a valid color (green, orange, blue)') }
  }

  @Function()  getStyleClasses() {
    var classList = []
    if (this.dark) classList.push("dark")
    classList.push(this.color)
    return classList.join(" ")
  }

  chat!: HTMLDivElement;

  @Function() toggleChat() {
    if (this.chat.classList.contains("open")) {
      this.chat.classList.remove("open");
    } else {
      this.chat.classList.add("open");
    }
  }

  render() {
    return (
      <div
        class={"htw-berlin-chat " + this.getStyleClasses()}
        ref={(el) => this.chat = el as HTMLDivElement}
      > 
        <a class="closeChat" href="javascript:void(0);" 
          onClick={() => this.toggleChat()}
          title={"Chat with " + this.fullname}>
          <div class="header">
            <slot name="user"></slot>
            <htw-berlin-typography color="copy" dark={true} tag="h4">
                Chat with {this.fullname}
            </htw-berlin-typography>
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="comment" class="svg-inline--fa fa-comment fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.7 466 2.2 466.5c-2.2 2.3-2.8 5.7-1.5 8.7S4.8 480 8 480c66.3 0 116-31.8 140.6-51.4 32.7 12.3 69 19.4 107.4 19.4 141.4 0 256-93.1 256-208S397.4 32 256 32z"/></svg>
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times" class="svg-inline--fa fa-times fa-w-11" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"/></svg>
          </div>
        </a>
        <div class="messages">
          <slot name="messages"></slot>
        </div>
        <form class="send">
          <textarea placeholder="Type a message... "></textarea>
          <button type="submit">
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="paper-plane" class="svg-inline--fa fa-paper-plane fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"/></svg>
          </button>
        </form>
      </div>
    );
  }

}
