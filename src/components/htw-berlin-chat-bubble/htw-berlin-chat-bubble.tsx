import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'htw-berlin-chat-bubble',
  styleUrl: 'htw-berlin-chat-bubble.css',
  shadow: true,
})
export class HtwBerlinChatBubble {

  /**
   * use dark mode if true
   */
  @Prop() dark: boolean = false;

  /**
   * set true if this is a received message
   */
  @Prop() received: boolean = false;

  /**
   * full name of user or group name
   */
  @Prop() fullname: string;

  /**
   * set date and time of message
   */
  @Prop() datetime: string;

  @Function()  getStyleClasses() {
    var classList = []
    if (this.dark) classList.push("dark")
    if (this.received) classList.push("received")
    return classList.join(" ")
  }

  @Function()  getMessageMetaInfo() {
      if (this.received) return "Message by " + this.fullname + " | " + this.datetime;
      else return  "Message by you | " + this.datetime;
  }

  render() {
    return (
      <Host>
        <div
          class={"htw-berlin-chat-bubble " + this.getStyleClasses()}
          title={ this.getMessageMetaInfo()}
        > 
          <span class="message">
            <slot></slot>
          </span>
        </div>
      </Host>
    );
  }

}
