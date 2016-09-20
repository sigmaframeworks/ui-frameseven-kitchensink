//
// @description :
// @author      : Adarsh Pastakia
// @copyright   : 2016 Sigma Frameworks
// @license     : MIT
import {inject, NewInstance} from "aurelia-framework";
import {ValidationController, ValidationRules, validateTrigger} from "aurelia-validation";
import {_} from "sigma-ui-frameseven";

@inject(NewInstance.of(ValidationController))
export class InputsView {
  model: FormModel;
  constructor(public controller: ValidationController) {
    this.model = new FormModel();
    this.controller.validateTrigger = validateTrigger.change;
  }

  validate() {
    this.controller.validate();
  }
}

export class FormModel {
  name: string = '';

  url: string;
  email: string;
  phone: string;

  color: string = '';

  constructor() {
    ValidationRules
      .ensure((m: FormModel) => m.name)
      .required()
      .maxLength(20)
      .ensure(m => m.color)
      .required()
      .ensure(m => m.email)
      .required()
      .email()
      .ensure(m => m.phone)
      .required()
      .satisfiesRule('phone')
      .ensure(m => m.url)
      .required()
      .on(FormModel);
  }
}