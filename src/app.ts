import {autoinject, singleton} from "aurelia-framework";
import {Router} from "aurelia-router";
import {FSConstants, FSApplication} from "sigma-ui-frameseven";

@autoinject()
export class App {

  mainView;

  constructor(public app: FSApplication) {
    Constants.layout = "layout-light";
    Constants.theme = "theme-default";
    Constants.navbar = "navbar-default";
  }

  ready() {
    // this.mainView = window.mainView;
    this.app.showMainView('home/view.html');
    this.app.removeSplash();
  }

  loadPage(url) {
    this.app.mainViewBack('home/view.html', false);
    setTimeout(() => this.app.loadPage(url), 200);
  }

}
