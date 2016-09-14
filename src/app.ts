import {autoinject, singleton} from "aurelia-framework";
import {Router} from "aurelia-router";
import {FSConstants, FSApplication} from "sigma-ui-frameseven";

@autoinject()
export class App {

  mainView;

  constructor(public app: FSApplication) {
  }

  ready() {
    this.mainView = window.mainView;
    this.app.showMainView('home/view.html');
  }

  loadPage(url) {
    this.app.showMainView(url);
  }
}
