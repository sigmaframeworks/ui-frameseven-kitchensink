import {FSEvent, _} from "sigma-ui-frameseven";
export class HomePopup {
  constants = window.Constants;

  colors = {
    default: 'Default',
    red: 'Red',
    pink: 'Pink',
    purple: 'Purple',
    deeppurple: 'Deep Purple',
    indigo: 'Indigo',
    blue: 'Blue',
    lightblue: 'Light Blue',
    cyan: 'Cyan',
    teal: 'Teal',
    green: 'Green',
    lightgreen: 'Light Green',
    lime: 'Lime',
    yellow: 'Yellow',
    amber: 'Amber',
    orange: 'Orange',
    deeporange: 'Deep Orange',
    brown: 'Brown',
    bluegray: 'Blue Gray',
    gray: 'Gray',
    black: 'Black'
  }

  changeLayout(v) {
    document.body.classList.remove(Constants.layout);
    document.body.classList.add((Constants.layout = 'layout-' + v));
  }

  changeTheme(v) {
    document.body.classList.remove(Constants.theme);
    document.body.classList.add((Constants.theme = 'theme-' + v));
  }
}