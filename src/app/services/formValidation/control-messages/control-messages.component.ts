import { Component, Input, ElementRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormValidationService } from "../../../services/formValidation/form-validation.service";

@Component({
  selector: 'control-messages',
  template: '<small class="col-xs-12 text-danger" *ngIf="errorMessage !== null">{{errorMessage}}</small>',
  styles: ['']
})
export class ControlMessagesComponent {

  @Input() control: FormControl;
  @Input() form: FormGroup;  
  setSubmitted;

  constructor(private el: ElementRef) { }
  
  get errorMessage() {
    if (this.form) {
      this.setSubmitted = this.form['_submitted'];
    }
    for (let propertyName in this.control.errors) {
      if ((this.control.errors.hasOwnProperty(propertyName) && this.control.touched || this.setSubmitted)) {
        return FormValidationService.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);

      }
    }
    return null;
  }

}
