import { Component, Prop, h, Watch } from '@stencil/core';

@Component({
  tag: 'htw-berlin-avatar',
  styleUrl: 'htw-berlin-avatar.css',
  shadow: true,
})


export class HtwBerlinAvatar {

  /**
   * render avatar in different sizes
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
  @Prop() src: string = "undefined";

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
        {this.src === "undefined" ? 
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user" class="svg-inline--fa fa-user fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"/></svg>
          :
          <img 
            alt={this.fullname}
            src={this.src}
          />}
      </a>
    );
  }

}
