//
// @description :
// @author      : Adarsh Pastakia
// @copyright   : 2016 Sigma Frameworks
// @license     : MIT
import {_} from "sigma-ui-frameseven";

export class ListGroupedView {
  countries = _.chain(window.countries).sortBy('continent').groupBy('continent').value();

  searchBar;
  refresh(evt) {
    this.searchBar.disable();
    framework7.showIndicator();
    setTimeout(() => {
      framework7.hideIndicator();
      evt.target.refreshDone();
    }, 2000);
  }
}
