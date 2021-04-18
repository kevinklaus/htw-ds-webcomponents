/*
adapted from https://github.com/wortwart/stencil-slider
*/

import { Component, Element, h, Prop, State, Watch } from '@stencil/core';

@Component({
  tag: 'htw-berlin-slider',
  styleUrl: 'htw-berlin-slider.css',
  shadow: true,
})
export class HtwBerlinSlider {
  /**
   * use dark mode if true
   */
  @Prop() dark: boolean = false;

  /**
   *  color scheme of wizard
   */
  @Prop() color: 'green' | 'orange' | 'blue' = 'green';
  @Watch('color')
  validateColor(newValue: string) {
    const colors = ['green', 'orange', 'blue'];
    const colorIsValid = colors.indexOf(newValue) > -1;

    if (!colorIsValid) {
      throw new Error('color: not a valid color (green, orange, blue)');
    }
  }

  @Function() getStyleClasses() {
    var classList = [];
    classList.push('htw-berlin-slider');
    if (this.dark) classList.push('dark');
    classList.push(this.color);
    return classList.join(' ');
  }

  @Element() el: HTMLElement;

  /**
   *  display the slide status/numbers (e.g. Slide 2/5)
   */
  @Prop() showStatus: boolean = true;
  @State() currentSlideNumber: number = 0;
  private slidesCount: number = 0;
  private slides: NodeList;
  private sliderList: HTMLElement;
  private slideWidth: number = 0;
  private controls: object = {
    prev: null,
    next: null,
  };

  componentWillLoad() {
    this.slides = this.el.querySelectorAll('li');
    this.slidesCount = this.slides.length;
  }

  componentDidLoad() {
    this.sliderList = this.el.shadowRoot.querySelector('ul');
    this.slideWidth = (this.slides[0] as HTMLElement).offsetWidth;
    for (let type in this.controls) this.controls[type] = this.el.shadowRoot.querySelector('.btn_' + type);
    this.updateControls();
  }

  componentDidUpdate() {
    this.sliderList.style.transform = `translateX(${this.currentSlideNumber * this.slideWidth * -1}px)`;
    this.updateControls();
  }

  slide(amount: number = 1) {
    let slideTo = this.currentSlideNumber + amount;
    if (slideTo < 0 || slideTo >= this.slidesCount) return;
    this.currentSlideNumber = slideTo;
  }

  updateControls() {
    this.switchControl('prev', this.currentSlideNumber === 0 ? false : true);
    this.switchControl('next', this.currentSlideNumber === this.slidesCount - 1 ? false : true);
  }

  switchControl(type: string, enabled: boolean) {
    if (this.controls[type]) this.controls[type].disabled = !enabled;
  }

  render() {
    return (
      <htw-berlin-content-box dark={this.dark}>
        <div class={this.getStyleClasses()}>
          <figure>
            <button type="button" class="btn_next" title="Go to next slide" onClick={this.slide.bind(this, 1)}>
              &#10095;
            </button>
            <button type="button" class="btn_prev" title="Go to previous slide" onClick={this.slide.bind(this, -1)}>
              &#10094;
            </button>
            <ul>
              <slot />
            </ul>
            {this.showStatus && (
              <figcaption>
                Slide {this.currentSlideNumber + 1}/{this.slidesCount}
              </figcaption>
            )}
          </figure>
        </div>
      </htw-berlin-content-box>
    );
  }
}
