//
// @description :
// @author      : Adarsh Pastakia
// @copyright   : 2016 Sigma Frameworks
// @license     : MIT
import {_} from "sigma-ui-frameseven";

export class SwiperView {
  slides = [
    { url: 'http://lorempixel.com/640/540/food/1', caption: 'Image caption', detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { url: 'http://lorempixel.com/640/540/food/2', caption: 'Image caption', detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { url: 'http://lorempixel.com/640/540/food/3', caption: 'Image caption', detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { url: 'http://lorempixel.com/640/540/food/4', caption: 'Image caption', detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { url: 'http://lorempixel.com/640/540/food/5', caption: 'Image caption', detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' }
  ]

  myPhotoBrowser;
  attached() {
    this.myPhotoBrowser = framework7.photoBrowser({
      zoom: 400,
      photos: this.slides
    });
  }
}
