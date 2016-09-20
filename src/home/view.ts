import {autoinject} from "aurelia-framework";
import {FSApplication} from "sigma-ui-frameseven";

@autoinject()
export class Home {
  constructor(public app: FSApplication) { }

  loadPage(url) {
    setTimeout(() => this.app.loadPage(url), 200);
  }
}
