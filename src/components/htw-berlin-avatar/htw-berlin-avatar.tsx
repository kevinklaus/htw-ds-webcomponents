import { Component, Prop, h, Watch } from '@stencil/core';

@Component({
  tag: 'htw-berlin-avatar',
  styleUrl: 'htw-berlin-avatar.css',
  shadow: true,
})


export class HtwBerlinAvatar {

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
   * set full name of user
   */
  @Prop() fullname: string;

  /**
   * set source of image
   */
  @Prop() src: string = "./avatar.jpg";

  /**
   * set link for avatar
   */
  @Prop() link: string = "javascript:void(0)";


  @Function()  getStyleClasses() {
    var classList = []
    classList.push(this.size)
    return classList.join(" ")
  }

  render() {
    return (
      <a 
        href={this.link} 
        class={"htw-berlin-avatar " + this.getStyleClasses()}
        title={"Profile picture " + this.fullname}
      >
        <img 
          alt={this.fullname}
          src={this.src}
        />
      </a>
    );
  }

}
