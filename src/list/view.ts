//
// @description :
// @author      : Adarsh Pastakia
// @copyright   : 2016 Sigma Frameworks
// @license     : MIT
import {_} from "sigma-ui-frameseven";

export class ListView {
  countries = _.chain(window.countries).slice(0, 50).sortBy('continent').groupBy('continent').value();
}
