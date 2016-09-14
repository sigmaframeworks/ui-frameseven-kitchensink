import {autoinject} from "aurelia-framework";
import {FSApplication} from "sigma-ui-frameseven";

@autoinject()
export class Home {
  constructor(public app: FSApplication) { }
  popup() {
    this.app.showPopup('./home/popup.html');
  }
}
